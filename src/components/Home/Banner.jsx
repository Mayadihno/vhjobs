import React from "react";
import { ICONS } from "../../static/icons";
const Banner = () => {
  return (
    <React.Fragment>
      <div className="banner flex items-center justify-center pt-[150px]">
        <div
          className="absolute bottom-0 left-0 w-full h-full z-0"
          style={{
            background: `linear-gradient(to top, #061725 -15%, #06172500 100%)`,
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl">
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
      <div className="w-[80%] mx-auto -mt-[100px] relative z-20">
        <h2 className="text-4xl text-white font-bold text-center">
          Trusted By
        </h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[1, 2, 3].map((item, index) => (
            <div
              className="bg-white py-12 rounded-md shadow-sm"
              key={index}
            ></div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
