import { formulaSheets } from "@/content/exam/formulas";
import { tex } from "@/components/Md";
import { FormulaVault } from "@/components/exam/FormulaVault";

export const metadata = { title: "Formula vault" };

export default function Page() {
  // Pre-render KaTeX on the server so the vault is instant.
  const sheets = formulaSheets.map((s) => ({ ...s, items: s.items.map((i) => ({ ...i, html: tex(i.tex, true) })) }));
  return <FormulaVault sheets={sheets} />;
}
