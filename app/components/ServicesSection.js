import React from "react";
import {
  FaLaptopCode,
  FaCubes,
  FaNetworkWired,
  FaChartLine,
  FaShieldAlt,
  FaCode,
  FaMicrophone,
  FaRobot,
  FaVideo,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-blue-500" />,
    title: "AI-Powered Websites",
    description:
      "Building intelligent and responsive websites powered by AI to enhance user experience and engagement.",
  },
  {
    icon: <FaCubes className="text-blue-500" />,
    title: "AI Integration",
    description:
      "Seamlessly integrating AI APIs into your existing systems to automate and optimize business processes.",
  },
  {
    icon: <FaNetworkWired className="text-blue-500" />,
    title: "AI-Driven Network Solutions",
    description:
      "Implementing AI-driven network solutions to ensure robust and efficient connectivity.",
  },
  {
    icon: <FaChartLine className="text-blue-500" />,
    title: "AI Market Analysis",
    description:
      "Leveraging AI to gather and analyze market data, providing actionable insights for strategic decisions.",
  },
  {
    icon: <FaShieldAlt className="text-blue-500" />,
    title: "AI Security Solutions",
    description:
      "Enhancing security with AI-powered threat detection and response systems.",
  },
  {
    icon: <FaCode className="text-blue-500" />,
    title: "Custom AI Development",
    description:
      "Designing and developing custom AI solutions tailored to your specific business needs.",
  },
  {
    icon: <FaMicrophone className="text-blue-500" />,
    title: "Audio AI",
    description:
      "Developing advanced audio AI solutions for speech recognition, transcription, and more.",
  },
  {
    icon: <FaRobot className="text-blue-500" />,
    title: "Chat AI",
    description:
      "Creating intelligent chatbots and virtual assistants to improve customer service and engagement.",
  },
  {
    icon: <FaVideo className="text-blue-500" />,
    title: "Video Call AI",
    description:
      "Integrating AI features into video calls for enhanced communication and collaboration.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Ai driven Solutions
        </h2>
        <p className="mt-6 max-w-5xl mx-auto text-lg text-gray-700">
          Diginetic AI Technologies is uniquely positioned to create a solution
          roadmap spanning across multiple technologies and applications. Our
          AI-driven solutions are designed to enhance efficiency, drive
          innovation, and provide a competitive edge in the market.
        </p>
      </div>
      <div className="grid gap-12 mt-16 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 rounded-full">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="mt-4 text-gray-600 text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
