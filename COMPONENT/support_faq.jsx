"use client";
import { useState } from "react";
import SecondaryButton from "@UTILS/secondary_button";
import { FcExpand } from 'react-icons/fc';
const faqs = 30;

export default function FaqsClient({ Faqs }) {
    // const [FAQs, setFAQs] = useState([FAQs]);
    const [expanded, setExpanded] = useState(null);
    const [loadedQuestions, setLoadedQuestions] = useState(7);

    return (
        <section className="my-12 px-2 ">
            <h2 className="w-full text-xl lg:text-3xl font-sans font-normal text-primary border-b-2 border-gray-300 py-2.5 mt-15 mb-2">
                <strong className="uppercase text-secondary bg-bg rounded-lg px-1.5 font-medium py-0.5 my-2.5 text-xs lg:text-sm tracking-wider">
                    QUICK ANSWERS
                </strong>
                <br />
                Get Help with AI Medical Notes
            </h2>

            <ul className="w-full  flex flex-col">
                {Array.from({ length: loadedQuestions }).map((_, index) => (
                    <li key={index} className="flex w-full">
                        <div className="h-fit my-2">
                            <button
                                className={`flex items-center justify-between w-full px-4 py-3.5 border-b border-secondary focus:outline-none ${expanded === index ? "" : ""
                                    }`}
                                onClick={() => setExpanded(expanded === index ? null : index)}
                            >
                                <h3 className="text-md md:text-lg font-medium text-left">
                                    {Faqs[`question${index + 1}`]}
                                </h3>
                                <span className={`ml-2 my-animi ${expanded === index ? "-rotate-180" : ""}`}>
                                    <FcExpand />
                                </span>
                            </button>
                            <div
                                className={`bg-gray-300 overflow-hidden text-gray-700 text-sm md:text-md transition-all duration-700 rounded-xl ${expanded === index ? "h-42 py-10 px-5 mx-2 my-5" : "h-0"
                                    }`}
                            >
                                <span className="font-semibold uppercase tracking-wide  underline" >Answer:</span>
                                <p> {Faqs[`answer${index + 1}`]}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {loadedQuestions < faqs && (
                <SecondaryButton
                    label="Load More"
                    onClick={() =>
                        setLoadedQuestions((prev) =>
                            prev + 3 >= faqs ? faqs : prev + 3
                        )
                    }
                    withArrow
                    className="font-semibold text-sm my-7"
                />
            )}
        </section>
    );
}
