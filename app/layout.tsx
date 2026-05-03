import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invoice Dunning Automator — Automate Invoice Follow-ups & Collections",
  description: "Automatically send personalized payment reminders, escalate overdue invoices, track payment patterns, and automate your collection workflow. Built for freelancers and small business owners."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d0fa18d8-c4a0-4321-9d99-9e2e5e4caafc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
