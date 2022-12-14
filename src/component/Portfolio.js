import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import Crud from "../assets/portfolio/crud.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demo: "",
      code: "",
    },
    {
      id: 2,
      src: reactParallax,
      demo: "",
      code: "",
    },
    {
      id: 3,
      src: navbar,
      demo: "",
      code: "",
    },
    {
      id: 4,
      src: reactSmooth,
      demo: "",
      code: "",
    },
    {
      id: 5,
      src: installNode,
      demo: "",
      code: "",
    },
    {
      id: 6,
      src: reactWeather,
      demo: "",
      code: "",
    },
    {
      id: 7,
      src: Crud,
      demo: "https://github.com/Mominkhan11/react-crud ",
      code: "https://github.com/Mominkhan11/react-crud",
    },
  ];
  return (
    <div
      name="portfolio"
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-500 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-4">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8  ">
          {portfolios.map((portfolio) => {
            return (
              <div
                className="shadow-md shadow-gray-500 rounded-lg hover:scale-105 duration-200"
                key={portfolio.id}
              >
                <img
                  src={portfolio.src}
                  alt="post image"
                  className="rounded-lg "
                />
                <div className="flex justify-center">
                  <a className="w-1/2 px-6 py-3" href={portfolio.demo}>
                    Demo
                  </a>
                  <a className="w-1/2 px-6 py-3" href={portfolio.code}>
                    Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
