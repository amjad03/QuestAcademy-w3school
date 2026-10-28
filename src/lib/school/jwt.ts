import "server-only";
import { createHmac, createPublicKey, timingSafeEqual, verify, type KeyObject } from "node:crypto";

/**
 * Minimal JWT verification for "Sign in with Kinetix" (no dependency):
 * HS256 with KINETIX_JWT_SECRET, or RS256 / ES256 with keys from KINETIX_JWKS_URL.
 */

export interface KinetixClaims {
  iss?: string;
  aud?: string | string[];
  sub: string;
  exp: number;
  iat?: number;
  nbf?: number;
  jti?: string;
  email: string;
  name?: string;
  role?: "student" | "teacher" | "principal" | "parent";
  org_id?: string;
  org_name?: string;
  class_name?: string;
  section?: string;
  grade?: string;
  board?: string;
}

export const kinetixEnabled = () => Boolean(process.env.KINETIX_JWT_SECRET || process.env.KINETIX_JWKS_URL);

const b64 = (s: string) => Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/"), "base64");

let jwks: { at: number; keys: (JsonWebKey & { kid?: string })[] } | null = null;

async function jwksKey(kid: string | undefined): Promise<KeyObject | null> {
  const url = process.env.KINETIX_JWKS_URL;
  if (!url) return null;
  const fresh = jwks && Date.now() - jwks.at < 10 * 60_000;
  const find = () => jwks?.keys.find((k) => (kid ? k.kid === kid : true));
  if (!fresh || !find()) {
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`jwks_${res.status}`);
    jwks = { at: Date.now(), keys: ((await res.json()) as { keys: (JsonWebKey & { kid?: string })[] }).keys ?? [] };
  }
  const k = find();
  return k ? createPublicKey({ key: k, format: "jwk" }) : null;
}

export async function verifyKinetixToken(token: string): Promise<KinetixClaims> {
  const parts = token.split(".");
  if (parts.length !== 3) throw new Error("malformed");
  const [h, p, s] = parts;
  const header = JSON.parse(b64(h).toString("utf8")) as { alg?: string; kid?: string; typ?: string };
  const data = Buffer.from(`${h}.${p}`);
  const sig = b64(s);

  if (header.alg === "HS256") {
    const secret = process.env.KINETIX_JWT_SECRET;
    if (!secret) throw new Error("hs256_not_configured");
    const want = createHmac("sha256", secret).update(data).digest();
    if (want.length !== sig.length || !timingSafeEqual(want, sig)) throw new Error("bad_signature");
  } else if (header.alg === "RS256" || header.alg === "ES256") {
    const key = await jwksKey(header.kid);
    if (!key) throw new Error("unknown_key");
    const ok = header.alg === "RS256" ? verify("RSA-SHA256", data, key, sig) : verify("sha256", data, { key, dsaEncoding: "ieee-p1363" }, sig);
    if (!ok) throw new Error("bad_signature");
  } else {
    throw new Error("unsupported_alg");
  }

  const c = JSON.parse(b64(p).toString("utf8")) as KinetixClaims;
  const now = Math.floor(Date.now() / 1000);
  const skew = 60;
  if (typeof c.exp !== "number" || c.exp < now - skew) throw new Error("expired");
  if (c.nbf && c.nbf > now + skew) throw new Error("not_yet_valid");
  // Tokens are for an immediate redirect: refuse anything issued more than 5 minutes ago or valid for over 10.
  if (c.iat && c.iat < now - 300) throw new Error("too_old");
  if (c.exp - (c.iat ?? now) > 600 + skew) throw new Error("lifetime_too_long");
  const iss = process.env.KINETIX_ISSUER;
  if (iss && c.iss !== iss) throw new Error("bad_issuer");
  const aud = process.env.KINETIX_AUDIENCE || "quest-academy";
  const auds = Array.isArray(c.aud) ? c.aud : c.aud ? [c.aud] : [];
  if (!auds.includes(aud)) throw new Error("bad_audience");
  if (!c.sub || !c.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)) throw new Error("missing_identity");
  if (!c.jti) throw new Error("missing_jti");
  return c;
}
