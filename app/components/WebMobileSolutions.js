import React from "react";
import {
  FaRobot,
  FaMobileAlt,
  FaBullhorn,
  FaShoppingCart,
  FaPaintBrush,
  FaMicrophone,
  FaVideo,
  FaChartLine,
  FaShieldAlt,
  FaCode,
} from "react-icons/fa";

const services = [
  {
    icon: <FaRobot />,
    title: "AI-Powered Solutions",
    description:
      "Developing intelligent AI solutions to automate and optimize your business processes.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile AI Integration",
    description:
      "Integrating AI capabilities into mobile applications for enhanced user experiences.",
  },

  {
    icon: <FaShoppingCart />,
    title: "AI in Ecommerce",
    description:
      "Implementing AI to personalize shopping experiences and optimize ecommerce operations.",
  },
  {
    icon: <FaPaintBrush />,
    title: "AI-Enhanced UI/UX",
    description:
      "Designing intuitive and responsive interfaces with AI-driven insights.",
  },
  {
    icon: <FaMicrophone />,
    title: "Audio AI",
    description:
      "Creating advanced audio AI solutions for speech recognition, transcription, and more.",
  },
  {
    icon: <FaVideo />,
    title: "Video Call AI",
    description:
      "Integrating AI features into video calls for enhanced communication and collaboration.",
  },
  {
    icon: <FaChartLine />,
    title: "AI Market Analysis",
    description:
      "Leveraging AI to gather and analyze market data, providing actionable insights for strategic decisions.",
  },
  {
    icon: <FaShieldAlt />,
    title: "AI Security Solutions",
    description:
      "Enhancing security with AI-powered threat detection and response systems.",
  },
  {
    icon: <FaCode />,
    title: "Custom AI Development",
    description:
      "Designing and developing custom AI solutions tailored to your specific business needs.",
  },
];

const WebMobileSolutions = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Web and Mobile App Solutions
        </h2>
        <p className="mt-6 max-w-5xl mx-auto text-lg text-gray-700">
          We focus on creating a match between an optimum solution for your
          needs in your own customized way. Our hands-on team dedicatedly works
          towards your varied requirements.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl text-orange-500 mb-4 mx-auto">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebMobileSolutions;
