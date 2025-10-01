import PremiumButton from "@UTILS/premium_button";
import SecondaryButton from "@UTILS/secondary_button";

export default function Hero_Home() {

    return (
        <section className="flex flex-col-reverse lg:flex-row lg:h-screen items-center " >
            <article className="py-24 lg:self-end px-5 lg:px-20 h-fit lg:w-1/2  " >
                <h1 className=" text-3xl lg:text-5xl my-5 capitalize w-4/5 lg:w-full font-semibold  " >
                    Tagline with your unique selling proposition
                </h1>
                <p className=" w-4/5 " >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, mollitia laboriosam. Cupiditate suscipit omnis mollitia expedita, dicta maiores eveniet molestias cum consectetur delectus ipsam explicabo vitae, beatae recusandae praesentium est.
                </p>
                <footer className="my-12 flex items-center justify-start gap-5 " >
                    <PremiumButton
                        label="Try Now — It's Free"
                        href="#"
                    />
                    <SecondaryButton
                        label="Learn More"
                        href={''}
                    />
                </footer>
            </article>
            <figure className="w-full h-4/5 mt-auto mb-0 lg:w-1/2 relative">
                <video
                    className="w-full h-full object-contain object-bottom"  // Use object-cover for the video to fill the area
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