import { Geist, Geist_Mono, Inter, Outfit } from "next/font/google";
import "./globals.css";
import NavigationBar from "@components/NavigationBar";
import Footer from "@components/Footer";
import { langSideBar } from "@dictionary/SIDEBAR/main";
import FancySidebar from "@components/FancySidebar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Structured data for the organization
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.aimedicalscriber.com/#organization",
      "name": "AI Medical Scriber (AIMS)",
      "url": "https://www.aimedicalscriber.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aimedicalsubscriber.com/logo.png",
        "width": 512,
        "height": 512
      },
      "description": "AI-powered medical documentation platform for healthcare providers. Automate SOAP notes, medical billing, coding, and clinical workflows.",
      "foundingDate": "2024",
      "sameAs": [
        "https://linkedin.com/company/aims",
        "https://twitter.com/aims_health"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "availableLanguage": ["English", "Spanish"]
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.aimedicalscriber.com/#software",
      "name": "AI Medical Scriber",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "10000"
      },
      "featureList": [
        "AI Medical Scribing",
        "Voice Intake",
        "Clinical Documentation",
        "DX/CPT Code Extraction",
        "EHR Integration",
        "MD Clinical Assistant"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.aimedicalscriber.com/#website",
      "url": "https://www.aimedicalsubscriber.com",
      "name": "AI Medical Scriber",
      "publisher": {
        "@id": "https://www.aimedicalsubscriber.com/#organization"
      },
      "inLanguage": ["en", "es"]
    }
  ]
};

export async function generateMetadata({ params }) {
  const lang = (await params).LANG;
  const baseUrl = process.env.BASE_URL || "https://www.aimedicalsubscriber.com";
  
  // Localized metadata
  const titles = {
    en: "AI Medical Scriber | Automate Clinical Documentation & Medical Billing",
    es: "AI Medical Scriber | Automatiza Documentación Clínica y Facturación Médica"
  };
  
  const descriptions = {
    en: "Save 15+ minutes per patient with AI Medical Scriber. Automate SOAP notes, medical billing, coding, voice intake, and EHR documentation. HIPAA-compliant AI scribing for doctors and healthcare providers.",
    es: "Ahorra 15+ minutos por paciente con AI Medical Scriber. Automatiza notas SOAP, facturación médica, codificación, admisión por voz y documentación EHR. IA para médicos y proveedores de salud compatible con HIPAA."
  };
  
  const keywords = {
    en: "AI medical scribe, medical documentation automation, SOAP notes AI, medical billing software, healthcare AI, clinical documentation, EHR integration, voice intake medical, medical coding AI, physician burnout solution, ambient clinical intelligence, healthcare automation",
    es: "IA escriba médica, automatización documentación médica, notas SOAP IA, software facturación médica, IA salud, documentación clínica, integración EHR, admisión por voz médica, codificación médica IA, solución agotamiento médico"
  };

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: titles[lang] || titles.en,
      template: "%s | AI Medical Scriber (AIMS)"
    },
    description: descriptions[lang] || descriptions.en,
    keywords: keywords[lang] || keywords.en,
    authors: [{ name: "AI Medical Scriber Team" }],
    creator: "AI Medical Scriber",
    publisher: "AI Medical Scriber",
    generator: "Next.js",
    applicationName: "AIMS - AI Medical Scriber",
    category: "Healthcare Technology",
    
    // Canonical and alternates
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        "en": `${baseUrl}/en`,
        "es": `${baseUrl}/es`,
        "x-default": `${baseUrl}/en`
      }
    },
    
    // Open Graph
    openGraph: {
      type: "website",
      locale: lang === "es" ? "es_ES" : "en_US",
      url: `${baseUrl}/${lang}`,
      siteName: "AI Medical Scriber (AIMS)",
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: lang === "es" ? "AI Medical Scriber - Plataforma de Documentación Médica con IA" : "AI Medical Scriber - AI Medical Documentation Platform"
        }
      ]
    },
    
    // Twitter Card
    twitter: {
      card: "summary_large_image",
      site: "@aims_health",
      creator: "@aims_health",
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      images: [`${baseUrl}/twitter-image.jpg`]
    },
    
    // Robots
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
    
    // Verification
    verification: {
      // google: 'YOUR_GOOGLE_VERIFICATION_CODE',
      // yandex: 'YOUR_YANDEX_CODE',
    },
    
    // Other metadata
    manifest: "/manifest.json",
    icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
      apple: "/apple-icon.png",
    },
    
    // Apple specific
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "AIMS"
    },
    
    // Format detection
    formatDetection: {
      telephone: true,
      date: true,
      address: true,
      email: true,
      url: true
    },
    
    // Theme color
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
    ],
    
    // Viewport
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
    },
  };
}

export default async function RootLayout({ children, params }) {
  const lang = (await params).LANG;

  return (
    <html lang={(await params).LANG}>
      <head>
        {/* Structured Data / JSON-LD */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${outfit.variable} antialiased`}
      >
        <NavigationBar lang={lang} />
        {children}
        <FancySidebar dict={await langSideBar(lang)} lang={lang} />
        <Footer lang={lang} />
      </body>
    </html>
  );
}
