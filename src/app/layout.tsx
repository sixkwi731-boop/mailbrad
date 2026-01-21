import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MailBrad - Sistema de Envio de Emails",
  description: "Sistema de envio de emails com modelos",
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
              <div className="flex items-center gap-2">
                <EnvelopeClosedIcon className="w-6 h-6" />
                <h1 className="text-2xl font-bold">MailBrad</h1>
              </div>
              <span className="text-sm text-gray-600">Sistema de Envio de Emails</span>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
