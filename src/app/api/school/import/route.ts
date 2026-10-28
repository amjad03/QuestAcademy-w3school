import { json, pool, slipPassword, slug, staffFor } from "@/lib/school/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

interface Row {
  name: string;
  class: string;
  section?: string;
  email?: string;
  roll?: string;
  parentName?: string;
  parentPhone?: string;
  parentEmail?: string;
}

export interface SlipResult {
  name: string;
  className: string;
  section: string;
  email: string;
  password: string | null;
  status: "created" | "existing" | "error";
  error?: string;
}

const MAX_ROWS = 600;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Bulk-create student accounts from a CSV (parsed in the browser) and put them in their classes.
 * Principals can import into any class (missing classes are created); teachers into their own classes.
 */
export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as { schoolId?: string; rows?: Row[] } | null;
  if (!body?.schoolId || !Array.isArray(body.rows)) return json({ error: "bad_request", message: "Send schoolId and rows." }, 400);
  if (body.rows.length > MAX_ROWS) return json({ error: "too_many", message: `Import at most ${MAX_ROWS} students at a time.` }, 400);
  const ctx = await staffFor(req, body.schoolId);
  if (ctx instanceof Response) return ctx;
  const { sb, principal, classIds } = ctx;

  const { data: school } = await sb.from("schools").select("id, name, board").eq("id", body.schoolId).single();
  if (!school) return json({ error: "not_found", message: "School not found." }, 404);
  const { data: existing } = await sb.from("classes").select("id, name, section").eq("school_id", school.id);
  const classes = new Map((existing ?? []).map((c) => [`${c.name.toLowerCase()}|${c.section.toLowerCase()}`, c.id as string]));
  const domain = process.env.SCHOOL_LOGIN_EMAIL_DOMAIN || `${slug(school.name).replace(/\./g, "")}.students.invalid`;

  async function classFor(name: string, section: string): Promise<string | null> {
    const key = `${name.toLowerCase()}|${section.toLowerCase()}`;
    const hit = classes.get(key);
    if (hit) return principal || classIds.has(hit) ? hit : null;
    if (!principal) return null;
    const puc = /puc[- ]?(1|2|i{1,2})\b/i.exec(name)?.[1];
    const grade = puc ? `PUC-${puc.length === 2 || puc === "2" ? 2 : 1}` : (/(\d{1,2})/.exec(name)?.[1] ?? null);
    const { data, error } = await sb.from("classes").insert({ school_id: school!.id, name, section, grade, board: school!.board }).select("id").single();
    if (error) {
      const again = await sb.from("classes").select("id").eq("school_id", school!.id).eq("name", name).eq("section", section).maybeSingle();
      if (again.data) return (classes.set(key, again.data.id), again.data.id);
      return null;
    }
    classes.set(key, data.id);
    return data.id;
  }

  // Classes first (sequentially) so parallel rows don't race to create the same class.
  const rows = body.rows.map((r) => ({ ...r, name: String(r.name ?? "").trim(), class: String(r.class ?? "").trim(), section: String(r.section ?? "A").trim() || "A" }));
  for (const key of new Set(rows.map((r) => `${r.class}|${r.section}`))) {
    const [c, s] = key.split("|");
    if (c) await classFor(c, s);
  }

  const results = await pool(rows, 6, async (r): Promise<SlipResult> => {
    const base = { name: r.name, className: r.class, section: r.section };
    if (!r.name || !r.class) return { ...base, email: r.email ?? "", password: null, status: "error", error: "Name and class are required" };
    const classId = await classFor(r.class, r.section);
    if (!classId) return { ...base, email: r.email ?? "", password: null, status: "error", error: "You can't add students to this class" };
    let email = (r.email ?? "").trim().toLowerCase();
    if (email && !EMAIL.test(email)) return { ...base, email, password: null, status: "error", error: "Invalid email" };
    let password: string | null = slipPassword();
    let userId: string | null = null;
    let status: SlipResult["status"] = "created";
    if (email) {
      const found = await sb.rpc("admin_user_id_by_email", { p_email: email });
      userId = (found.data as string | null) ?? null;
    }
    if (!userId) {
      for (let attempt = 0; attempt < 3 && !userId; attempt++) {
        const login = email || `${slug(r.name)}.${Math.floor(1000 + Math.random() * 9000)}@${domain}`;
        const { data, error } = await sb.auth.admin.createUser({ email: login, password, email_confirm: true, user_metadata: { full_name: r.name, created_by_school: school!.id } });
        if (data?.user) {
          userId = data.user.id;
          email = login;
        } else if (error && !/already/i.test(error.message)) return { ...base, email: login, password: null, status: "error", error: error.message };
        else if (email) break;
      }
      if (!userId) return { ...base, email, password: null, status: "error", error: "Could not create the account" };
    } else {
      status = "existing";
      password = null;
    }
    // One class per student: replace any other class in this school.
    await sb.from("memberships").delete().eq("user_id", userId).eq("school_id", school!.id).eq("role", "student").neq("class_id", classId);
    const have = await sb.from("memberships").select("id").eq("user_id", userId).eq("class_id", classId).eq("role", "student").maybeSingle();
    if (!have.data) {
      const ins = await sb.from("memberships").insert({ user_id: userId, school_id: school!.id, class_id: classId, role: "student", display_name: r.name, roll_no: r.roll || null });
      if (ins.error && !/duplicate/i.test(ins.error.message)) return { ...base, email, password, status: "error", error: ins.error.message };
    }
    if (r.parentPhone || r.parentEmail) {
      await sb.from("guardians").insert({ student_id: userId, school_id: school!.id, name: r.parentName || null, phone: r.parentPhone?.replace(/[^\d+]/g, "") || null, email: r.parentEmail?.toLowerCase() || null });
    }
    return { ...base, email, password, status };
  });

  return json({ results, created: results.filter((r) => r.status === "created").length, existing: results.filter((r) => r.status === "existing").length, errors: results.filter((r) => r.status === "error").length });
}
