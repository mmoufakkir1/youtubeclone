import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "./contexts/SidebarContext";
import { PageHeader } from "./layouts/PageHeader";
import { Sidebar } from "./layouts/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YouTube Clone",
  description: "A modern YouTube clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="h-screen flex flex-col font-sans bg-white text-black">
        <SidebarProvider>
          <PageHeader />
          <div className="flex flex-1 overflow-hidden bg-white">
            <Sidebar />
            <main className="flex-1 overflow-y-auto px-8 bg-white">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
