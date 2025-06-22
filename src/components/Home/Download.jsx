import React from "react";
import qr from "../../assets/images/qr.png";
import image3 from "../../assets/images/iphone.png";
import image1 from "../../assets/images/iphone1.png";
import image2 from "../../assets/images/apple.png";
import image4 from "../../assets/images/google.png";

const Download = () => {
  return (
    <section className="md:w-[92%] text-[#061725] w-[98%] mx-auto md:mt-[80px] mt-[30px] px-3">
      <div className="bg-[#DDF0FF] rounded-[32px] px-10 t-5 md:px-20 md:pt-12">
        <div className="md:flex flex-row items-center justify-between gap-10 hidden">
          <div className="md:w-[40%] md:block hidden w-full">
            <h2 className="text-3xl md:text-5xl w-[50%] font-bold leading-tight mb-4">
              Download Vhjobs app
            </h2>
            <p className="text-xl mb-6 w-[45%]">
              Scan the QR code below with your phone camera to download the
              Vhjobs app.
            </p>
            <img
              src={qr}
              alt="QR Code"
              className="w-[120px] h-[120px] ml-[-12px] pb-7 md:w-[140px] md:h-[140px] object-contain"
            />
          </div>

          {/* Right: Phones */}
          <div className="md:w-[40%] w-full">
            <img src={image3} alt="App screen 3" className=" object-contain" />
          </div>
        </div>
        <div className=" md:hidden block">
          <h2 className="text-2xl w-[50%] mx-auto font-bold pb-7 pt-5 text-center">
            Download Vhjobs app
          </h2>
          <div className="relative">
            <img src={image1} alt="" className="" />
            <div className=" absolute bottom-10 left-1/2 space-y-3 transform -translate-x-1/2">
              <button className="px-12 text-nowrap py-3 flex items-center cursor-pointer bg-[#1C71B7] text-white rounded-[20px]">
                <img
                  src={image2}
                  className="w-4 mr-2 h-4 object-contain"
                  alt=""
                />{" "}
                Apple Store
              </button>
              <button className="px-12 py-3 text-nowrap flex items-center cursor-pointer bg-[#1C71B7] text-white rounded-[20px]">
                <img
                  src={image4}
                  className="w-4 h-4 mr-2 object-contain"
                  alt=""
                />{" "}
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
