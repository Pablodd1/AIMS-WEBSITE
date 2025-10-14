import { langHome } from "@LG_Bank/HOME/main";
import PremiumButton from "@UTILS/premium_button";
import SecondaryButton from "@UTILS/secondary_button";

const UseCase_Home = async ({ lang }) => {
    const dict = await langHome(lang, 'ms')

    return (
        <section className="font-sans bg-gradient-to-bl from-[#000080] to-[#00bfff]  text-white max-w-screen-full overflow-hidden pt-20 pb-20" >
            <article
                className="max-w-6xl px-6 mt-8 mb-6 sm:mt-14 sm:mb-14 w-full md:w-4/5 mx-auto"
            >
                <h2
                    className="mb-4 w-full text-3xl lg:text-4xl xl:text-5xl font-sans font-bold max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-5xl">
                    <strong className="uppercase text-secondary bg-black rounded-lg px-2.5 py-0.5 my-1 font-bold text-xs lg:text-sm tracking-wider">
                        {dict.subtitle}
                    </strong>
                    <br />
                    {dict.label}
                </h2>
                {dict.p.split('~n').map((x, i) =>
                    <p key={i} className="my-2 w-11/12 text-bg/85 leading-tight ">
                        {x}
                    </p>
                )}
                <SecondaryButton
                    label={dict.btn2}
                    href={`/${lang}/technology`}
                    withArrow
                    className="border-none font-semibold text-sm "
                />
                <section className="my-12 " >
                    <video
                        className={' rounded-lg'}
                        controls={false}
                        controlsList="nodownload notimeline play volume fullscreen"
                        autoPlay playsInline muted loop preload="auto"
                        style={{ height: 'auto', width: "100%" }}
                        disablePictureInPicture
                    >
                        <source src={`/video/Empowering.mp4`} type={"video/mp4"} />
                    </video>
                </section>
                <PremiumButton
                    label={dict.btn1}
                    href={`/${lang}/get-started`}
                    className="w-fit"
                />
                <p
                    // transition={{ duration: 1, delay: 0.6 }}
                    className="mb-8 w-full border-t-4 border-text my-10 py-2 pr-10 text-sm text-gray-900">
                    {dict.footerNote}
                </p>

            </article>
        </section>

    );
};

export default UseCase_Home;
