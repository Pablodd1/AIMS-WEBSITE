
import { AiOutlineAim, } from 'react-icons/ai'
import { LuTimerReset, } from 'react-icons/lu'
import { FaOpencart } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";

const features = [
    {
        label: 'Accurate Notes',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, mollitia laboriosam. Cupiditate suscipit omnis mollitia expedita, dicta maiores eveniet molestias cum consectetur delectus ipsam explicabo vitae, beatae recusandae praesentium est.',
        number: "95-98%",
        icon: <AiOutlineAim />,
        color: 'text-teal-500',
        shade: "bg-teal-100"
    },
    {
        label: 'Times Faster',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, mollitia laboriosam. Cupiditate suscipit omnis mollitia expedita, dicta maiores eveniet molestias cum consectetur delectus ipsam explicabo vitae, beatae recusandae praesentium est.',
        number: "98%",
        icon: <LuTimerReset />,
        color: 'text-teal-500',
        shade: "bg-teal-100"
    },
    {
        label: 'Paper Work',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, mollitia laboriosam. Cupiditate suscipit omnis mollitia expedita, dicta maiores eveniet molestias cum consectetur delectus ipsam explicabo vitae, beatae recusandae praesentium est.',
        number: <span>&#8776;0</span>,
        icon: <GiThreeLeaves />,
        color: 'text-teal-500',
        shade: "bg-teal-100"
    },
]

export default function Features_Home() {
    return (
        <section className='bg-gray-900 text-bg h-[928px] py-44 flex items-center justify-center' >
            <ul className="w-full  lg:w-5/6 mx-auto   max-w-md md:max-w-xl lg:max-w-7xl xl:max-w-5xl grid grid-flow-row grid-cols-3 gap-10  ">
                {features.map((x, i) => (
                    <li
                        className=" shadow-md shadow-black/85 bg-black rounded-md  flex  flex-col items-center justify-start sm:justify-center py-5 sm:py-10 sm:px-3 w-auto mx-0"
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
                        <p className=" text-sm sm:text-md w-11/12 text-center text-bg/65 ">
                            {x.description}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}