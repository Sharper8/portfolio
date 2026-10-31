import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { JsonLd } from "@/components/json-ld";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devprocore.com"),
  title: "OxY — systems & infrastructure engineer",
  description:
    "OxY: anonymous systems & infrastructure engineer. Disaster recovery, zero-trust backups, observability, security. Selected work, experience, credentials, contact.",
  openGraph: {
    title: "OxY — systems & infrastructure engineer",
    description:
      "Systems that stay up when things go wrong. Selected work, experience and credentials.",
    url: "https://devprocore.com",
    siteName: "OxY",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0c0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mono.variable}>
      <body style={{ fontFamily: "var(--font-mono), ui-monospace, monospace" }}>
        <JsonLd />
        <Navbar />
        {children}
        <Script
          defer
          data-domain="devprocore.com"
          src="https://analytics.devprocore.com/js/script.file-downloads.hash.outbound-links.pageview-props.tagged-events.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
