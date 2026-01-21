import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import { EnvelopeClosedIcon, ClockIcon } from "@radix-ui/react-icons";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MailBrad - Sistema de Envio de Emails",
  description: "Sistema de envio de emails com modelos e tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased min-h-screen bg-white text-black`} suppressHydrationWarning>
        <nav className="border-b border-black">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">MailBrad</h1>
              <div className="flex gap-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors"
                >
                  <EnvelopeClosedIcon />
                  Enviar
                </Link>
                <Link
                  href="/history"
                  className="flex items-center gap-2 px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors"
                >
                  <ClockIcon />
                  Histórico
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
