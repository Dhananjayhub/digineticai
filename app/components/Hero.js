import React from "react";

const SoftwareSolutions = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-20 px-8 bg-gradient-to-r  space-y-8 md:space-y-0 md:space-x-12">
      <div className="text-center md:text-left max-w-lg">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Transcending Business Boundaries with Our Software Solutions
        </h2>
        <p className="text-gray-700 mb-6">
          Diginetic makes it simple and affordable for you to take your business
          online. You can rely on us to be involved from designing to custom
          software development to marketing.
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-md hover:from-blue-700 hover:to-purple-700 transition duration-300">
          Get Started
        </button>
      </div>

      <div className="max-w-xs md:max-w-md">
        <img
          src="/banner.jpg"
          alt="Diginetic Logo"
          className="w-full rounded-lg shadow-sm"
        />
      </div>
    </div>
  );
};

export default SoftwareSolutions;
