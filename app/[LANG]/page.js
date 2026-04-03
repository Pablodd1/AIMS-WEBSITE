import { getDictionary } from "@dictionary/getDictionary";
import HomePageHero from "@components/HomePageHero";
import PremiumAIFeatures from "@components/PremiumAIFeatures";
import MedicalScriber from "@components/MedicalScriber";
import MDChatbot from "@components/MDChatbot";
import ManagementDashboard from "@components/ManagementDashboard";
import ClinicKiosk from "@components/ClinicKiosk";
import VoiceIntakeDemo from "@components/VoiceIntakeDemo";
import ComprehensiveDataAnalysis from "@components/ComprehensiveDataAnalysis";
import ROIShowcase from "@components/ROIShowcase";
import TrustSection from "@components/TrustSection";
import AIConsulting from "@components/AIConsulting";
import VirtualFrontDesk from "@components/VirtualFrontDesk";
import LanguageBanner from "@components/LanguageBanner";
import LegalDisclaimer from "@components/LegalDisclaimer";

export default async function Home({ params }) {
  const { LANG } = await params;
  const dict = (await getDictionary(LANG)).HOME;

  return (
    <main className="relative">
      <LanguageBanner lang={LANG} />
      <HomePageHero lang={LANG} dict={dict} />

      {/* Target: Clinical Efficiency & Doctors */}
      <PremiumAIFeatures />
      <MedicalScriber />
      <MDChatbot />

      {/* Target: Office Managers & Growth */}
      <ManagementDashboard />
      <ClinicKiosk />
      <VoiceIntakeDemo />

      {/* Proof & Data */}
      <ComprehensiveDataAnalysis />
      <ROIShowcase />

      {/* AI Consulting for All Industries */}
      <AIConsulting lang={LANG} />

      {/* Virtual Front Desk Assistant */}
      <VirtualFrontDesk lang={LANG} />

      {/* Closing content before layout footer */}
      <TrustSection />

      {/* Legal Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <LegalDisclaimer lang={LANG} variant="full" />
      </section>
    </main>
  );
}
