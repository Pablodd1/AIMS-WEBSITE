import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation_Bar from "@UI/Navigation_bar";
import Footer from "@UI/footer";
import { langSideBar } from "@LG_Bank/SIDEBAR/main";
import FancyLinks from "@UI/fancy_sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL),
  title: 'AI Medical Scriber | Medical Billing and Coding',
  keywords: "Artificial intelligence Medical billing,medical coding artificial intelligence,certified medical billing and coding,medical insurance billing,         medical transcription services,         transcription AI,         healthcare billing and coding,         healthcare documentation,         AI transcribe,         AI transcribe audio to text,         AI transcription service,         healthcare billing services,         live transcribe app,          in one app         ",
  description: "Streamline healthcare documentation with AI Medical Scriber. Automate Medical billing, coding, transcription & more. Book AI Medical Scriber App and Enhance patient care today!",
  generator: 'Next.js',
  applicationName: 'AIMS',
  creator: 'AI Medical Scriber',
  alternates: {
    canonical: process.env.BASE_URL
  },
  verification: {
    // google: '',
    // "msvalidate.01": ''
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/apple-icon.png'
  },
}
export default async function RootLayout({ children, params }) {
  const lang = (await params).LANG;

  return (
    <html lang={(await params).LANG}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation_Bar lang={lang} />
        {children}
        <FancyLinks dict={await langSideBar(lang)} lang={lang} />
        <Footer lang={lang} />
      </body>
    </html>
  );
}
