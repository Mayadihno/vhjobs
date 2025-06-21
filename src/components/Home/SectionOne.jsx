import React from "react";
import { ICONS } from "../../static/icons";
import image from "../../assets/images/section1.png";
const SectionOne = () => {
  return (
    <React.Fragment>
      <div className="md:w-[92%] w-[98%] mx-auto md:mt-[50px] mt-[30px] px-3">
        <div className="w-full md:rounded-[30px] rounded-[10px] shadow-lg">
          <div className="flex md:flex-row flex-col justify-content-between md:w-[95%] w-full mx-auto p-5 md:p-12">
            <div className="">
              <h3 className="md:w-[60%] w-full text-5xl font-bold">
                Have a need to get <span className="text-[#1C71B7]">done</span>?
              </h3>
              <p className="text-lg leading-10 md:w-[60%] w-full py-3">
                Vhjobs is a platform created for individuals and businesses
                looking for people to help them handle their tasks. Vhjobs
                connects these individuals/businesses with skilled professionals
                that are closest to them.
              </p>
              <button className="px-8 py-3 flex items-center cursor-pointer bg-[#1C71B7] text-white rounded-[20px]">
                Tell us what you need to get done{" "}
                <ICONS.arrow size={20} className="ml-2 mt-1" />
              </button>
            </div>
            <div className=" md:w-[1000px] w-[300px] h-fit md:py-0 py-5">
              <img
                src={image}
                alt=""
                className="w-full h-full object-fit-contain"
              />
            </div>
          </div>
          <div className="w-full md:rounded-bl-[30px] rounded-bl-[10px] rounded-br-[10px] md:rounded-br-[30px] text-white bg-gradient-to-l from-[#09263D] to-[#1C71B7]">
            <div className="grid grid-cols-3 p-2 md:p-8">
              <div className="text-center p-3 md:py-5 py-2 border-r-3 border-white">
                <h2 className="md:text-5xl text-2xl font-bold pb-2">5k+</h2>
                <p className="md:text-xl text-sm font-medium md:pt-3 tracking-wider">
                  Packages sold
                </p>
              </div>
              <div className=" text-center md:py-5 py-2 border-r-3 border-white">
                <h2 className="md:text-5xl text-2xl font-bold pb-2">1k+</h2>
                <p className="md:text-xl text-sm font-medium md:pt-3 tracking-wider">
                  Customers
                </p>
              </div>
              <div className=" text-center md:py-5 py-2">
                <h2 className="md:text-5xl text-2xl font-bold pb-2">200+</h2>
                <p className="md:text-xl text-sm font-medium md:pt-3 tracking-wider">
                  Handled
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SectionOne;
