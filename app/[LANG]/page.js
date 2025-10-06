import { langHome } from "@LG_Bank/HOME/main";
import CEO_msg from "@UI/ceo_messag";
import Features_Home from "@UI/home_features";
import Benefit_Home from "@UI/home_main_Benefit";
import Hero_Home from "@UI/home_page_hero";
import UseCase_Home from "@UI/home_usecase_video";
import SubscribeForm from "@UI/subscribe_form";
import Testimonials from "@UI/testimonials";
import { Suspense } from "react";
import { RiLoader2Line } from "react-icons/ri";

export default async function Home({ params }) {
  const lang = (await params).LANG;

  return (
    <main className="relative" >
      <div className="bg-gradient-to-br from-[#0054b4] via-[#40e0d0] via-17% to-45% to-transparent min-h-screen w-full absolute left-0 -top-20 -z-10 " />
      <Hero_Home lang={lang} />
      <Features_Home lang={lang} />
      <Benefit_Home lang={lang} />
      <UseCase_Home lang={lang} />
      <Testimonials />
      <CEO_msg lang={lang} />
      <Suspense fallback={<RiLoader2Line className="mx-auto my-animi  animate-spin" />} >
        <SubscribeForm dict={await langHome(lang, 'newsletter')} lang={lang} />
      </Suspense>
    </main>
  );
}
