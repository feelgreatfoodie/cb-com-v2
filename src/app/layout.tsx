import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Christian Bourlier — AI Systems Architect",
  description:
    "I architect production AI systems where autonomous agents perform reliable, governed work at scale. 39-tool MCP server. Multi-agent orchestration. Full audit coverage.",
  keywords: [
    "AI systems architect",
    "MCP server",
    "multi-agent orchestration",
    "Claude Code",
    "production AI systems",
    "AI governance",
    "CacheBash",
    "Christian Bourlier",
  ],
  authors: [{ name: "Christian Bourlier" }],
  creator: "Christian Bourlier",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bourlier.ai",
    title: "Christian Bourlier — AI Systems Architect",
    description: "Bounded AI systems that ship. 3 production systems. 39 MCP tools. 100% audit coverage. 0 uncontained failures.",
    siteName: "bourlier.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Bourlier — AI Systems Architect",
    description: "Bounded AI systems that ship. Production AI infrastructure with governance, safety, and verifiable evidence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Christian Bourlier",
              url: "https://bourlier.ai",
              email: "christian@bourlier.ai",
              jobTitle: "AI Systems Architect",
              sameAs: [
                "https://linkedin.com/in/christianbourlier",
                "https://medium.com/@christianbourlier",
                "https://github.com/rezzedai",
              ],
              knowsAbout: [
                "AI Systems Architecture",
                "MCP Server Development",
                "Multi-Agent Orchestration",
                "Google Cloud Platform",
                "Production AI Governance",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
