import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.desc,
  keywords: [
    "Ethics",
    "Shop",
    "Shop in Lebanon",
    "Ethics Store",
    "Buy Products",
  ],
  authors: [
    {
      name: "karimev",
      url: "https://github.com/kari-maw",
    },
  ],
  creator: "karimev",
};

interface ReactLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: ReactLayoutProps) {
  return (
    <html lang="en">
      <body className="dark">
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
