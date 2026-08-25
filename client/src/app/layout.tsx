import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hemanth | Opsora Automation | AI & Systems Engineer",
  description: "Portfolio of Hemanth, Founder of Opsora. Specializing in AI Automation, Market Intelligence, and Shelly—a lead generation automation tool.",
  keywords: ["Hemanth", "Opsora", "Shelly Automation", "Lead Scraping", "Python AI", "Software Engineer", "MCA Student Portfolio"],
  openGraph: {
    title: "Hemanth | Founder of Opsora",
    description: "Systems Engineer specializing in high-stakes automation and AI.",
    url: "https://opsora.in",
    images: [{ url: "/images/hero.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <main className="flex-1">
          {children} <Analytics /> <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
