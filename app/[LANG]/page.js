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
import EHRCompatibility from "@components/EHRCompatibility";
import Footer from "@components/Footer";
import FrontDeskChatbot from "@components/FrontDeskChatbot";

export default async function Home({ params }) {
  const { LANG } = await params;
  const dict = (await getDictionary(LANG)).HOME;

  return (
    <main className="relative">
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

      {/* Footer Content */}
      <TrustSection />
      <EHRCompatibility />
      <Footer lang={LANG} />

      {/* Live Chat Widget - Real-time AI Front Desk */}
      <FrontDeskChatbot lang={LANG} />
    </main>
  );
}
