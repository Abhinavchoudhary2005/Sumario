import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const fontSans = FontSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sumario - AI Powered PDF Summarization",
  description:
    "Sumario is an AI-powered tool that generates concise summaries from PDF files, helping users quickly understand key insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontSans.variable}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
