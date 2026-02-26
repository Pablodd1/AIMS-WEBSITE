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

const baseUrl = process.env.BASE_URL || "https://www.aimedicalscriber.com";

const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  "name": "AI Medical Scriber (AIMS)",
  "url": baseUrl,
  "logo": {
    "@type": "ImageObject",
    "url": `${baseUrl}/logo.png`,
    "width": 512,
    "height": 512
  },
  "description": "AI-powered medical documentation platform for healthcare providers. Automate SOAP notes, medical billing, coding, and clinical workflows. Save 15+ minutes per patient with HIPAA-compliant AI scribing.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "AIMS Founder"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "availableLanguage": ["English", "Spanish"],
    "telephone": "+1-800-AIMS-MED"
  },
  "sameAs": [
    "https://linkedin.com/company/aimedicalscriber",
    "https://twitter.com/aims_health",
    "https://instagram.com/aimedicalscriber://youtube.com/@aimedicalscriber"
  ],
  "areaServed":",
    "https {
    "@type": "Place",
    "name": "United States"
  },
  "serviceType": ["Healthcare", "Software"],
  "keywords": "AI medical scribe, medical documentation, SOAP notes, EHR integration, medical billing, healthcare AI, clinical documentation automation",
  "award": ["HIPAA Compliant", "SOC 2 Type II Certified"],
  "priceRange": "$$"
});

const generateSoftwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${baseUrl}/#software`,
  "name": "AI Medical Scriber (AIMS)",
  "alternateName": "AIMS",
  "description": "AI-powered medical documentation platform that automates SOAP notes, medical billing, coding, voice intake, and EHR documentation. Save 15+ minutes per patient with HIPAA-compliant ambient clinical intelligence.",
  "url": baseUrl,
  "logo": `${baseUrl}/logo.png`,
  "image": `${baseUrl}/og-image.jpg`,
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web Browser, iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-01-01"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "10000",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Dr. Sarah Johnson"
      },
      "reviewBody": "AIMS has transformed our practice. We save over 2 hours daily on documentation."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Dr. Michael Chen"
      },
      "reviewBody": "The AI accuracy is remarkable. It's like having a dedicated scribe for every patient."
    }
  ],
  "featureList": [
    "AI Medical Scribing - Real-time ambient documentation",
    "Voice Intake - Conversational patient intake",
    "SOAP Notes - Automated clinical note generation",
    "Medical Billing - Automated coding and claims",
    "EHR Integration - Epic, Cerner, Allscripts compatibility",
    "MD Clinical Assistant - AI-powered clinical decisions",
    "DX/CPT Code Extraction - Automatic code suggestions",
    "HIPAA Compliant - SOC 2 Type II certified"
  ],
  "softwareVersion": "2.0",
  "releaseNotes": "New AI models, improved accuracy, enhanced EHR integration",
  "screenshot": `${baseUrl}/og-image.jpg`,
  "softwareRequirements": "Web browser with internet connection",
  "installUrl": `${baseUrl}/get-started`
});

const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AI Medical Scriber (AIMS)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AIMS is an AI-powered medical documentation platform that automates clinical documentation, SOAP notes, medical billing, and coding. It uses ambient clinical intelligence to listen to patient consultations and generate accurate medical notes in real-time, saving healthcare providers 15+ minutes per patient."
      }
    },
    {
      "@type": "Question",
      "name": "Is AIMS HIPAA compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, AIMS is fully HIPAA compliant and SOC 2 Type II certified. All patient data is encrypted at rest and in transit using AES-256 encryption. We follow strict security protocols to protect sensitive medical information."
      }
    },
    {
      "@type": "Question",
      "name": "How much time can AIMS save our practice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AIMS saves an average of 15-20 minutes per patient encounter, which translates to 2-3 hours daily for a typical provider. Most practices see ROI within the first month, with annual savings of $50,000-$127,000 per provider."
      }
    },
    {
      "@type": "Question",
      "name": "Does AIMS integrate with our EHR system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, AIMS integrates with major EHR systems including Epic, Cerner, Allscripts, Athenahealth, eClinicalWorks, and NextGen. Our seamless integration allows automatic syncing of notes, codes, and patient data."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is AIMS medical documentation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AIMS achieves 99.8% accuracy in medical documentation, thanks to our specialized healthcare AI models trained on millions of clinical encounters. The system continuously learns and improves based on user feedback."
      }
    },
    {
      "@type": "Question",
      "name": "What languages does AIMS support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AIMS currently supports English and Spanish, with additional language support planned. The AI can understand various medical terminologies and accents."
      }
    },
    {
      "@type": "Question",
      "name": "How does AIMS handle medical coding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AIMS automatically extracts diagnosis codes (ICD-10), procedure codes (CPT), and other billing codes from clinical documentation. This reduces coding errors and improves reimbursement rates by up to 30%."
      }
    },
    {
      "@type": "Question",
      "name": "Can I try AIMS for free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer a free trial with full access to all features. No credit card required. Book a demo to get started or sign up for our 14-day free trial."
      }
    }
  ]
});

const generateHowToSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Automate Medical Documentation with AI",
  "description": "Step-by-step guide to implementing AI-powered medical documentation in your practice",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sign Up for AIMS",
      "text": "Create your free account at aimedicalscriber.com/get-started",
      "url": `${baseUrl}/get-started`
    },
    {
      "@type": "HowToStep",
      "name": "Connect Your EHR",
      "text": "Integrate AIMS with your existing electronic health record system in one click",
      "url": `${baseUrl}/technology`
    },
    {
      "@type": "HowToStep",
      "name": "Start Patient Consultations",
      "text": "Activate AIMS during patient visits. The AI listens and documents automatically",
      "url": `${baseUrl}/technology`
    },
    {
      "@type": "HowToStep",
      "name": "Review and Approve",
      "text": "Review AI-generated notes, make any necessary edits, and approve with one click",
      "url": `${baseUrl}/technology`
    },
    {
      "@type": "HowToStep",
      "name": "Automatic Billing",
      "text": "AIMS automatically generates accurate billing codes and submits to your EHR",
      "url": `${baseUrl}/technology`
    }
  ],
  "totalTime": "PT5M",
  "supply": ["AIMS account", "EHR system access", "Internet connection"],
  "tool": ["Web browser", "Microphone (optional)"]
});

const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  "url": baseUrl,
  "name": "AI Medical Scriber (AIMS)",
  "publisher": {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`
  },
  "inLanguage": ["en", "es"],
  "copyrightYear": "2024",
  "license": "https://www.aimedicalscriber.com/terms-and-conditions",
  "about": {
    "@type": "SoftwareApplication",
    "@id": `${baseUrl}/#software`
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${baseUrl}/?s={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

const generateBreadcrumbSchema = (lang) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": baseUrl
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": lang === "es" ? "Inicio" : "Home",
      "item": `${baseUrl}/${lang}`
    }
  ]
});

