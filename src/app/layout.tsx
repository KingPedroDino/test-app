import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peter Agnew – Senior Software Engineer",
  description:
    "Portfolio and professional profile of Peter Agnew, Senior Software Engineer (AWS, TypeScript, Node.js, DevOps, AI).",
  // Add more metadata as needed for SEO and sharing
  authors: [{ name: "Peter Agnew" }],
  creator: "Peter Agnew",
  keywords: [
    "Peter Agnew",
    "Senior Software Engineer",
    "AWS",
    "TypeScript",
    "Node.js",
    "DevOps",
    "GitHub Actions",
    "OpenAI",
    "Portfolio",
    "Resume",
  ],
  openGraph: {
    title: "Peter Agnew – Senior Software Engineer",
    description:
      "Portfolio and professional profile of Peter Agnew, Senior Software Engineer (AWS, TypeScript, Node.js, DevOps, AI).",
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Peter Agnew Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Agnew – Senior Software Engineer",
    description:
      "Portfolio and professional profile of Peter Agnew, Senior Software Engineer (AWS, TypeScript, Node.js, DevOps, AI).",
    creator: "@yourtwitter",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-950 text-gray-100 scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}