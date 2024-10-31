import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="w-[40%]">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>

              <Image src="/logo.png" alt="Logo" width={150} height={150} />
            </a>
          </div>
          <p className="text-gray-700 mb-4 pt-3">
            Start working with Diginetic that can provide everything you need to
            develop Network and Web solutions.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-500 hover:text-gray-700"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-500 hover:text-gray-700"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        <div className="flex space-x-16">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Protection
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Our Location
          </h3>
          <p className="text-gray-700">
            New Delhi - 110048
            <br />
          </p>
          <p className="text-gray-700 mt-2">Email: support@diginetic.in</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
