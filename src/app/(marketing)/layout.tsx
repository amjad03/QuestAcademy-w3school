import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { SiteFooter } from "@/components/marketing/SiteFooter";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg font-landing">
      <MarketingHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
