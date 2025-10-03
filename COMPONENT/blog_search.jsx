"use client";
import { useState, useRef } from "react";
import { ImSearch, ImCancelCircle } from "react-icons/im";
import { usePathname, useRouter } from "next/navigation"; // Correct import

export default function SearchClient() {
    const [query, setQuery] = useState("");
    const inputRef = useRef(null);
    const router = useRouter();
    const pathname = usePathname()

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query) {
            // Create a URLSearchParams object to handle the query string
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set('q', query);  // Update the 'q' parameter

            // Push the updated URL with query parameter
            router.push(`${pathname}?${searchParams.toString()}`);
        }
    };

    // Function to clear the search input
    const handleClear = () => {
        setQuery("");
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.delete('q');  // Remove the 'q' parameter

        router.push(`${pathname}?${searchParams.toString()}`);
    };

    return (
        <form className="relative max-w-md" onSubmit={handleSubmit}>
            <input
                id="searchArticle"
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border-b-4 border-black focus:outline-none focus:border-blue-500"
                value={query}
                ref={inputRef}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                    // If Enter key is pressed, submit the form
                    if (e.key === "Enter") {
                        handleSubmit(e);
                    }
                }}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <ImSearch className="text-primary" />
                {query && (
                    <button
                        type="button"
                        className="ml-2 text-pink-500 focus:outline-none"
                        onClick={handleClear}
                    >
                        <ImCancelCircle />
                    </button>
                )}
            </div>
        </form>
    );
}
