import { Geist, Geist_Mono, Inter, Outfit } from "next/font/google";
import "./globals.css";
import NavigationBar from "@components/NavigationBar";
import Footer from "@components/Footer";
import { langSideBar } from "@dictionary/SIDEBAR/main";
import FancySidebar from "@components/FancySidebar";

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

export async function generateMetadata({ params }) {
  const lang = (await params).LANG;

  return {
    metadataBase: new URL(process.env.BASE_URL),
    title: "AI Medical Scriber | Medical Billing and Coding",
    keywords:
      "Artificial intelligence Medical billing,medical coding artificial intelligence,certified medical billing and coding,medical insurance billing,         medical transcription services,         transcription AI,         healthcare billing and coding,         healthcare documentation,         AI transcribe,         AI transcribe audio to text,         AI transcription service,         healthcare billing services,         live transcribe app,          in one app         ",
    description:
      "Streamline healthcare documentation with AI Medical Scriber. Automate Medical billing, coding, transcription & more. Book AI Medical Scriber App and Enhance patient care today!",
    generator: "Next.js",
    applicationName: "AIMS",
    creator: "AI Medical Scriber",
    alternates: {
      canonical: process.env.BASE_URL + "/" + lang || "en",
    },
    verification: {
      // google: '',
      // "msvalidate.01": ''
    },
    manifest: "/manifest.json",
    icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
      apple: "/apple-icon.png",
    },
  };
}

export default async function RootLayout({ children, params }) {
  const lang = (await params).LANG;

  return (
    <html lang={(await params).LANG}>
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
