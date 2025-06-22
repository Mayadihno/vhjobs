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
