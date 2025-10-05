import AI_Icon from "@UTILS/AI_icon";
import PremiumButton from "@UTILS/premium_button";
import SecondaryButton from "@UTILS/secondary_button";
import Image from "next/image";

export default function Benefit_Home() {

    return (
        // <section className="relative h-fit " >
        //<div className="bg-gradient-to-tr from-[#22C55E] via-[#40e0d0] via-25% to-65% to-[#3B82F6] min-h-screen w-full absolute right-0 bottom-0 -z-10 " /> 
        <section className="relative flex flex-col-reverse max-w-7xl mx-auto lg:flex-row lg:h-screen items-center " >
            <article className="py-24 lg:py-32 lg:self-end px-5  h-fit lg:w-1/2  " >
                <AI_Icon className={" self-start mb-25 mt-auto mx-10 w-auto h-32 my-animi fill-primary/25 group-hover:fill-white "} />
                <h1 className=" text-3xl lg:text-5xl my-5 capitalize w-4/5 lg:w-full font-semibold  " >
                    Heading explaining the main benefit of your webapp
                </h1>
                <p className=" w-4/5 " >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, mollitia laboriosam. Cupiditate suscipit omnis mollitia expedita, dicta maiores eveniet molestias cum consectetur delectus ipsam explicabo vitae, beatae recusandae praesentium est.
                </p>
                <footer className="my-12 flex items-center justify-start gap-5 " >
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
            <figure className="w-full h-fit bg-gray-200 lg:w-1/2 relative">
                <Image
                    src={`/svg/image.svg`}
                    height={512}
                    width={512}
                    alt="AIMS benefit"
                    className=" mx-auto"
                />
            </figure>
        </section>
        // </section>
    )
}