import { SiGooglecolab, SiPython } from "react-icons/si"; // Example icons if you want them, or remove

const educations = [
  {
    id: 1,
    active: false,
    title: "BS in Data Science",
    company: "IIT Madras",
    companyClass: "edu-inst", // Custom class for styling if needed
    subtitle: "Pursuing",
    description: [
    //   "Deepening knowledge in advanced statistical modeling, data structures, and machine learning.",
    //   "Engaging in practical programming frameworks using Python and ecosystem tools."
    ],
    stack: [
    //   { title: "Python", icon: SiPython },
    ]
  },
  {
    id: 2,
    active: false,
    title: "Higher Secondary",
    company: "CBSE",
    companyClass: "edu-inst",
    subtitle: "2024",
    description: [
      // "Focused on Core Mathematics and Computer Science basics."
    ],
    stack: []
  }
];

export default educations;