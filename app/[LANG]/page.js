
import { langHome } from "@LG_Bank/HOME/main";
import { langSideBar } from "@LG_Bank/SIDEBAR/main";
import FancyLinks from "@UI/fancy_sidebar";
import Hero_Home from "@UI/home_page_hero";
import Image from "next/image";

export default async function Home({ params }) {
  const dict = await langHome((await params).LANG)
  const dict2 = await langSideBar((await params).LANG)

  return (
    <main>
      <FancyLinks dict={dict2} />
      <Hero_Home />
    </main>
  );
}
