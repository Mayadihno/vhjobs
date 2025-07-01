import React from "react";
import image1 from "../../assets/images/howItworks1.png";
import image2 from "../../assets/images/howItworks2.png";

const steps = [
  {
    title: "Tell us what you need to get done",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, consectetur in nunc mauris eget dignissim tempus nec.",
  },
  {
    title: "Subscription to a package",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, consectetur in nunc mauris eget dignissim tempus nec.",
  },
  {
    title: "Get matched with professionals",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, consectetur in nunc mauris eget dignissim tempus nec.",
  },
];
export default function HowItWorks() {
  return (
    <section className="w-[98%] md:w-[82%] mx-auto mt-[30px] md:mt-[150px] px-3">
      <div className="flex 2xl:flex-row flex-col items-start justify-between relative">
        {/* Left: Images */}
        <div className="relative md:pb-10 md:ml-10 flex-shrink-0 sm:block hidden">
          <div className="w-[350px] h-[350px] overflow-hidden">
            <img
              src={image1}
              alt="Step 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[330px] h-[330px] overflow-hidden absolute left-[230px] top-[-65px]">
            <img
              src={image2}
              alt="Step 2"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="xl:ml-[250px]">
          <h2 className="text-4xl md:text-5xl font-bold 2xl:w-[65%] w-[85%] pb-3 leading-10 md:leading-14">
            <span className="text-[#1C71B7]">Easiest way </span>
            to get your <span className="text-[#1C71B7]">needs done</span>
          </h2>
          <p className="text-xl md:pb-3 pb-4 text-[#061725]">
            Get you needs done with three simple steps
          </p>
          <div className="">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-2">
                {/* Dot + Line */}
                <div className="flex flex-col items-center">
                  {/* Dot */}
                  <div className="w-4 h-4 rounded-full bg-[#1C71B7] border-4 border-[#DDF0FF] shadow-md" />

                  {/* Vertical dotted line except after last */}
                  {index < steps.length - 1 && (
                    <div className="border-l-5 border-dotted border-[#1C71B7] md:h-18 h-24 mt-1"></div>
                  )}
                </div>

                <div className="text-[#061725]">
                  <h3 className="font-bold text-xl mt-[-6px]">{step.title}</h3>
                  <p className="text-sm mt-1 w-[95%] md:w-[85%]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
