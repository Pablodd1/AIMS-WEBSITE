"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import SecondaryButton from "@utils/SecondaryButton";
import { useSearchParams } from "next/navigation";

export default function BlogsList({ dict, lang = "en", limit, titles, empty }) {
  const query = useSearchParams().get("q") || ""; // Get search query from URL, default to an empty string
  const [currentLimit, setCurrentLimit] = useState(limit);

  // Filter titles based on the search query
  const filteredTitles = useMemo(() => {
    return titles.filter(
      (title) => title.title.toLowerCase().includes(query.toLowerCase()), // Match query with the title (case insensitive)
    );
  }, [query, titles]);

  const searchedCount = filteredTitles.length; // Count of the filtered results

  const handleLoadMore = (x, n) => {
    const newLoadedBlogs = currentLimit + n;
    setCurrentLimit(newLoadedBlogs);
    if (newLoadedBlogs >= x) {
      setCurrentLimit(x);
    }
  };

  return (
    <>
      <h2 className="w-full text-xl lg:text-3xl font-sans font-normal text-primary border-b-2 border-gray-300 py-2.5 mt-15 mb-2">
        <strong className="uppercase text-secondary bg-bg rounded-lg px-1.5 font-medium py-0.5 my-2.5 text-xs lg:text-sm tracking-wider">
          {dict.list_subtitle}
        </strong>
        <br />
        {dict.list_h}
      </h2>

      <span className="mb-15">
        {searchedCount > 0
          ? `${searchedCount} result${searchedCount > 1 ? "s" : ""} found.`
          : query
            ? "No results found for your search."
            : "Showing all results."}
      </span>

      <ul className="max-w-sm md:max-w-2xl lg:max-w-3xl md:min-w-full my-12 px-2 w-fit mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {searchedCount > 0
          ? filteredTitles.slice(0, currentLimit).map((x, i) => (
              <li className="rounded-xl overflow-hidden relative" key={i}>
                <Link
                  href={`/${lang}/articles/${x._id?.$oid || x._id}`}
                  rel="follow index"
                >
                  <Image
                    src={`/images/blogs/thumbnails/${encodeURI(x.icon)}.avif`}
                    className="self-center h-auto w-full flex-grow saturate-200"
                    height={328}
                    width={512}
                    alt={x.title}
                  />
                  <p className="lg:font-semibold bg-gradient-to-t from-black to-transparent text-white flex items-end absolute bottom-0 h-full px-2 py-4 text-md bg-opacity-25 w-full">
                    {x.title.length > 70
                      ? `${x.title.slice(0, 70)}...`
                      : x.title}
                  </p>
                </Link>
              </li>
            ))
          : empty
            ? "No Result Found"
            : Array(5)
                .fill(" ")
                .map((_, index) => (
                  <div key={index}>
                    {/* Skeleton loading effect (assuming you're using MUI) */}
                    <div
                      className="skeleton"
                      style={{
                        width: "100%",
                        height: "40px",
                        margin: "16px 0",
                      }}
                    ></div>
                    <div
                      className="skeleton"
                      style={{ width: "60%", height: "24px", margin: "8px 0" }}
                    ></div>
                  </div>
                ))}
      </ul>

      {currentLimit < filteredTitles.length && (
        <SecondaryButton
          label={lang == "en" ? "Load More" : "Cargar Más"}
          onClick={() => handleLoadMore(filteredTitles.length, 3)}
          withArrow
          className="col-span-full font-semibold text-sm"
        />
      )}
    </>
  );
}
