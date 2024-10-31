// pages/about.js
import React from "react";
import {
  FaWifi,
  FaCloud,
  FaVideo,
  FaMicrophone,
  FaRobot,
  FaNetworkWired,
  FaShieldAlt,
  FaDatabase,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative w-full h-60 md:h-80 bg-gradient-to-b from-purple-800 to-indigo-600 text-white">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
          <div className="flex items-center mt-4">
            <a href="/" className="text-white hover:underline">
              Home
            </a>
            <span className="mx-2"> / </span>
            <span className="text-gray-200">About</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Diginetic Technologies is a leading technology firm specializing in
            AI solutions, website development, and integration with various AI
            APIs. Our team of experts is dedicated to providing cutting-edge
            solutions that drive innovation and efficiency.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We focus on delivering high-quality AI-driven applications,
            including audio AI, chat AI, and video call features with AI
            enhancements. Our mission is to empower businesses with advanced
            technology solutions that enhance their operations and customer
            experiences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Our Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {[
              { name: "Wifi & Networking", icon: <FaWifi /> },
              { name: "Cloud & Data Center", icon: <FaCloud /> },
              { name: "Video Call AI", icon: <FaVideo /> },
              { name: "Audio AI", icon: <FaMicrophone /> },
              { name: "Chat AI", icon: <FaRobot /> },
              { name: "IoT & LoRa", icon: <FaNetworkWired /> },
              { name: "IT Security", icon: <FaShieldAlt /> },
              { name: "Database Management", icon: <FaDatabase /> },
              { name: "System Integration", icon: <FaCogs /> },
              { name: "Data Analytics", icon: <FaChartLine /> },
            ].map((technology, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow-md px-3 py-4 text-center text-gray-800 font-medium"
              >
                <div className="text-2xl mb-2">{technology.icon}</div>
                {technology.name}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
