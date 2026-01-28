import { langFAQs } from "@dictionary/FAQS/main";
import { langSupport } from "@dictionary/SUPPORT/main";
import FaqsClient from "@components/SupportFAQ";
import SupportForm from "@components/SupportForm";
import { Suspense } from "react";
import { RiLoader2Line } from "react-icons/ri";

export default async function CustomerCarePage({ params }) {
  const lang = (await params).LANG;
  const dict = await langSupport(lang);
  const { subtitle, head_faq, ...rest } = dict;

  return (
    <main className="relative">
      <div className="bg-gradient-to-br from-[#0054b4] via-[#40e0d0] via-17% to-45% to-transparent min-h-screen w-full absolute left-0 -top-50 -z-10" />
      <SupportForm dict={rest} />
      <section className="max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto my-20">
        <Suspense
          fallback={
            <RiLoader2Line className="mx-auto my-animi  animate-spin" />
          }
        >
          <FaqsClient
            title={head_faq}
            lang={lang}
            subtitle={subtitle}
            Faqs={await langFAQs(lang)}
          />
        </Suspense>
      </section>
    </main>
  );
}
