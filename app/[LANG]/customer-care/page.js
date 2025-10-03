import { langFAQs } from "@LG_Bank/FAQS/main";
import FaqsClient from "@UI/support_faq";
import SupportForm from "@UI/support_form";


export default async function CustomerCarePage({ params }) {
    const faqs = await langFAQs((await params).LANG)

    return (
        <main className="relative">
            <div className="bg-gradient-to-br from-[#0054b4] via-[#40e0d0] via-17% to-45% to-transparent min-h-screen w-full absolute left-0 -top-50 -z-10" />
            <SupportForm />
            <section className="max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto my-20">
                <FaqsClient Faqs={faqs} />
            </section>
        </main>
    );
}
