import React from "react";
import {
  FaRegHandshake,
  FaSearch,
  FaFlask,
  FaDraftingCompass,
} from "react-icons/fa";

const steps = [
  {
    number: "1",
    icon: <FaRegHandshake />,
    title: "Initial Meeting",
    description:
      "We sit down with the user to analyze their current industry, and we craft cutting edge solutions.",
  },
  {
    number: "2",
    icon: <FaSearch />,
    title: "Research & Formulation",
    description:
      "We spend the time performing market research on your industry and determine what your competitors are doing.",
  },
  {
    number: "3",
    icon: <FaFlask />,
    title: "Experimenting & Creating",
    description:
      "We research the web and find multiple styles that will disrupt your current industry from a design perspective.",
  },
  {
    number: "4",
    icon: <FaDraftingCompass />,
    title: "Design & Engineering",
    description:
      "We design and craft a perfect solution around your user persona to ensure your customers are experiencing everything they need to know about your brand.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">How We Do</h2>
        <p className="mt-6 max-w-5xl mx-auto text-lg text-gray-700">
          We dive into your business model and background and ensure optimum
          quality development within a stipulated time frame with the help of
          our innovative and creative taskforce.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-2xl text-orange-500 border-2 border-orange-500 rounded-full">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {step.title}
            </h3>
            <p className="mt-4 text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;
