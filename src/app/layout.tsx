import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { KonamiOverlay } from "@/components/KonamiOverlay";
import { CursorTrail } from "@/components/CursorTrail";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ChatWidget } from "@/components/ChatWidget";

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
  metadataBase: new URL("https://bourlier.ai"),
  title: "Christian Bourlier — AI Systems Architect",
  description:
    "I architect production AI systems where autonomous agents perform reliable, governed work at scale. 60+ tool MCP server. Multi-agent orchestration. Full audit coverage.",
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
  alternates: {
    canonical: "https://bourlier.ai",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bourlier.ai",
    title: "Christian Bourlier — AI Systems Architect",
    description: "Bounded AI systems that ship. 3 production systems. 60+ MCP tools. 100% audit coverage. 0 uncontained failures.",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `setTimeout(function(){console.log('%cBom dia from Christian Bourlier.%c\\n\\nWelcome to the AI systems architect\\'s workspace. The Grid runs here — bounded autonomous agents, full audit trails, zero uncontained failures. Drop me a line if you\\'d like to explore how production AI systems work at scale.','font-size:16px;font-weight:bold;color:#5bb8d4;','font-size:13px;color:#7a8694;')},2000);`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ScrollProgress />
        <KonamiOverlay />
        <CursorTrail />
        <ChatWidget />
        {children}
      </body>
    </html>
  );
}
