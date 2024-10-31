import React from "react";

const ContactBackground = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-pink-500 via-purple-600 to-purple-800 flex items-center justify-center text-white overflow-hidden py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/random/1920x1080?nature,water')",
        }}
      >
        <div className="absolute inset-0 bg-opacity-70 bg-gradient-to-b from-pink-500 to-purple-800"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 py-8 space-y-8 md:space-y-0 md:space-x-16">
        <div className="text-center md:text-left max-w-md mx-4 md:mx-0">
          <h1 className="text-4xl font-bold mb-4">
            We are ready to serve you – Please Explore Us Today!
          </h1>
          <p className="text-lg text-white/90">
            Start working with Diginetic that can provide everything you need to
            generate awareness, drive traffic, and connect.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md mx-4 md:mx-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Start With Us
          </h2>
          <form>
            <label className="block mb-4">
              <span className="text-gray-700">Your Name *</span>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Name"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Your Email *</span>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Email"
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Your Phone no. *</span>
              <input
                type="tel"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Phone no."
              />
            </label>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactBackground;
