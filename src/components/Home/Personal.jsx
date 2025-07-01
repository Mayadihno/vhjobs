import React from "react";
import { ICONS } from "../../static/icons";
import { hexToRgba, personal } from "../../static/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const Personal = () => {
  return (
    <React.Fragment>
      <div className="md:w-[80%] w-[98%] mx-auto md:mt-[80px] mt-[50px] px-3">
        <div className="md:text-center">
          <h1 className="text-4xl md:w-full w-[95%] md:text-5xl font-bold">
            Why stress when <span className="text-[#8b0093]">vhjobs</span> is
            here!
          </h1>
          <h4 className="text-lg py-3 w-full xl:w-[35%] md:mx-auto leading-7">
            Join thousands of individuals and businesses who trust vhjobs to
            help them handle their needs.
          </h4>
        </div>
        <div className="grid grid-cols-1 md:gap-y-8 gap-y-5">
          <div className="personal relative rounded-[32px] 2xl:h-[70vh] text-white min-h-[48vh] xl:h-[100vh] lg:h-[60vh] md:h-[68vh] my-7">
            <div className="absolute w-full h-full">
              <div className="w-[95%] mx-auto md:pt-14 pt-10">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl md:text-5xl w-[80%] font-bold xl:w-[25%]">
                    <span className="md:inline-block hidden">Or</span>{" "}
                    <span className="md:hidden inline-block">Either</span>{" "}
                    Personal Needs Like
                  </h2>
                  <div className="md:w-18 md:h-18 w-10 h-10 absolute right-[-10px] md:right-[-40px] shadow-2xl flex justify-center items-center bg-white p-3 rounded-full">
                    <ICONS.arrowRight size={40} color="#1C71B7" className="" />
                  </div>
                </div>
                <div className="md:grid hidden 2xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 gap-4 md:mt-14 mt-10">
                  {personal.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: hexToRgba(item.color, 0.8),
                      }}
                      className="rounded-[20px] flex flex-col md:py-3 md:px-3 py-7 px-7 text-white"
                    >
                      <div className="w-[150px] h-[150px] md:w-[100px] md:h-[100px]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h4 className="md:text-2xl text-xl md:pt-5 pt-3 md:font-extrabold font-semibold tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-base pt-2">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="block md:hidden absolute bottom-10 w-[95%] mt-20">
                  <Swiper
                    modules={[Autoplay]}
                    className="mySwiper"
                    spaceBetween={16}
                    slidesPerView={2}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                  >
                    {personal.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div
                          style={{
                            backgroundColor: hexToRgba(item.color, 0.8),
                          }}
                          className="rounded-[20px] flex flex-col py-3 px-3 text-white"
                        >
                          <div className="w-[80px] h-[80px]">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <h4 className="text-xl pt-2 font-semibold tracking-wide">
                            {item.title}
                          </h4>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="bussiness rounded-[32px] relative 2xl:h-[70vh] text-white min-h-[48vh] xl:h-[100vh] lg:h-[60vh] md:h-[68vh] my-7">
            <div className="w-full h-full">
              <div className="w-[95%] mx-auto md:pt-14 pt-10">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl md:text-5xl w-[80%] font-bold xl:w-[25%]">
                    Or Bussiness Needs Like
                  </h2>
                  <div className="md:w-18 md:h-18 w-10 h-10 absolute right-[-10px] md:right-[-40px] shadow-2xl flex justify-center items-center bg-white p-3 rounded-full">
                    <ICONS.arrowRight size={40} color="#1C71B7" className="" />
                  </div>
                </div>
                <div className="md:grid hidden 2xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 gap-4 md:mt-14 mt-10">
                  {personal.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: hexToRgba(item.color, 0.8),
                      }}
                      className="rounded-[20px] flex flex-col md:py-3 md:px-3 py-7 px-7 text-white"
                    >
                      <div className="w-[150px] h-[150px] md:w-[100px] md:h-[100px]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h4 className="md:text-2xl text-xl md:pt-5 pt-3 md:font-extrabold font-semibold tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-base pt-2">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="block md:hidden absolute bottom-10 w-[95%] mt-20">
                  <Swiper
                    modules={[Autoplay]}
                    className="mySwiper"
                    spaceBetween={16}
                    slidesPerView={2}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                  >
                    {personal.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div
                          style={{
                            backgroundColor: hexToRgba(item.color, 0.8),
                          }}
                          className="rounded-[20px] flex flex-col py-3 px-3 text-white"
                        >
                          <div className="w-[80px] h-[80px]">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <h4 className="text-xl pt-2 font-semibold tracking-wide">
                            {item.title}
                          </h4>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Personal;
