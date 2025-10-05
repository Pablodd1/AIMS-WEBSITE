import AI_Icon from "@UTILS/AI_icon";
import PremiumButton from "@UTILS/premium_button";
import SecondaryButton from "@UTILS/secondary_button";

export default function Hero_Home() {

    return (
        <section className="relative flex flex-col max-w-7xl mx-auto md:flex-row lg:h-screen items-center " >
            <article className="py-24 lg:py-32 md:self-end px-5  h-fit md:w-3/5 lg:w-1/2  " >
                <AI_Icon className={" self-start mb-12 md:mb-25 mt-auto mx-10 w-auto h-32 my-animi fill-primary/25 group-hover:fill-white "} />
                <h1 className=" text-3xl lg:text-5xl my-5 capitalize w-11/12 md:w-4/5 lg:w-full font-semibold  " >
                    Tagline with your unique selling proposition
                </h1>
                <p className=" w-11/12 md:w-4/5 " >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, mollitia laboriosam. Cupiditate suscipit omnis mollitia expedita, dicta maiores eveniet molestias cum consectetur delectus ipsam explicabo vitae, beatae recusandae praesentium est.
                </p>
                <footer className="my-12 flex flex-col lg:flex-row items-start lg:items-center justify-start gap-5 " >
                    <PremiumButton
                        label="Try Now — It's Free"
                        href="/get-started"
                    />
                    <SecondaryButton
                        label="Learn More"
                        href={''}
                        withArrow
                        className="border-none font-semibold text-sm "
                    />
                </footer>
            </article>
            <figure className="w-2/3 h-4/5 mt-auto mb-0 md:w-2/5 lg:w-1/2 relative">
                <video
                    className="w-full h-full z-0 object-contain object-bottom lg:object-bottom-right"  // Use object-cover for the video to fill the area
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={'/video/AIMS_Hero.mp4'} type="video/mp4" className="" />
                    Your browser does not support the video tag.
                </video>
            </figure>
        </section>
    )
}