import React from "react";
import { pricingPlans } from "../../static/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
const Services = () => {
  return (
    <React.Fragment>
      <div className="md:w-[92%] w-[98%] mx-auto md:mt-[80px] mt-[30px] px-3">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold md:w-full w-[75%] mx-auto">
            Get more <span className="text-[#1C71B7]">needs done</span> for less
          </h1>
          <h4 className="md:text-xl text-lg py-3">
            Services are perfect when they are bundled
          </h4>
        </div>
        <div className=" bg-white rounded-[20px] shadow-lg border border-[#1C71B7] overflow-hidden">
          {/* Mobile: Swiper slider */}
          <div className="block md:hidden">
            <Swiper
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              slidesPerView={1.1}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {pricingPlans.map((plan, index) => (
                <SwiperSlide key={plan.id}>
                  <div
                    className={`py-6 px-4 relative ${
                      index !== 0 ? "border-l" : ""
                    } border-[#1C71B7]`}
                  >
                    <div className="absolute top-0 right-0 bg-green-600 text-white text-sm px-2 py-1 rounded-bl-lg">
                      {plan.discount}
                    </div>

                    <div className="my-5 flex flex-col space-y-2 w-fit h-[130px]">
                      {plan.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-l from-[#09263D] to-[#1C71B7] text-white text-sm font-medium px-3 py-1 rounded-md shadow"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="text-center mt-10 mb-5 flex justify-center space-x-4 items-center">
                      <p className="text-xl line-through bg-gradient-to-l from-[#09263D] to-[#1C71B7] bg-clip-text text-transparent">
                        {plan.oldPrice}
                      </p>
                      <p className="text-3xl font-bold bg-gradient-to-l from-[#09263D] to-[#1C71B7] bg-clip-text text-transparent">
                        {plan.newPrice}
                      </p>
                    </div>

                    <button className="bg-[#1C71B7] text-white font-medium py-3 w-full rounded-full mb-2 hover:bg-[#1c71b79f] transition">
                      Get Started
                    </button>

                    <p className="text-center text-[#1C71B7] text-base font-semibold my-2 cursor-pointer">
                      Learn more
                    </p>

                    <ul className="text-sm space-y-1 text-gray-700">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <span
                            className={
                              idx === 0 ? "mt-1 font-bold" : "font-bold"
                            }
                          >
                            ✓
                          </span>
                          <span
                            className={`${
                              idx === 0 ? "font-[800] text-lg" : ""
                            } w-[65%]`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-center text-[#1C71B7] mt-4 text-base font-semibold cursor-pointer">
                      See more features
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop: Compound layout */}
          <div className="hidden md:flex flex-row">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.id}
                className={`w-1/3 p-6 relative ${
                  index !== 0 ? "border-l" : ""
                } border-[#1C71B7]`}
              >
                <div className="absolute top-0 right-0 bg-green-600 text-white text-sm px-2 py-1 rounded-bl-lg">
                  {plan.discount}
                </div>

                <div className="my-5 flex flex-col space-y-2 w-fit h-[130px]">
                  {plan.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-l from-[#09263D] to-[#1C71B7] text-white text-base font-medium px-3 py-1 rounded-md shadow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="text-center mt-10 mb-5 flex justify-center space-x-4 items-center">
                  <p className="text-xl line-through bg-gradient-to-l from-[#09263D] to-[#1C71B7] bg-clip-text text-transparent">
                    {plan.oldPrice}
                  </p>
                  <p className="text-3xl font-bold bg-gradient-to-l from-[#09263D] to-[#1C71B7] bg-clip-text text-transparent">
                    {plan.newPrice}
                  </p>
                </div>

                <button className="bg-[#1C71B7] cursor-pointer text-white font-medium py-3 w-full rounded-full mb-2 hover:bg-[#1c71b79f] transition">
                  Get Started
                </button>

                <p className="text-center text-[#1C71B7] text-base font-semibold cursor-pointer my-2">
                  Learn more
                </p>

                <ul className="text-sm space-y-1 text-gray-700">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span
                        className={idx === 0 ? "mt-1 font-bold" : "font-bold"}
                      >
                        ✓
                      </span>
                      <span
                        className={`${
                          idx === 0 ? "font-[800] text-lg" : ""
                        } w-[65%]`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-center text-[#1C71B7] mt-4 text-base font-semibold cursor-pointer">
                  See more features
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:hidden flex justify-center">
          <button className="border-[#1C71B7] border my-5 w-50 text-base font-semibold text-[#1C71B7] cursor-pointer py-3 rounded-full transition">
            See more
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
