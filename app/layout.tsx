import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FAM / IDR GenAI Platform",
  description: "Enterprise audit operations dashboard prototype for IDR response workflows.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
