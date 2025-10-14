"use client"
import React, {  useRef, useState } from 'react';
import { contactIcons } from "./assets/data/resources";
import Link from 'next/link';

export default function FancyLinks({ dict, lang='en' }) {
    // Create a state to track hover state for each icon
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const positionRef = useRef({ x: 0, y: 0 });
    const popperRef = useRef(null);
    const areaRef = useRef(null);

    const handleBooking = (x) => {
        // dispatch({
        //     type: 'SET_BOOKING',
        //     payload: x,
        // });
    };

    const handleMouseMove = (event) => {
        positionRef.current = { x: event.clientX, y: event.clientY };
        if (popperRef.current != null) {
            popperRef.current.update();
        }
    };

    return (
        <nav className="fixed right-0 top-1/4 z-20 w-8 flex flex-col items-center justify-center">
            {contactIcons.map((x, i) => {
                // Check if the current element is hovered
                const isHovered = hoveredIndex === i;

                // Define the styles based on hover state
                const hoverStyle = isHovered
                    ? { color: x.fcolor, backgroundColor: 'white' }
                    : { color: 'white', backgroundColor: x.fcolor };

                return (
                    <div
                        key={i}
                        onMouseEnter={() => setHoveredIndex(i)} // Set hover for the specific element
                        onMouseLeave={() => setHoveredIndex(null)} // Reset hover when leaving
                        style={hoverStyle} // Apply hover styles only to the hovered element
                        className="group cursor-pointer transform w-full flex items-center justify-center skew-y-14 relative"
                    >
                        <div className="-skew-y-14 absolute bottom-1/2 translate-y-10/12 right-full px-2 py-0.5 transform -translate-x-2 hidden group-hover:block text-white text-sm rounded bg-black">
                            {x.title}
                        </div>
                        <Link target="_blank" rel="me" href={x.link}>
                            <button className="text-current py-3 transform -skew-y-14" aria-label={x.title}>
                                {x.icon}
                            </button>
                        </Link>
                    </div>
                );
            })}

            <Link
                href={`/${lang}/get-started`}
                aria-label={dict.bookNow}
                className="transform flex items-center justify-center skew-y-14 w-full h-32 bg-black text-white hover:bg-white hover:text-black cursor-pointer"
            >
                <p className="transform -skew-y-0 min-w-32 flex items-center justify-center min-h-10 rotate-90">
                    {dict.bookNow}
                </p>
            </Link>
        </nav>
    );
}
