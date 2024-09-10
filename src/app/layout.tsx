import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppKit } from "@/connection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LearnFi",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppKit>{children}</AppKit>
      </body>
    </html>
  );
}
