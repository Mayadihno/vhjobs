import React, { useState } from "react";
import image from "../../assets/images/limited.png";
import playStore from "../../assets/images/google.png";
import appStore from "../../assets/images/apple.png";
import flag from "../../assets/images/flag.png";
import logo from "../../assets/images/logo1.png";
import { ICONS } from "../../static/icons";

const Footer = () => {
  const [showPopular, setShowPopular] = useState(false);
  const [showCompany, setShowCompany] = useState(true);
  const [showContact, setShowContact] = useState(false);

  return (
    <React.Fragment>
      {/* PROMO SECTION */}
      <div className="relative z-40">
        <div className="md:w-[80%] w-[88%] mx-auto rounded-[32px] md:mb-[-120px] mb-12 z-40 shadow-lg bg-[#1C71B7] mt-7 md:mt-10 p-6">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="md:w-1/2 w-full object-contain">
              <img src={image} alt="Promo" />
            </div>
            <div className="md:w-[40%] w-full flex md:text-left text-center flex-col md:items-start items-center">
              <h2 className="md:text-4xl text-3xl font-bold text-white">
                Get 10% discount on your first purchase
              </h2>
              <div className="flex items-center md:mt-10 mt-6 space-x-5 md:ml-2">
                <button className="bg-white text-black font-semibold px-6 py-3 rounded-full text-base flex items-center gap-2">
                  Sign up to claim
                </button>
                <button className="text-white">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#061725] text-white md:pt-46 pt-10">
        <div className="max-w-7xl mx-auto flex flex-col px-4 md:grid mdgrid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
          {/* Popular Needs */}
          <div>
            <div
              className="flex justify-between items-center md:cursor-default cursor-pointer"
              onClick={() => setShowPopular(!showPopular)}
            >
              <h4 className="font-bold text-lg mb-4">Popular Needs</h4>
              <span className="md:hidden">
                {showPopular ? (
                  <ICONS.down size={18} />
                ) : (
                  <ICONS.up size={18} />
                )}
              </span>
            </div>
            {(showPopular || window.innerWidth >= 768) && (
              <ul className="space-y-2 text-base">
                <li>Make up</li>
                <li>Cleaning</li>
                <li>Photoshoot</li>
                <li>Mobile chef</li>
                <li>Painter</li>
                <li>Web development</li>
                <li className="text-blue-400 cursor-pointer">See more</li>
              </ul>
            )}
          </div>

          {/* Company */}
          <div>
            <div
              className="flex justify-between items-center md:cursor-default cursor-pointer"
              onClick={() => setShowCompany(!showCompany)}
            >
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <span className="md:hidden">
                {showCompany ? (
                  <ICONS.down size={18} />
                ) : (
                  <ICONS.up size={18} />
                )}
              </span>
            </div>
            {(showCompany || window.innerWidth >= 768) && (
              <ul className="space-y-2 text-base">
                <li>About Us</li>
                <li>Trust & Safety</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Pricing</li>
                <li>Payment Protection</li>
              </ul>
            )}
          </div>

          {/* Contact */}
          <div>
            <div
              className="flex justify-between items-center md:cursor-default cursor-pointer"
              onClick={() => setShowContact(!showContact)}
            >
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <span className="md:hidden">
                {showContact ? (
                  <ICONS.down size={18} />
                ) : (
                  <ICONS.up size={18} />
                )}
              </span>
            </div>
            {(showContact || window.innerWidth >= 768) && (
              <ul className="space-y-2 text-base">
                <li>FAQ</li>
                <li>Customer Support</li>
                <li>Privacy Policy</li>
                <li>Payment Protection</li>
              </ul>
            )}
          </div>

          {/* App Download */}
          <div className="md:col-span-1 col-span-2">
            <h4 className="font-bold text-lg mb-4">Get our app</h4>
            <div className="flex md:flex-col md:pt-3 flex-row space-x-6 md:space-x-0 md:space-y-5">
              <div className="border w-fit border-white flex items-center md:p-2 p-6 rounded">
                <img
                  src={playStore}
                  alt="PlayStore"
                  className="md:w-4 md:h-4 w-8 h-8 object-contain"
                />
                <div className="flex flex-col text-xs pl-2">
                  <h5>Download from</h5>
                  <h5>PlayStore</h5>
                </div>
              </div>

              <div className="border w-fit border-white flex items-center md:p-2 p-6 rounded">
                <img
                  src={appStore}
                  alt="AppStore"
                  className="md:w-4 md:h-4 w-8 h-8 object-contain"
                />
                <div className="flex flex-col text-xs pl-2">
                  <h5>Download from</h5>
                  <h5>AppleStore</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1 col-span-2">
            <h4 className="font-bold text-lg mb-4">Follow us</h4>
            <div className="w-26 mb-8 md:block hidden">
              <img
                src={logo}
                className="w-full h-full object-contain"
                alt="logo"
              />
            </div>
            <div className="flex space-x-4 text-xl text-white">
              <div className="border border-white p-2 rounded-full flex justify-center items-center">
                <ICONS.facebook size={20} color="#1c71b7" />
              </div>
              <div className="border border-white p-2 rounded-full flex justify-center items-center">
                <ICONS.x size={20} color="white" />
              </div>
              <div className="border border-white p-2 rounded-full flex justify-center items-center">
                <ICONS.linkedin size={20} color="#1c71b7" />
              </div>
              <div className="border border-white p-2 rounded-full flex justify-center items-center">
                <ICONS.youtube size={20} color="red" />
              </div>
              <div className="border border-white p-2 rounded-full flex justify-center items-center">
                <ICONS.instagram size={20} color="yellow" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 text-sm">
          <div className="max-w-7xl mx-auto px-4 md:py-4 py-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
            <div className="flex gap-y-2 gap-x-4 md:w-[25%] flex-wrap text-gray-400">
              <span className="md:block hidden">Trust & Safety</span>
              <span className="md:block hidden">Privacy Policy</span>
              <span className="md:block hidden">Term of Service</span>
              <span>© 2022. Vhjobs services limited</span>
            </div>
            <div className="flex items-center gap-2 border border-gray-500 px-3 py-1 rounded-md">
              <img src={flag} alt="Nigeria" className="w-5 h-5" />
              <span>Country: NG / Currency: NGN</span>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
