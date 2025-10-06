"use client";
import { useState } from "react";
import testimonialsData from "./assets/data/testimonials";
import SecondaryButton from "@UTILS/secondary_button";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Slice 3 testimonials at a time (looping)
    const visibleTestimonials = testimonialsData
        .slice(currentIndex, currentIndex + 3)
        .concat(
            currentIndex + 3 > testimonialsData.length
                ? testimonialsData.slice(0, (currentIndex + 3) % testimonialsData.length)
                : []
        );

    return (
        <section className=" py-24 md:py-44 lg:py-65 bg-gray-50 overflow-hidden">
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
            <h2 className="text-3xl font-bold text-center text-gray-900">
                Testimonials
            </h2>

            {/* Slider wrapper */}
            <div className="relative my-16 flex items-center justify-center gap-6 h-[328px] ">
                {visibleTestimonials.map((testimonial, index) => {
                    const isCenter = index === 1;
                    return (
                        <div
                            key={index + currentIndex}
                            className={`text-center  px-4 py-10 rounded shadow-md min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] 
                                ${isCenter ? "scale-115 z-10 font-bold my-animi max-w-lg shadow-primary/50 bg-gray-100 " : "scale-75 max-w-sm opacity-90 shadow-gray-700 "}
                                `}
                        >
                            <p className={`text-lg my-animi italic py-5 ${isCenter ? ' text-primary' : 'text-gray-700'}`}>
                                "{testimonial.quote}"
                            </p>
                            <p className="mt-4 text-gray-700 text-xs">{testimonial.name}</p>
                            <p className="text-gray-600 text-xs">{testimonial.position}</p>
                        </div>
                    );
                })}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-6 gap-4">
                <SecondaryButton
                    label="Prev"
                    onClick={() =>
                        setCurrentIndex((prev) =>
                            prev === 0 ? testimonialsData.length - 1 : prev - 1
                        )
                    }
                    withArrow
                    reverse
                    className="border-none font-semibold text-sm flex-row-reverse"
                />
                <SecondaryButton
                    label="Next"
                    onClick={() =>
                        setCurrentIndex((prev) =>
                            prev + 1 >= testimonialsData.length ? 0 : prev + 1
                        )
                    }
                    withArrow
                    className="border-none font-semibold text-sm"
                />
            </div>
            {/* </div> */}
        </section>
    );
};

export default Testimonials;