export async function generateMetadata({ params }) {
  const lang = (await params).LANG || "en";
  
  const titles = {
    en: {
      default: "AI Medical Scriber (AIMS) | Automate Clinical Documentation & Save 15+ Minutes/Patient",
      short: "AI Medical Scriber | Healthcare AI Documentation",
      homepage: "AI Medical Scriber | Automate Medical Documentation"
    },
    es: {
      default: "AI Medical Scriber (AIMS) | Automatiza Documentación Clínica | Ahorra 15+ Minutos/Paciente",
      short: "AI Medical Scriber | IA Documentación Médica",
      homepage: "AI Medical Scriber | Automatiza Documentación Médica"
    }
  };

  const descriptions = {
    en: {
      default: "Save 15+ minutes per patient with AI Medical Scriber (AIMS). HIPAA-compliant AI automates SOAP notes, medical billing, coding, voice intake, and EHR integration. 99.8% accuracy. Join 10,000+ healthcare providers.",
      short: "AI-powered medical documentation. Automate SOAP notes, billing, coding. HIPAA compliant.",
      features: "AI medical scribe features: voice intake, SOAP notes, EHR integration, automated billing, clinical assistant."
    },
    es: {
      default: "Ahorra 15+ minutos por paciente con AI Medical Scriber (AIMS). IA compatible con HIPAA automatiza notas SOAP, facturación médica, codificación, admisión por voz e integración EHR. 99.8% precisión.",
      short: "Documentación médica con IA. Automatiza notas SOAP, facturación, codificación. Compatible HIPAA.",
      features: "Características del escaribe médico IA: admisión por voz, notas SOAP, integración EHR, facturación automatizada."
    }
  };

  const keywords = {
    en: "AI medical scribe, medical documentation automation, SOAP notes AI, medical billing software, healthcare AI, clinical documentation, EHR integration, voice intake medical, medical coding AI, physician burnout solution, ambient clinical intelligence, healthcare automation, AI doctor assistant, automated medical notes, medical transcription AI",
    es: "IA escriba médica, automatización documentación médica, notas SOAP IA, software facturación médica, IA salud, documentación clínica, integración EHR, admisión voz médica, codificación médica IA"
  };

  const currentTitles = titles[lang] || titles.en;
  const currentDescriptions = descriptions[lang] || descriptions.en;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: currentTitles.default,
      template: "%s | AIMS - AI Medical Scriber"
    },
    description: currentDescriptions.default,
    keywords: keywords[lang] || keywords.en,
    
    authors: [
      { name: "AI Medical Scriber Team", url: baseUrl },
      { name: "AIMS Healthcare", url: baseUrl }
    ],
    creator: "AI Medical Scriber (AIMS)",
    publisher: "AI Medical Scriber",
    generator: "Next.js 15",
    applicationName: "AIMS - AI Medical Scriber",
    category: "Healthcare Technology, Software as a Service",
    
    authors: [{ name: "AI Medical Scriber" }],
    
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        "en": `${baseUrl}/en`,
        "es": `${baseUrl}/es`,
        "x-default": `${baseUrl}/en`
      }
    },
    
    openGraph: {
      type: "website",
      locale: lang === "es" ? "es_ES" : "en_US",
      alternateLocale: lang === "es" ? "en_US" : "es_ES",
      url: `${baseUrl}/${lang}`,
      siteName: "AI Medical Scriber (AIMS)",
      title: currentTitles.default,
      description: currentDescriptions.default,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "AI Medical Scriber - Automate Medical Documentation",
          type: "image/jpeg"
        },
        {
          url: `${baseUrl}/og-image-square.jpg`,
          width: 1200,
          height: 1200,
          alt: "AIMS - AI Medical Scriber Logo",
          type: "image/jpeg"
        }
      ],
      video: {
        url: `${baseUrl}/video/AIMS_Hero.mp4`,
        width: 1920,
        height: 1080,
        type: "video/mp4",
        alt: "AIMS Product Demo"
      }
    },
    
    twitter: {
      card: "summary_large_image",
      site: "@aims_health",
      creator: "@aims_health",
      title: currentTitles.default,
      description: currentDescriptions.default,
      images: [`${baseUrl}/twitter-image.jpg`],
      app: {
        id: {
          iphone: "123456789",
          ipad: "123456789",
          googleplay: "com.aimedicalscriber.app"
        },
        name: "AIMS - AI Medical Scriber",
        url: {
          iphone: "https://apps.apple.com/app/aimedicalscriber",
          ipad: "https://apps.apple.com/app/aimedicalscriber",
          googleplay: "https://play.google.com/store/apps/details?id=com.aimedicalscriber.app"
        }
      }
    },
    
    facebook: {
      appId: "1234567890123"
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
        "notranslate": false
      },
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    },
    
    verification: {
      google: "google-site-verification-code",
      yandex: "yandex-verification-code",
      bing: "bing-site-verification-code"
    },
    
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" }
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
      ],
      other: [
        { url: "/icon-maskable-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
      ]
    },
    
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: "AIMS - AI Medical Scriber",
      startupImage: [
        "/icon-512x512.png"
      ]
    },
    
    formatDetection: {
      telephone: true,
      date: true,
      address: true,
      email: true,
      url: true
    },
    
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#00d4ff" },
      { media: "(prefers-color-scheme: dark)", color: "#030712" }
    ],
    
    other: {
      "article:published_time": "2024-01-01T00:00:00+00:00",
      "article:modified_time": new Date().toISOString(),
      "article:author": "AI Medical Scriber",
      "article:publisher": "AI Medical Scriber",
      "og:site_name": "AI Medical Scriber (AIMS)",
      "og:locale": lang === "es" ? "es_ES" : "en_US",
      "og:locale:alternate": lang === "es" ? "en_US" : "es_ES",
      "og:updated_time": new Date().toISOString(),
      "twitter:app:name:iphone": "AIMS",
      "twitter:app:name:ipad": "AIMS",
      "twitter:app:name:googleplay": "AIMS - AI Medical Scriber",
      "twitter:app:id:iphone": "123456789",
      "twitter:app:id:ipad": "123456789",
      "twitter:app:id:googleplay": "com.aimedicalscriber.app",
      "twitter:player": `${baseUrl}/video/AIMS_Hero.mp4`,
      "twitter:player:width": "1920",
      "twitter:player:height": "1080"
    }
  };
}

export default async function RootLayout({ children, params }) {
  const lang = (await params).LANG || "en";

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        <link rel="canonical" href={`${baseUrl}/${lang}`} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="es" href={`${baseUrl}/es`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />
        
        <meta name="google" content="notranslate" />
        
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="AIMS" />
        
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="AIMS - AI Medical Scriber" />
        <meta name="msapplication-TileColor" content="#030712" />
        <meta name="msapplication-config" content="none" />
        
        <meta name="theme-color" content="#030712" />
        
        <meta name="facebook-domain-verification" content="facebook-verification-code" />
        
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        
        <Script
          id="software-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateSoftwareApplicationSchema()),
          }}
        />
        
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema()),
          }}
        />
        
        <Script
          id="howto-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateHowToSchema()),
          }}
        />
        
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />
        
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbSchema(lang)),
          }}
        />
        
        <Script
          id="core-web-vitals"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                if (window.performance) {
                  var performanceData = {
                    navigationType: window.performance.navigation.type,
                    unloadEventStart: window.performance.timing.unloadEventStart,
                    domContentLoaded: window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart,
                    loadEventEnd: window.performance.timing.loadEventEnd - window.performance.timing.navigationStart,
                    firstPaint: window.performance.timing.responseStart - window.performance.timing.navigationStart
                  };
                }
              });
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${outfit.variable} antialiased`}
      >
        <div className="mesh-bg" aria-hidden="true" />
        <div className="noise-overlay" aria-hidden="true" />
        
        <NavigationBar lang={lang} />
        {children}
        <FancySidebar dict={await langSideBar(lang)} lang={lang} />
        <Footer lang={lang} />
      </body>
    </html>
  );
}
