
import { langHome } from "@LG_Bank/HOME/main";
import { langSideBar } from "@LG_Bank/SIDEBAR/main";
import FancyLinks from "@UI/fancy_sidebar";
import Hero_Home from "@UI/home_page_hero";
import Image from "next/image";

export default async function Home({ params }) {
  const dict = await langHome((await params).LANG)
  const dict2 = await langSideBar((await params).LANG)

  return (
    <main  className="relative" >
      <div className="bg-gradient-to-br from-[#0054b4] via-[#40e0d0] via-15% to-45% to-transparent min-h-screen w-full absolute left-0 -top-20 -z-10 "  />
      <FancyLinks dict={dict2} />
      <Hero_Home />
    </main>
  );
}
