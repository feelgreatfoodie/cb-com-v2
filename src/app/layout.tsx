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
  title: "Christian Bourlier — Architect, Strategist, Operator",
  description:
    "A decade reading rooms. Twenty years closing deals. Eight years building the systems that connect the two. The architecture of leverage.",
  keywords: [
    "data architect",
    "AI strategist",
    "solutions architect",
    "operator",
    "GCP",
    "BigQuery",
    "machine learning",
    "AI infrastructure",
    "Christian Bourlier",
  ],
  authors: [{ name: "Christian Bourlier" }],
  creator: "Christian Bourlier",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://christianbourlier.com",
    title: "Christian Bourlier — Architect, Strategist, Operator",
    description:
      "A decade reading rooms. Twenty years closing deals. Eight years building the systems that connect the two.",
    siteName: "Christian Bourlier",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Bourlier — Architect, Strategist, Operator",
    description:
      "The architecture of leverage. Risk. Revenue. Reality.",
    creator: "@christianbourlier",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
              url: "https://christianbourlier.com",
              email: "christianbourlier@gmail.com",
              jobTitle: "Principal Architect & AI Strategist",
              sameAs: [
                "https://linkedin.com/in/christianbourlier",
                "https://medium.com/@christianbourlier",
              ],
              knowsAbout: [
                "Data Architecture",
                "AI Strategy",
                "Machine Learning",
                "Google Cloud Platform",
                "BigQuery",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
