import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { AlertsProvider } from "@/context/AlertsContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bantay Gubat — Forest Outpost 03",
  description:
    "IoT/ML illegal logging detection dashboard — live acoustic sensor monitoring for protected forest areas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[var(--forest-bg)] text-[var(--forest-text)]">
        <AlertsProvider>
          <main className="flex h-screen overflow-hidden bg-[var(--forest-bg)]">
            <Sidebar />

            <section className="forest-page-shell flex min-w-0 flex-1 flex-col">
              <TopBar />
              <div className="min-h-0 flex-1 overflow-y-auto bg-transparent">{children}</div>
            </section>
          </main>
        </AlertsProvider>
      </body>
    </html>
  );
}
