import { getDictionary } from "@dictionary/getDictionary";
import VirtualFrontDesk from "@components/VirtualFrontDesk";

export async function generateMetadata({ params }) {
  const lang = (await params).LANG || "en";
  const titles = {
    en: "AIMS AI Virtual Front Desk Assistant — 24/7 Voice & Chat Receptionist",
    es: "Asistente de Recepcion Virtual IA de AIMS — Recepcionista de Voz y Chat 24/7"
  };
  const descriptions = {
    en: "AI-powered virtual receptionist handling phone calls, chat messages, appointment scheduling, and customer inquiries 24/7. Natural voice AI with human-like conversations for healthcare, retail, legal, real estate, and all industries.",
    es: "Recepcionista virtual con IA que maneja llamadas, chats, programacion de citas y consultas de clientes 24/7. IA de voz natural con conversaciones humanas para salud, retail, legal, bienes raices y todas las industrias."
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

export default async function VirtualFrontDeskPage({ params }) {
  const { LANG } = await params;
  const dict = (await getDictionary(LANG)).HOME;

  return (
    <main className="relative pt-20">
      <VirtualFrontDesk lang={LANG} />
    </main>
  );
}
