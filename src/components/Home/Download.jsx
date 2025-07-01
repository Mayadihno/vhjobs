import React from "react";
import qr from "../../assets/images/qr.png";
import image3 from "../../assets/images/iphone.png";
import image1 from "../../assets/images/iphone1.png";
import image2 from "../../assets/images/apple.png";
import image4 from "../../assets/images/google.png";
import { convinced } from "../../static/data";
import phone from "../../assets/images/phone1.png";
import phone2 from "../../assets/images/phone2.png";
import phone3 from "../../assets/images/phone3.png";
import arrow from "../../assets/images/arrow.png";
import { ICONS } from "../../static/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Download = () => {
  return (
    <React.Fragment>
      <section className="md:w-[80%] text-[#061725] w-[98%] mx-auto md:mt-[80px] mt-[30px] px-3">
        <div className="bg-[#DDF0FF] rounded-[32px] px-10 t-5 md:px-20 md:pt-12">
          <div className="xl:flex flex-row items-center justify-between gap-10 hidden">
            <div className="md:w-[40%] md:block hidden w-full">
              <h2 className="text-3xl md:text-5xl w-[70%] font-bold leading-tight mb-4">
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
            <div className="md:w-[55%] w-full">
              <img
                src={image3}
                alt="App screen 3"
                className=" object-contain"
              />
            </div>
          </div>
          <div className=" xl:hidden block">
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
        <div className=" mt-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              Still not <span className="text-[#8b0093]">convinced</span>?
            </h2>
            <h4 className="text-lg py-3">
              Here are top reasons vhjobs should handle your needs
            </h4>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 md:gap-y-8 gap-y-5 mt-5">
            {convinced.map((item) => {
              return (
                <div
                  className="bg-white flex md:items-start items-center flex-col shadow-lg rounded-[12px]"
                  key={item.id}
                >
                  <div className="w-28 h-28 rounded-full">
                    <img
                      src={item.image}
                      className="object-contain w-full h-full"
                      alt=""
                    />
                  </div>
                  <div className="px-6 text-center md:text-start">
                    <h2 className="text-3xl xl:w-[55%] md:pb-2 font-bold">
                      {item.title}
                    </h2>
                    <p className="text-lg leading-8 py-4 xl:w-[75%]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="mt-14 pt-3 bg-[#061725] w-full h-fit">
        <div className="md:w-[80%] text-white md:px-8 px-4 md:py-10 w-[98%] mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className=" col-span-1">
              <div className="flex flex-col mt-5">
                <h2 className="text-3xl md:text-5xl tracking-widest font-bold xl:w-[55%]">
                  What people saying
                </h2>
                <p className="pb-4 pt-6 text-xl leading-8 xl:w-[45%] xl:block hidden">
                  We pride ourselves on customer satisfaction, and here's what
                  satisfied customers are saying
                </p>
                <p className="pb-4 pt-3 text-base leading-8 xl:w-[45%] block xl:hidden">
                  In simple term, we connnect people with skilled professionals
                  for their Personal and Business needs
                </p>
                <div className="w-50 xl:block hidden">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="xl:hidden pb-8 py-5">
              <Swiper spaceBetween={-80} slidesPerView={1.2} loop={true}>
                {[phone, phone2, phone3].map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`phone-${idx}`}
                      className="w-50 h-auto object-contain rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-span-1 hidden xl:block py-4 md:py-0">
              <div className="flex w-[38%]  space-x-4">
                <img src={phone} className=" w-full object-contain" alt="" />
                <img src={phone2} alt="" />
                <img src={phone3} alt="" />
              </div>
            </div>
          </div>
          <div className="xl:flex hidden justify-end mr-10 items-center space-x-4">
            <div className="bg-white flex items-center justify-center w-10 h-10 rounded-full">
              <ICONS.less size={20} color="#1C71B7" className="" />
            </div>
            <div className="bg-white w-10 flex items-center justify-center h-10 rounded-full">
              <ICONS.greater size={20} color="#1C71B7" className="" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Download;
