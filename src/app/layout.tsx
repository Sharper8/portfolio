import type { Metadata } from "next";
import { Geist, Geist_Mono, Michroma } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollProgress from "@/components/scroll-progress";
import { Navbar } from "@/components/navbar";
import Favicon from "@/components/favicon";
import { VersionLogger } from "@/components/version-logger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Michroma({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OxY — Portfolio",
  description: "Personal portfolio: projects, experience, and writing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${display.variable} antialiased`}
      >
        <ThemeProvider
          defaultTheme="dark"
          storageKey="ui-theme"
        >
          <Navbar />
          <Favicon />
          <VersionLogger />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
