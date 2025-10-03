import { langFAQs } from "@LG_Bank/FAQS/main";
import BlogsList from "@UI/blog_listing";
import FaqsClient from "@UI/support_faq";
import SearchClient from "@UI/blog_search";
import PremiumButton from "@UTILS/premium_button";

// 👇 This runs on the server side
async function getBlogs(lang = "es") {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/server-API/blogs?lang=${lang}&keys=title,_id,icon`, {
        next: { revalidate: 60 }, // ISR cache for performance
    });
    if (!res.ok) return [];
    return res.json();
}

export default async function CustomerCarePage({ params }) {
    const faqs = await langFAQs((await params).LANG)
    const blogs = await getBlogs((await params).LANG);

    return (
        <main className="relative">
            <div className="bg-gradient-to-br from-[#0054b4] via-[#40e0d0] via-17% to-45% to-transparent min-h-screen w-full absolute left-0 -top-50 -z-10" />

            {/* Heading */}
            <article className="max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto my-18">
                <h1 className="my-5 w-full text-xl lg:text-3xl font-sans font-bold max-w-44 lg:max-w-65">
                    <strong className="uppercase text-primary rounded-lg my-1 font-bold text-xs lg:text-sm tracking-wider">
                        NEED HELP?
                    </strong>
                    <br />
                    Find Articles
                </h1>

                {/* Search (CSR) */}
                <SearchClient />

                <PremiumButton
                    label="Try AI — Automate Medical Notes"
                    href="#"
                    className="my-5 w-fit"
                />
            </article>

            {/* Blogs (CSR for interactivity like filtering) */}
            <section className="max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto my-20">
                <BlogsList titles={blogs} limit={5} />
            </section>
        </main>
    );
}
