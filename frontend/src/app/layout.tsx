import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vericus",
  description: "Evidence-driven workspace scaffold",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
