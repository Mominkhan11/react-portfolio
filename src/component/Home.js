import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/profile.jpeg";

const Home = () => {
  return (
    <>
      <div
        className="h-screen w-full bg-gradient-to-b from-black to-gray-500 pb-5 "
        id="home"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  text-white md:flex-row">
          <div className="flex flex-col  justify-center h-full mx-10  ">
            <h2 className="text-4xl font-bold sm:text-4xl">
              I'm a Frontend<br></br> Developer.
            </h2>
            <p className="py-4 text-gray-300">
              I have 3 years of experience building and desgining software.
              Currently, I love to work on web application using technologies
              like HTML, CSS, Bootstrap, Javascript, React, Tailwind and Node
              Js.
            </p>
            <div>
              <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                Portfolio{" "}
                <span>
                  <MdOutlineKeyboardArrowRight />
                </span>
              </button>
            </div>
          </div>

          <div>
            <img
              src={HeroImage}
              alt="profile Image"
              className="rounded-2xl mx-auto w-2/3 md:w-full "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
