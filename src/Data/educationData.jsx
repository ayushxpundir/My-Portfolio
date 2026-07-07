import iitmLogo from "../assets/Icons/iitmlogo.svg";
import cbseLogo from "../assets/Icons/cbselogo.svg"

const educations = [
  {
    id: 1,
    active: false,
    title: "IIT Madras",
    company: "Bachelor of Science",
    companyClass: "exp-span",
    subtitle: "Data Science",
    logo: {
      src: iitmLogo,
      alt: "IIT Madras logo",
      heading: "IIT Madras",
      description: "One of India's premier engineering institutes.",
    },
    description: [],
    stack: []
  },
  {
    id: 2,
    active: false,
    title: "CBSE",
    company: "Higher Secondary",
    companyClass: "exp-span",
    subtitle: "Science (PCM)",
    logo: {
      src: cbseLogo,
      alt: "CBSE logo",
      heading: "CBSE Board",
      description: "Central Board of Secondary Education.",
    },
    description: [],
    stack: []
  }
];

export default educations;