import React from "react";
import moneyGuy from "../../assets/images/money.png";
import money from "../../assets/images/money1.png";
import { ICONS } from "../../static/icons";

const VhjobsCTA = () => {
  return (
    <React.Fragment>
      <div className="md:w-[80%] w-[98%] mx-auto md:mt-[80px] mt-[30px] px-3 rounded-[32px] overflow-hidden">
        {/* --- Mobile View --- */}
        <div
          className="relative h-[45vh] bg-[#1C71B7] xl:hidden rounded-[32px] text-white bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${money})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0  bg-[#0000001d]  bg-opacity-50 rounded-[32px]" />

          {/* Content */}
          <div className="absolute bottom-10 left-4 right-4 z-10">
            <h2 className="text-3xl font-bold leading-tight">
              Make money with <span className="text-white">vhjobs</span>
            </h2>
            <p className="mt-3 text-base">
              Join other 5,000 people that are selling their skill and earn
              handsomely
            </p>

            <div className="mt-6">
              <button className="bg-white text-[#1C71B7] font-semibold px-6 py-3 rounded-full text-sm flex items-center gap-2 hover:bg-gray-100 transition">
                Sign up to earn{" "}
                <ICONS.arrow size={20} className="mt-1" color="#1C71B7" />
              </button>
            </div>
          </div>
        </div>

        {/* --- Desktop View --- */}
        <div className="hidden xl:flex justify-between items-center bg-[#1C71B7] rounded-[32px]">
          <div className="p-6 md:w-[35%] w-full md:ml-[5%] text-white">
            <h2 className="text-5xl font-bold leading-tight">
              Make money with vhjobs
            </h2>
            <p className="mt-4 text-lg">
              Join other 5,000 people that are selling their skill and earn
              handsomely
            </p>

            <div className="mt-16 flex flex-row gap-4">
              <button className="bg-white text-[#1C71B7] font-semibold px-6 py-3 rounded-full text-base flex items-center gap-2 hover:bg-gray-100 transition">
                Sign up to earn{" "}
                <ICONS.arrow size={20} className="mt-1" color="#1C71B7" />
              </button>
              <button className="border border-white text-white font-semibold px-6 py-3 rounded-full text-base hover:bg-white hover:text-[#1C71B7] transition">
                Learn more
              </button>
            </div>
          </div>
          <div className="w-[65%]">
            <img
              src={moneyGuy}
              alt="Money Guy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VhjobsCTA;
