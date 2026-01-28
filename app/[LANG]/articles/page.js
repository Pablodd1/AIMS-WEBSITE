import { langFAQs } from "@dictionary/FAQS/main";
import BlogsList from "@components/BlogListing";
import FaqsClient from "@components/SupportFAQ";
import SearchClient from "@components/BlogSearch";
import PremiumButton from "@utils/PremiumButton";
import { Suspense } from "react";
import { langArticle } from "@dictionary/ARTICLE/main";
import { RiLoader2Line } from "react-icons/ri";

// 👇 This runs on the server side
async function getBlogs(lang = "es") {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/server-API/blogs?lang=${lang}&keys=title,_id,icon`,
    {
      next: { revalidate: 60 }, // ISR cache for performance
    },
  );
  if (!res.ok) return [];
  return res.json();
}

export default async function CustomerCarePage({ params }) {
  const lang = (await params).LANG;
  const dict = await langArticle(lang);

  return (
    <main className="relative">
      <div className="bg-gradient-to-br from-[#0054b4] via-[#40e0d0] via-17% to-45% to-transparent min-h-screen w-full absolute left-0 -top-50 -z-10" />

      {/* Heading */}
      <article className="max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto my-18">
        <h1 className="my-5 w-full text-xl lg:text-3xl font-sans font-bold max-w-44 lg:max-w-65">
          <strong className="uppercase text-primary rounded-lg my-1 font-bold text-xs lg:text-sm tracking-wider">
            {dict.subtitle}
          </strong>
          <br />
          {dict.h1}
        </h1>

        {/* Search (CSR) */}
        <SearchClient />

        <PremiumButton
          label={dict.btn}
          href={`/${lang}/get-started`}
          className="my-5 w-fit"
        />
      </article>

      {/* Blogs (CSR for interactivity like filtering) */}
      <section className="max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto my-20">
        <Suspense
          fallback={
            <RiLoader2Line className="mx-auto my-animi  animate-spin" />
          }
        >
          <BlogsList
            dict={dict}
            titles={await getBlogs(lang)}
            limit={5}
            lang={lang}
          />
        </Suspense>
      </section>
    </main>
  );
}
