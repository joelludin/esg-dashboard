import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ESG Dashboard",
  description: "ESG Performance Dashboard for Companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}