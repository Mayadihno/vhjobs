import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/logo.png";
import { ICONS } from "../../static/icons";
import { treanding } from "../../static/data";
import playStore from "../../assets/images/google.png";

const Menu = ({ setmenuOpen }) => {
  return (
    <React.Fragment>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1400"
        className="fixed w-full h-screen top-0 left-0 bg-white z-50 overflow-x-scroll"
      >
        <div className="w-[90%] md:w-[45%] py-6 px-2 mx-auto">
          <div className="flex justify-between items-center">
            <Link to={"/"}>
              <div className="w-[100px] object-fit-contain">
                <img src={image} alt="logo image" className="w-full h-full" />
              </div>
            </Link>

            <ICONS.time
              size={30}
              color="#1C71B7"
              onClick={() => setmenuOpen(false)}
              className="cursor-pointer"
            />
          </div>
          <div className="flex justify-between w-full md:w-1/2 md:mx-auto items-center space-x-5 my-10">
            <div className="w-1/2">
              <button className="bg-[#1C71B7] text-white py-2 px-10 rounded-full">
                Sign up
              </button>
            </div>
            <div className="w-1/2">
              <button className="border border-[#061726] text-[#061726] py-2 px-4 rounded-full">
                Explore Needs
              </button>
            </div>
          </div>
          <div className="flex justify-between gap-4 mb-8">
            <div className="">
              <h2 className="text-xl text-[#1C71B7] font-bold">
                Treanding needs
              </h2>
              <div className="flex flex-col space-y-4 py-4">
                {treanding.map((item, index) => {
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        className="w-12 h-12 object-contain"
                        alt=""
                      />
                      <h4 className="text-lg">{item.name}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="">
              <h2 className="text-xl text-[#1C71B7] font-bold">Company</h2>
              <ul className="space-y-4 py-4 text-lg">
                <li>About Us</li>
                <li>Trust & Safety</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Pricing</li>
                <li>Payment Protection</li>
              </ul>
              <div className="pt-3">
                <h2 className="text-xl text-[#1C71B7] font-bold">Contact us</h2>
                <div className="flex items-center md:space-x-3.5 space-x-2 pl-2 pt-3">
                  <div className="border border-[#061726] p-2 rounded-full flex justify-center items-center">
                    <ICONS.phone size={20} color="#061726" />
                  </div>
                  <div className="border border-[#061726] p-2 rounded-full flex justify-center items-center">
                    <ICONS.whatsapp size={20} color="green" />
                  </div>
                  <div className="border border-[#061726] p-2 rounded-full flex justify-center items-center">
                    <ICONS.email size={20} color="#061726" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:mx-auto flex justify-center">
            <button className="border border-[#1c71b7] font-bold w-full text-[#1c71b7] py-4 px-12 rounded-full">
              Become a service provider
            </button>
          </div>
          <div className="flex justify-center space-x-6 pt-8">
            <div className="border w-1/2 md:w-fit border-[#061726] flex items-center p-2 rounded">
              <img
                src={playStore}
                alt="PlayStore"
                className=" w-8 object-contain"
              />
              <div className="flex flex-col text-xs pl-3">
                <h5>Download from</h5>
                <h5>PlayStore</h5>
              </div>
            </div>

            <div className="border w-1/2 md:w-fit border-[#061726] flex items-center p-2 rounded">
              <ICONS.apple size={32} color="#061726" />
              <div className="flex flex-col text-xs pl-3">
                <h5>Download from</h5>
                <h5>AppleStore</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
