"use client";

import "./globals.css";
import { ErrorScreen } from "@/components/shell/ErrorScreen";

/** Last-resort boundary (errors in the root layout itself). */
export default function GlobalError(props: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg font-sans text-ink">
        <ErrorScreen {...props} />
      </body>
    </html>
  );
}
