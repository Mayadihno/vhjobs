import React, { useState } from "react";
import { faqs } from "../../static/data";
import { ICONS } from "../../static/icons";

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };
  return (
    <React.Fragment>
      <div className="max-w-2xl mx-auto mt-10 space-y-4 md:px-0 px-7">
        <div className="md:text-center">
          <h2 className="text-3xl font-bold w-[55%] md:w-full">
            Frequently Asked Questions
          </h2>
          <p className="py-4 text-base md:block hidden">
            Join thousands of individuals and businesses who trust vhjobs to
            help them handle their needs.
          </p>
        </div>

        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow transition"
          >
            <button
              onClick={() => toggleFaq(faq.id)}
              className="flex justify-between cursor-pointer items-center w-full text-left "
            >
              <h3
                className={`${
                  openId === faq.id ? "text-[#1C71B7]" : ""
                } font-bold text-lg`}
              >
                {faq.question}
              </h3>
              <span className="ml-2">
                {openId === faq.id ? (
                  <ICONS.minus size={20} />
                ) : (
                  <ICONS.add size={20} />
                )}
              </span>
            </button>

            {openId === faq.id && (
              <div className="mt-4 text-[#061725] text-sm transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
        <div className="flex justify-center items-center my-8">
          <button className="text-[#1C71B7] border border-[#1C71B7] px-12 py-3 rounded-full text-base">
            Visit FAQ
          </button>
        </div>
      </div>
      <div className="bg-[#DDF0FF] py-5">
        <h1 className="text-center md:text-4xl text-3xl pt-3 text-[#8B0093] font-bold">
          Ready to get your need done?
        </h1>
        <div className="flex justify-center items-center py-5">
          <button className="text-white border flex bg-[#1C71B7] px-12 py-3 rounded-full text-base">
            Explore needs{" "}
            <span className="md:hidden inline-block">
              <ICONS.arrowRight className="mt-[2px] ml-2" size={20} />
            </span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Faq;
