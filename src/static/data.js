import image1 from "../assets/images/clean.png";
import image2 from "../assets/images/chef.png";
import image3 from "../assets/images/paint.png";
import image4 from "../assets/images/make.png";
export const personal = [
  {
    id: 1,
    image: image1,
    title: "Cleaning",
    desc: "Enjoy Quality Cleaning Services with a personal touch. Subscribe to any of our cleaning services to give...",
    color: "#C0BB98",
  },
  {
    id: 2,
    image: image2,
    title: "Mobile Chef",
    desc: "Get the best beauty, cosmetic and personal care. Hire our ...",
    color: "#267A96",
  },
  {
    id: 3,
    image: image3,
    title: "Painting",
    desc: "Give your home or office a nice touch and an excellent finish with our professional...",
    color: "#FDD365",
  },
  {
    id: 4,
    image: image4,
    title: "Make up",
    desc: "Get the best beauty, cosmetic and personal care. Hire our makeup artists to enhance your facial and...",
    color: "#97694D",
  },
];

export const hexToRgba = (hex, alpha = 0.5) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const pricingPlans = [
  {
    id: 1,
    skills: [
      "Logo Designing",
      "UI/UX Design",
      "Website Development",
      "Graphic Design",
    ],
    oldPrice: "₦9,500",
    newPrice: "₦6,500",
    discount: "5% off",
    features: [
      "Three times cleaning",
      "Professional light cleaning",
      "Ironing of up to 10 clothes on each visit",
      "Washing of dishes",
      "Laying of beds",
      "Cleaning of 1 living room, 1 bedroom, a kitchen and 2 toilets",
    ],
  },
  {
    id: 2,
    skills: ["Logo Designing", "UI/UX Design", "Website Development"],
    oldPrice: "₦9,500",
    newPrice: "₦6,500",
    discount: "5% off",
    features: [
      "Three times cleaning",
      "Professional light cleaning",
      "Ironing of up to 10 clothes on each visit",
      "Washing of dishes",
      "Laying of beds",
      "Cleaning of 1 living room, 1 bedroom, a kitchen and 2 toilets",
    ],
  },
  {
    id: 3,
    skills: ["Logo Designing", "UI/UX Design"],
    oldPrice: "₦9,500",
    newPrice: "₦6,500",
    discount: "5% off",
    features: [
      "Three times cleaning",
      "Professional light cleaning",
      "Ironing of up to 10 clothes on each visit",
      "Washing of dishes",
      "Laying of beds",
      "Cleaning of 1 living room, 1 bedroom, a kitchen and 2 toilets",
    ],
  },
];

import trust from "../assets/images/trust.png";
import save from "../assets/images/save.png";
import location from "../assets/images/location.png";
import easy from "../assets/images/easy.png";

export const convinced = [
  {
    id: 1,
    title: "Easily connect with service providers",
    desc: "Connect easily with service providers and get your daily tasks done with simple clicks.",
    image: easy,
  },
  {
    id: 2,
    title: "Save time and money with quality professionals",
    desc: "Be more productive by saving time on unnecessary chores, get your daily home and work tasks done by our skilled professionals.",
    image: save,
  },
  {
    id: 3,
    title: "Trusted Service",
    desc: "We make sure we run a check on our service providers so you are rest assured of quality service.",
    image: trust,
  },
  {
    id: 4,
    title: "Location is no barrier",
    desc: "Wherever you are Vhjobs ensures to get you the closest trusted service providers to help you handle your tasks",
    image: location,
  },
];

// src/data/faqData.js
export const faqs = [
  {
    id: 1,
    question: "Can I subcribe me than one package at once? ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique viverra aliquet lectus morbi suspendisse pellentesque facilisis et. Duis volutpat at iaculis vitae at ut ultricies.",
  },
  {
    id: 2,
    question: "Can I subcribe me than one package at once? ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique viverra aliquet lectus morbi suspendisse pellentesque facilisis et. Duis volutpat at iaculis vitae at ut ultricies.",
  },
  {
    id: 3,
    question: "Can I subcribe me than one package at once? ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique viverra aliquet lectus morbi suspendisse pellentesque facilisis et. Duis volutpat at iaculis vitae at ut ultricies.",
  },
];
