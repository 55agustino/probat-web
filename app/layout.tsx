import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://probat.uy"),
  title: "PROBAT | Especialistas en Baterías de Litio",
  description:
    "PROBAT es una empresa uruguaya especializada en clasificación, recertificación y fabricación de baterías de litio. Damos segunda vida a baterías para movilidad eléctrica y sistemas de energía.",
  keywords: [
    "baterías de litio",
    "recertificación baterías litio",
    "segunda vida baterías",
    "movilidad eléctrica Uruguay",
    "fabricación baterías litio",
    "clasificación baterías",
    "PROBAT Uruguay",
  ],
  authors: [{ name: "PROBAT" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "PROBAT | Especialistas en Baterías de Litio",
    description:
      "Clasificación, recertificación y fabricación de baterías de litio. Segunda vida para baterías de movilidad eléctrica en Uruguay.",
    url: "https://probat.uy",
    siteName: "PROBAT",
    images: [
      {
        url: "/logow.webp",
        width: 1200,
        height: 630,
        alt: "PROBAT - Baterías de Litio Uruguay",
      },
    ],
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROBAT | Especialistas en Baterías de Litio",
    description:
      "Clasificación, recertificación y fabricación de baterías de litio en Uruguay.",
    images: ["/logow.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PROBAT",
              url: "https://probat.uy",
              logo: "https://probat.uy/logow.webp",
              description:
                "Empresa uruguaya especializada en clasificación, recertificación y fabricación de baterías de litio para movilidad eléctrica.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+59893768645",
                contactType: "customer service",
                availableLanguage: "Spanish",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "UY",
              },
              sameAs: ["https://probat.uy"],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
        <SpeedInsights />
      </body>
    </html>
  );
}
