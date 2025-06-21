import React, { useState } from "react";
import { ICONS } from "../../static/icons";
import { Link } from "react-router-dom";
import image from "../../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <React.Fragment>
      <nav className="bg-white text-gray-900 p-4 sticky top-0 z-50 shadow-md w-full md:block hidden">
        <div className="md:w-[92%] w-[98%] mx-auto flex justify-between items-center">
          {/* Logo */}

          <Link to={"/"}>
            <div className="w-[120px] object-fit-contain">
              <img src={image} alt="logo image" className="w-full h-full" />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex justify-content-between items-center space-x-5">
            <h5 className="text-[#061725] text-base font-medium">
              Become a service provider
            </h5>
            <button className="px-8 py-2 cursor-pointer bg-[#1C71B7] text-white rounded-[20px]">
              Sign In
            </button>
            <button
              onClick={() => setmenuOpen(!menuOpen)}
              className="focus:outline-none cursor-pointer text-xl text-[#061725]"
            >
              <ICONS.menu size={30} fontWeight={"bold"} />
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
