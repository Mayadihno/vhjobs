import React, { useState } from "react";
import { ICONS } from "../../static/icons";
import image from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Menu from "../Navbar/Menu";
const Banner = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <React.Fragment>
      <div className="banner 2xl:h-[100vh] lg:h-[80vh] md:h-[75vh] h-[50vh] md:flex md:items-center md:justify-center md:pt-[90px] 2xl:pt-[100px] lg:pt-[0px] pt-0">
        <div className="md:hidden block">
          <div className="md:w-[92%] w-[98%] mx-auto px-3 pt-6 flex justify-between items-center">
            <Link to={"/"}>
              <div className="w-[100px] object-fit-contain">
                <img src={image} alt="logo image" className="w-full h-full" />
              </div>
            </Link>
            <button
              onClick={() => setmenuOpen(!menuOpen)}
              className="focus:outline-none cursor-pointer text-xl text-[#061725]"
            >
              <ICONS.menu color="#1C71B7" size={30} fontWeight={"bold"} />
            </button>
          </div>
        </div>
        <div
          className="absolute md:block hidden bottom-0 left-0 w-full h-full z-0"
          style={{
            background: `linear-gradient(to top, #061725 -15%, #06172500 100%)`,
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl md:block hidden">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Hire The Right Professional For <br />
            Your <span className="text-[#1C71B7]">Business Needs</span>
          </h1>
          <p className="text-white mt-2 text-lg">
            Professional and affordable services at your fingertips
          </p>

          <div className="mt-6 flex items-center justify-center">
            <div className="bg-white px-2 py-1 rounded-md flex items-center w-full sm:w-[550px]">
              <span className="text-gray-500 mr-2 pl-3">
                <ICONS.search size={30} />
              </span>
              <input
                type="text"
                placeholder="What do you need to get done?"
                className="w-full outline-none bg-transparent text-sm"
              />
              <button className="bg-[#1C71B7] hover:bg-[#1C71B7]/90 cursor-pointer text-white font-medium px-10 py-2 rounded">
                Search
              </button>
            </div>
          </div>

          <div className="mt-6 text-white flex items-center justify-center">
            <p className="text-sm pr-2">
              <span className="font-semibold text-base">Popular needs:</span>
            </p>
            <div className="flex flex-wrap gap-2 items-center justify-center text-xs">
              {[
                "Cleaning",
                "Graphics design",
                "Make Up",
                "Web development",
                "Mobile driver",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-opacity-10 border cursor-pointer border-white border-opacity-25 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
              <span className="text-sm font-semibold text-blue-300 cursor-pointer">
                See more
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[#061726] md:hidden block text-white pb-28 py-16 mt-[-50px]"
        style={{
          clipPath: "polygon(0 35px, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <div className="w-[98%] mx-auto px-3">
          <h1 className="text-white text-4xl font-semibold leading-tight">
            <span className="block">Hire The Right </span>
            <span className="block">Professional For Your</span>
            <span className="text-[#1C71B7]">Business Needs</span>
          </h1>
          <p className="text-white mt-2 text-lg">
            Professional and affordable services at your fingertips
          </p>
          <div className="mt-6 flex items-center justify-center">
            <div className="bg-white px-2 py-3 rounded-md flex items-center w-full">
              <span className="text-gray-500 mr-2 pl-3">
                <ICONS.search size={30} />
              </span>
              <input
                type="text"
                placeholder="What do you need to get done?"
                className="w-full outline-none bg-transparent text-sm text-black"
              />
            </div>
          </div>
          <div className="mt-6 text-white space-y-2">
            <p className="text-sm pr-2">
              <span className="font-semibold text-base">Popular needs:</span>
            </p>
            <div className="flex flex-wrap gap-2 items-center text-xs">
              {[
                "Cleaning",
                "Graphics design",
                "Make Up",
                "Web development",
                "Mobile driver",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-opacity-10 border cursor-pointer border-white border-opacity-25 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
              <span className="text-sm font-semibold text-blue-300 cursor-pointer">
                See more
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[80%] w-[90%] mx-auto md:-mt-[100px] mt-[-80px] relative z-20">
        <h2 className="md:text-4xl text-2xl text-white font-bold md:text-center">
          Trusted By
        </h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[1, 2, 3].map((item, index) => (
            <div
              className="bg-white md:py-12 py-8 rounded-md shadow-sm"
              key={index}
            ></div>
          ))}
        </div>
      </div>
      {menuOpen && <Menu setmenuOpen={setmenuOpen} />}
    </React.Fragment>
  );
};

export default Banner;
