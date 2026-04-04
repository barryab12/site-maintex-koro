import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://www.maintex.fr"),
  title: "MAINTEX | Logiciel GMAO - Gestion de Maintenance Assistée par Ordinateur",
  description: "MAINTEX est la solution GMAO n°1 en France et en Afrique pour optimiser votre maintenance industrielle. Réduisez les temps d'arrêt de 30%, boostez votre First Time Fix Rate. Essai gratuit 30 jours.",
  keywords: [
    "GMAO", 
    "logiciel maintenance", 
    "maintenance préventive", 
    "maintenance corrective",
    "gestion maintenance",
    "GMAO France",
    "GMAO Afrique",
    "maintenance industrielle",
    "MAINTEX",
    "BBC Partners",
    "logiciel GMAO français",
    "diagnostic panne",
    "First Time Fix Rate"
  ],
  authors: [{ name: "BBC & Partners" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "MAINTEX | Logiciel GMAO - Diagnostiquez vos pannes du premier coup",
    description: "La GMAO qui réduit vos temps d'arrêt de 30% et booste votre First Time Fix Rate. IA intégrée pour un diagnostic de panne instantané.",
    url: "https://www.maintex.fr",
    siteName: "MAINTEX",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/dashboard-hero.png",
        width: 1024,
        height: 1024,
        alt: "Dashboard MAINTEX - Solution GMAO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAINTEX | Logiciel GMAO - Diagnostiquez vos pannes du premier coup",
    description: "La GMAO qui réduit vos temps d'arrêt de 30% et booste votre First Time Fix Rate.",
    images: ["/images/dashboard-hero.png"],
  },
  alternates: {
    canonical: "https://www.maintex.fr",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="theme-color" content="#0A0A8A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
