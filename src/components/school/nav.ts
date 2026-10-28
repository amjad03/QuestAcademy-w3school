"use client";

import { useMemo } from "react";
import { Building2, FileText, GraduationCap, Trophy } from "lucide-react";
import { useT } from "@/i18n";
import type { NavItem } from "@/experiences/types";
import { useRoles } from "@/lib/school/client";

/** Role-aware navigation: staff get Teach / School up front; students get the class league; parents get reports. */
export function useSchoolNav({ nav, more }: { nav: NavItem[]; more: NavItem[] }) {
  const t = useT();
  const roles = useRoles();
  const teach = roles.teacherOf.length > 0;
  const principal = roles.principalOf.length > 0;
  const student = Boolean(roles.student);
  const parent = roles.parentOf.length > 0;
  return useMemo(() => {
    const extra: NavItem[] = [];
    if (teach) extra.push({ href: "/teach", label: t("school.nav.teach", "Teach"), icon: GraduationCap, color: "#2EBE70" });
    if (principal) extra.push({ href: "/school", label: t("school.nav.school", "My school"), icon: Building2, color: "#7C4DFF" });
    if (student) extra.push({ href: "/compete", label: t("school.nav.compete", "Class league"), icon: Trophy, color: "#FFB800" });
    const moreExtra: NavItem[] = [];
    if (parent || student) moreExtra.push({ href: "/reports", label: t("school.nav.reports", "Weekly reports"), icon: FileText, color: "#EC4899" });
    if (!extra.length && !moreExtra.length) return { nav, more };
    const [home, ...rest] = nav;
    return { nav: home ? [home, ...extra, ...rest] : extra, more: [...moreExtra, ...more] };
  }, [nav, more, teach, principal, student, parent, t]);
}
