import React from "react";

const BlogLayout = ({ data }) => {
  if (data != undefined)
    return Object.entries(data).map(([key, value]) => {
      switch (true) {
        case key.startsWith("para"):
          return (
            <p
              className="mb-4 text-md lg:text-lg text-justify text-gray-600"
              key={key}
            >
              {value}
            </p>
          );
        case key.startsWith("ul"):
          return (
            <ul className="mx-4 my-4 max-w-2xl " key={key}>
              {value.map((x, i) => (
                <li className=" text-justify" key={i}>
                  {x}
                </li>
              ))}
            </ul>
          );
        case key.startsWith("head"):
          const H = `h${key.slice(-1)}`;
          const classes = [
            "text-xl uppercase mt-8 underline",
            "text-lg mt-2 ",
            "text-lg",
          ];
          return (
            <H
              key={key}
              className={`font-semibold ${classes[key.slice(-1) - 2]}`}
            >
              {value}
            </H>
          );
        default:
          return <h2>Incomplete Data Found.</h2>;
      }
    });
};

export default BlogLayout;
