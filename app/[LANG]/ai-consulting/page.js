import { getDictionary } from "@dictionary/getDictionary";
import AIConsulting from "@components/AIConsulting";

export async function generateMetadata({ params }) {
  const lang = (await params).LANG || "en";
  const titles = {
    en: "AIMS AI Consulting for All Industries — Strategy, Implementation & Optimization",
    es: "Consultoria IA de AIMS para Todas las Industrias — Estrategia, Implementacion y Optimizacion"
  };
  const descriptions = {
    en: "End-to-end AI consulting services for healthcare, finance, retail, manufacturing, legal, real estate, and more. 5-phase proven process from discovery to scaling. Measurable ROI in 90 days.",
    es: "Servicios de consultoria IA de principio a fin para salud, finanzas, retail, manufactura, legal, bienes raices y mas. Proceso comprobado de 5 fases desde descubrimiento hasta escalamiento. ROI medible en 90 dias."
  };
  return {
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
    openGraph: {
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
    }
  };
}

export default async function AIConsultingPage({ params }) {
  const { LANG } = await params;
  const dict = (await getDictionary(LANG)).HOME;

  return (
    <main className="relative pt-20">
      <AIConsulting lang={LANG} />
    </main>
  );
}
