import { Geist, Geist_Mono, Inter, Outfit } from "next/font/google";
import "./globals.css";
import NavigationBar from "@components/NavigationBar";
import Footer from "@components/Footer";
import MobileBottomNav from "@components/MobileBottomNav";
import AIReceptionist from "@components/AIReceptionist";
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

const baseUrl = process.env.BASE_URL || "https://www.aidynamic.pro";

const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  "name": "AI Medical Scriber (AIMS)",
  "alternateName": ["AIMS", "AIMS AI", "AIMS Healthcare", "AIMS AI Consulting"],
  "url": baseUrl,
  "logo": {
    "@type": "ImageObject",
    "url": `${baseUrl}/logo.png`,
    "width": 512,
    "height": 512
  },
  "description": "AIMS is an AI-powered platform offering medical documentation automation, AI consulting for all industries, virtual front desk assistants, and enterprise AI transformation. Automate SOAP notes, medical billing, coding, and clinical workflows. Save 15+ minutes per patient with HIPAA-compliant AI scribing.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "AIMS Founder"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "availableLanguage": ["English", "Spanish"],
    "telephone": "+1-800-AIMS-MED"
  }, {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "availableLanguage": ["English", "Spanish"],
    "telephone": "+1-800-AIMS-MED"
  }, {
    "@type": "ContactPoint",
    "contactType": "AI Consulting",
    "availableLanguage": ["English", "Spanish"],
    "telephone": "+1-800-AIMS-MED"
  }],
  "sameAs": [
"https://linkedin.com/company/aidynamic",
    "https://instagram.com/aidynamicpro",
    "https://youtube.com/@aidynamic"
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "serviceType": ["Healthcare", "Software", "AI Consulting", "AI Implementation", "Virtual Receptionist"],
  "keywords": "AI medical scribe, AI consulting, AI transformation, virtual front desk, AI voice assistant, healthcare automation, enterprise AI, SMB AI solutions",
  "award": ["HIPAA Compliant", "SOC 2 Type II Certified"],
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AIMS Services",
    "itemListElement": [{
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "AI Medical Scribing",
        "description": "Automated clinical documentation and SOAP notes"
      }
    }, {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "AI Consulting for All Industries",
        "description": "End-to-end AI strategy, implementation, and optimization for healthcare, finance, retail, manufacturing, legal, and more"
      }
    }, {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Virtual Front Desk Assistant",
        "description": "AI-powered voice and chat receptionist for 24/7 customer service"
      }
    }]
  }
});

const generateSoftwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${baseUrl}/#software`,
  "name": "AIMS - Smart EHR Platform",
  "alternateName": "AIMS",
  "description": "AIMS is a smart EHR platform with built-in AI. Document patient visits with voice-to-notes, automate billing, manage records, and streamline your entire clinic — all native, no third-party tools needed. Save 15+ minutes per patient with HIPAA-compliant AI.",
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
        "text": "AIMS is an AI-powered platform that automates clinical documentation, SOAP notes, medical billing, and coding. It also provides AI consulting services for all industries and virtual front desk assistants. It uses ambient clinical intelligence to listen to patient consultations and generate accurate medical notes in real-time, saving healthcare providers 15+ minutes per patient."
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
    },
    {
      "@type": "Question",
      "name": "Does AIMS offer AI consulting for non-healthcare industries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, AIMS provides comprehensive AI consulting services for all industries including healthcare, finance, retail, manufacturing, legal, real estate, hospitality, and more. Our AI consulting covers strategy development, use case identification, data readiness assessment, implementation roadmaps, and ongoing optimization. We help businesses of all sizes leverage AI for automation, customer service, predictive analytics, and operational efficiency."
      }
    },
    {
      "@type": "Question",
      "name": "What is the AIMS Virtual Front Desk Assistant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The AIMS Virtual Front Desk Assistant is an AI-powered receptionist that handles phone calls, chat messages, appointment scheduling, customer inquiries, and more — 24/7. It uses advanced voice AI and natural language processing to provide human-like interactions. Available for healthcare, retail, legal offices, real estate, and any business that needs professional front desk coverage without the overhead."
      }
    },
    {
      "@type": "Question",
      "name": "What industries does AIMS AI consulting serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AIMS AI consulting serves all industries including: Healthcare (hospitals, clinics, dental, veterinary), Finance (banks, credit unions, insurance, fintech), Retail (e-commerce, brick-and-mortar, inventory management), Manufacturing (quality control, supply chain, predictive maintenance), Legal (document review, case research, contract analysis), Real Estate (lead qualification, property matching, virtual tours), Hospitality (guest services, booking automation, reviews), Education (student services, grading, personalized learning), and Government (citizen services, document processing, compliance)."
      }
    },
    {
      "@type": "Question",
      "name": "How does the AIMS AI consulting process work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our AI consulting follows a proven 5-phase process: Phase 1 - Discovery & Assessment (understand your business, data, and goals), Phase 2 - Strategy & Roadmap (identify high-impact AI use cases and build implementation plan), Phase 3 - Proof of Concept (validate solutions with pilot projects), Phase 4 - Implementation & Integration (deploy AI solutions into your workflows), Phase 5 - Optimization & Scaling (monitor performance, refine models, expand to new use cases). Most clients see measurable ROI within 90 days."
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
      "text": "Create your free account at aidynamic.pro/get-started",
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
  "license": "https://www.aidynamic.pro/terms-and-conditions",
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
      default: "AIMS - AI Platform: Medical Scribing, AI Consulting & Virtual Front Desk | Enterprise AI Solutions",
      short: "AIMS - AI Medical Scribe, AI Consulting & Virtual Assistant",
      homepage: "AIMS | AI-Powered Platform for Healthcare, Consulting & Virtual Receptionist"
    },
    es: {
      default: "AIMS - Plataforma IA: Scribe Medico, Consultoria IA y Recepcion Virtual | Soluciones Empresariales",
      short: "AIMS - Scribe Medico IA, Consultoria IA y Asistente Virtual",
      homepage: "AIMS | Plataforma IA para Salud, Consultoria y Recepcion Virtual"
    }
  };

  const descriptions = {
    en: {
      default: "AIMS is an AI-powered platform offering medical documentation automation, AI consulting for all industries, and virtual front desk assistants. Transform your business with enterprise AI, voice agents, automated workflows, and intelligent customer service. Save 15+ minutes per patient with HIPAA-compliant AI scribing. 99.8% accuracy.",
      short: "AI platform: medical scribing, AI consulting, virtual front desk, voice agents & enterprise transformation.",
      features: "AI medical scribe, AI consulting for all industries, virtual receptionist, voice AI, automated billing, smart scheduling, clinical notes, patient records, compliance, AI strategy, AI implementation."
    },
    es: {
      default: "AIMS es una plataforma IA con documentacion medica automatizada, consultoria IA para todas las industrias y asistentes de recepcion virtual. Transforma tu negocio con IA empresarial, agentes de voz y flujos automatizados. 99.8% precision.",
      short: "Plataforma IA: scribe medico, consultoria IA, recepcion virtual, agentes de voz y transformacion empresarial.",
      features: "Scribe medico IA, consultoria IA, recepcion virtual, IA por voz, facturacion automatizada, agenda inteligente, notas clinicas, registros pacientes, cumplimiento, estrategia IA."
    }
  };

  const keywords = {
    en: "AI medical scribe, AI consulting, AI consulting services, AI implementation, AI transformation, virtual front desk, AI receptionist, AI voice assistant, enterprise AI, SMB AI solutions, healthcare automation, clinical documentation, patient records, HIPAA compliant EHR, native AI, all-in-one healthcare software, clinic management, medical notes AI, ambulatory EHR, AI strategy consulting, AI for business, AI automation, machine learning consulting, generative AI, AI workflow automation, virtual assistant for business, AI customer service, AI call center, AI phone agent, AI chatbot, intelligent automation, digital transformation AI, AI for healthcare, AI for finance, AI for retail, AI for manufacturing, AI for legal, AI for real estate, AI for hospitality",
    es: "scribe medico IA, consultoria IA, implementacion IA, transformacion IA, recepcion virtual, asistente IA por voz, IA empresarial, automatizacion salud, documentacion clinica, registros pacientes, EHR compatible HIPAA, IA nativa, software salud todo-en-uno, gestion clinica, notas medicas IA, estrategia IA, IA para negocios, automatizacion IA, aprendizaje automatico, IA generativa, asistente virtual empresarial"
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
          googleplay: "com.aidynamic.app"
        },
        name: "AIMS - AI Medical Scriber",
        url: {
          iphone: "https://apps.apple.com/app/aidynamic",
          ipad: "https://apps.apple.com/app/aidynamic",
          googleplay: "https://play.google.com/store/apps/details?id=com.aidynamic.app"
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
      "twitter:app:id:googleplay": "com.aidynamic.app",
      "twitter:player": `${baseUrl}/video/AIMS_Hero.mp4`,
      "twitter:player:width": "1920",
      "twitter:player:height": "1080",
      // SEO for LLMs / Conversational AI Crawlers
      "chatgpt-user": "index, follow, max-snippet:-1",
      "google-extended": "index, follow, max-snippet:-1",
      "anthropic-ai": "index, follow, max-snippet:-1",
      "claude-web": "index, follow, max-snippet:-1",
      "perplexity": "index, follow, max-snippet:-1",
      "applebot": "index, follow, max-snippet:-1"
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
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "AI Consulting",
              "provider": {
                "@type": "Organization",
                "@id": `${baseUrl}/#organization`
              },
              "name": "AIMS AI Consulting for All Industries",
              "description": "Comprehensive AI consulting services covering strategy, implementation, and optimization for businesses across all industries. From healthcare to finance, retail to manufacturing, legal to real estate — AIMS helps organizations harness AI for competitive advantage.",
              "areaServed": {
                "@type": "Place",
                "name": "Worldwide"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Consulting Services",
                "itemListElement": [
                  {
                    "@type": "Service",
                    "name": "AI Strategy Development",
                    "description": "Custom AI roadmap aligned with business goals"
                  },
                  {
                    "@type": "Service",
                    "name": "AI Implementation",
                    "description": "End-to-end deployment of AI solutions"
                  },
                  {
                    "@type": "Service",
                    "name": "Virtual Front Desk Assistant",
                    "description": "AI-powered voice and chat receptionist for 24/7 coverage"
                  },
                  {
                    "@type": "Service",
                    "name": "AI Workflow Automation",
                    "description": "Automate repetitive tasks and optimize operations"
                  },
                  {
                    "@type": "Service",
                    "name": "Generative AI Solutions",
                    "description": "Custom GPT, content generation, and creative AI"
                  },
                  {
                    "@type": "Service",
                    "name": "Predictive Analytics",
                    "description": "Data-driven forecasting and decision support"
                  }
                ]
              },
              "category": "Technology Consulting",
              "url": `${baseUrl}/ai-consulting`
            }),
          }}
        />

        <Script
          id="virtual-assistant-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Virtual Front Desk Assistant",
              "provider": {
                "@type": "Organization",
                "@id": `${baseUrl}/#organization`
              },
              "name": "AIMS AI Virtual Front Desk & Voice Assistant",
              "description": "AI-powered virtual receptionist handling phone calls, chat messages, appointment scheduling, customer inquiries, and lead qualification 24/7. Natural voice AI with human-like conversations for healthcare, retail, legal, real estate, hospitality, and all industries.",
              "areaServed": {
                "@type": "Place",
                "name": "Worldwide"
              },
              "serviceOutput": {
                "@type": "Thing",
                "name": "24/7 Customer Service, Appointment Booking, Lead Qualification, Call Routing, FAQ Handling"
              },
              "category": "AI Customer Service",
              "url": `${baseUrl}/virtual-front-desk`
            }),
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
        <MobileBottomNav lang={lang} />
        <AIReceptionist />
      </body>
    </html>
  );
}
