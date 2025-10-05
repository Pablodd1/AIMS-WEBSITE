
import { AiOutlineAim, } from 'react-icons/ai'
import { LuTimerReset, } from 'react-icons/lu'
import { FaOpencart } from "react-icons/fa";
import { GiPadlock, GiThreeLeaves } from "react-icons/gi";
import { langHome } from '@LG_Bank/HOME/main';

const features = [
    {
        number: "≈ 95–98%",
        icon: <AiOutlineAim />,
        color: 'text-teal-500',
        shade: "bg-teal-100"
    },
    {
        number: "≈ 98%",
        icon: <LuTimerReset />,
        color: 'text-teal-500',
        shade: "bg-teal-100"
    },
    {
        number: "≈ 99.99%",
        icon: <GiPadlock />,
        color: 'text-teal-500',
        shade: "bg-teal-100"
    },
]

export default async function Features_Home({ lang }) {
    const dict = await langHome(lang, 'features')
    const data = features.map((x, i) => ({ ...x, label: dict[i].label, subtitle: dict[i].subtitle, description: dict[i].description }))

    return (
        <section className='bg-gray-900 text-bg min-h-[928px] py-24 md:py-44 flex items-center justify-center' >
            <ul className="w-5/6 mx-auto   max-w-md md:max-w-xl lg:max-w-7xl xl:max-w-5xl items-start  grid grid-flow-row grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-10  ">
                {data.map((x, i) => (
                    <li
                        className=" shadow-md shadow-black/85 bg-black rounded-md h-full flex  flex-col items-center justify-start sm:justify-center py-5 sm:py-10 sm:px-3 w-auto mx-0"
                        key={i}
                    >
                        <div className={`flex items-center justify-center text-5xl text-secondary px-2 py-1 `}>
                            {x.icon}
                        </div>
                        <p className="text-md sm:text-2xl text-secondary py-1">
                            {x.number}
                        </p>
                        <h3 className=" text-lg sm:text-xl font-semibold text-center my-5 text-white  ">
                            {x.label}
                        </h3>
                        {x.description.split('~n').map((x, i) =>
                            <p key={i} className=" text-xs sm:text-sm tracking-wide my-1 w-11/12 text-center text-bg/75 ">
                                {x}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    )
}