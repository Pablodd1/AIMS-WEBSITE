import { langFAQs } from "@LG_Bank/FAQS/main";
import { langSupport } from "@LG_Bank/SUPPORT/main";
import FaqsClient from "@UI/support_faq";
import SupportForm from "@UI/support_form";
import { Suspense } from "react";


export default async function CustomerCarePage({ params }) {
    const lang = (await params).LANG;
    const dict = await langSupport(lang);
    const { subtitle, head_faq, ...rest } = dict;

    return (
        <main className="relative">
            <div className="bg-gradient-to-br from-[#0054b4] via-[#40e0d0] via-17% to-45% to-transparent min-h-screen w-full absolute left-0 -top-50 -z-10" />
            <SupportForm dict={rest} />
            <section className="max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto my-20">
                <Suspense >
                    <FaqsClient title={head_faq} subtitle={subtitle} Faqs={await langFAQs(lang)} />
                </Suspense>
            </section>
        </main>
    );
}
