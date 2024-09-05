import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robotix Club 2024",
  description: "Robotix CLub 2024 website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
