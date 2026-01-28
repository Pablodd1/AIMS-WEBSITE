import SecondaryButton from "@utils/SecondaryButton";
import { links, linksLegal } from "./assets/data/resources";
import { langNav } from "@dictionary/NAV/main";
import Switch_Lang from "@utils/SwitchLang";
import Image from "next/image";
import Link from "next/link";

export default async function Footer({ lang }) {
  const dict = await langNav(lang);

  return (
    <section className="pt-14 pb-5 h-[326px] bg-black text-bg flex flex-col">
      <nav className="flex items-center flex-wrap max-w-2/3 mx-auto justify-center gap-y-3 ">
        {links.map((x) => (
          <SecondaryButton
            label={`${dict[x.label]}`}
            href={`/${lang}${x.href}`}
            key={x.label}
            className=" border-r-2 last:border-0 border-current/45 px-3 h-5 tracking-wide "
          />
        ))}
      </nav>
      <footer className="mt-auto  mb-5 justify-self-end py-5 ">
        <p className=" text-sm text-center py-3.5">
          © 2025 Aimedical Scriber. All rights reserved.
        </p>
        <nav className="flex items-center justify-center ">
          {linksLegal.map((x) => (
            <SecondaryButton
              label={x.label}
              href={x.href}
              key={x.label}
              className=" text-white/50 h-2 tracking-wide text-sm "
            />
          ))}
        </nav>
      </footer>
      <div className="flex flex-col-reverse md:flex-row justify-center md:items-center md:justify-between">
        <Sign />
        <Switch_Lang lang={lang} />
      </div>
    </section>
  );
}

function Sign() {
  return (
    <aside className=" px-2 py-1 mt-2 lg:my-1 self-center lg:self-start text-white flex items-center w-fit md:w-max lg:w-max font-sans text-xs sm:text-sm ">
      {/* <Image src={'/svg/info.svg'} loading='lazy' width={16} height={20} alt='icon MyAbabeel info about this website developer and designer' className='  mr-1 inline-flex' /> */}
      <Image
        src={"https://www.myababeel.com/logo.svg"}
        loading="lazy"
        width={37}
        height={20}
        alt="logo MyAbabeel | React.js Next.js express.js js Developer  | designer | on-page SEO consultant company"
        className=" inline-flex"
      />
      Designed & Developed By
      <Link
        className="mx-1 font-sans tracking-wide uppercase"
        href={"https://www.myababeel.com"}
      >
        My<strong className=" text-myababeel">Ababeel</strong>
      </Link>
    </aside>
  );
}
