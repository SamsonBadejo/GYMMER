import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaGoogle,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-300">
      <div className=" px-4 sm:px-6 mx-auto">
        <hr className="h-px my-6 bg-red-100 border-none" />
        <div className="lg:flex text-sm">
          {/* Left Section */}
          <div className="w-full mx-4 sm:mx-6 lg:w-2/5">
            <div className="sm:px-6">
              <Link to="/">
                <h1 className="font-bold text-red-800 text-3xl sm:mt-0">GYMMER</h1>
              </Link>

              <p className="max-w-sm mt-1 text-black text-xs">
                Gymmer is a gym focused on self-improvement, offering stunning
                views of Lagos and top-notch coaching. We make fitness fun,
                effective, and simple—helping you safely reach your goals.
              </p>

              <div className="flex mt-4 -mx-2 sm:-mx-4">
                <Link
                  to="/"
                  className="mx-2 sm:mx-4 text-black transition-colors duration-300 hover:text-red-500"
                  aria-label="Reddit"
                >
                  {/* Reddit SVG */}
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Path */}
                  </svg>
                </Link>

                <Link
                  to="/"
                  className="mx-2 sm:mx-4 text-black transition-colors duration-300 hover:text-red-500"
                  aria-label="Facebook"
                >
                  {/* Facebook SVG */}
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Path */}
                  </svg>
                </Link>

                <Link
                  to="/"
                  className="mx-2 sm:mx-4 text-black transition-colors duration-300 hover:text-red-500"
                  aria-label="Github"
                >
                  {/* Github SVG */}
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Path */}
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* About Column */}
              <div>
                <h3 className="text-red-800 uppercase">About</h3>
                <Link
                  to="/about"
                  className="block mt-2 text-xs text-black hover:underline hover:text-red-500 transition duration-150"
                >
                  Company
                </Link>
                <Link
                  to="/about"
                  className="block mt-2 text-xs text-black hover:underline hover:text-red-500 transition duration-150"
                >
                  Community
                </Link>
                <Link
                  to="/membership"
                  className="block mt-2 text-xs text-black hover:underline hover:text-red-500 transition duration-150"
                >
                  Price
                </Link>
              </div>

              {/* Links Column */}
              <div className="hidden md:block">
                <h3 className="text-red-800 uppercase">Links</h3>
                <Link
                  to="/"
                  className="block mt-2 text-xs text-black hover:underline hover:text-red-500 transition duration-150"
                >
                  Home
                </Link>
                <Link
                  to="/classes"
                  className="block mt-2 text-xs text-black hover:underline hover:text-red-500 transition duration-150"
                >
                  Classes
                </Link>
                <Link
                  to="/membership"
                  className="block mt-2 text-xs text-black hover:underline hover:text-red-500 transition duration-150"
                >
                  Membership
                </Link>
                <Link
                  to="/contact"
                  className="block mt-2 text-xs text-black hover:underline hover:text-red-500 transition duration-150"
                >
                  Contact
                </Link>
                <Link
                  to="/gallery"
                  className="block mt-2 text-xs text-black hover:underline hover:text-red-500 transition duration-150"
                >
                  Gallery
                </Link>
              </div>

              {/* Contact Column */}
              <div>
                <h3 className="text-red-800 uppercase">Contact</h3>
                <a
                  href="tel:+2348109514251"
                  className="block mt-2 text-xs text-black hover:underline hover:text-red-500 transition duration-150"
                >
                  +2348109514251
                </a>
                <a
                  href="mailto:zwitsam8@gmail.com"
                  className="block mt-2 text-xs text-black hover:underline hover:text-red-500 transition duration-150"
                >
                  zwitsam8@gmail.com
                </a>
                <div className="flex  space-x-6 py-4">
                  {/* Gmail Link */}
                  <a
                    href="mailto:zwitsam8@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-red-500 transition duration-300"
                  >
                    <FaGoogle />
                  </a>

                  {/* WhatsApp Link */}
                  <a
                    href="https://wa.me/2348109514251"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-green-500 transition duration-300"
                  >
                    <FaWhatsapp />
                  </a>

                  {/* Instagram Link */}
                  <a
                    href="https://www.instagram.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-pink-500 transition duration-300"
                  >
                    <FaInstagram />
                  </a>

                  {/* Twitter Link */}
                  <a
                    href="https://twitter.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-blue-500 transition duration-300"
                  >
                    <FaTwitter />
                  </a>

                  {/* Facebook Link */}
                  <a
                    href="https://www.facebook.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-2 bg-red-500 border-none" />

        {/* Footer Bottom */}
        <div className="text-sm p-2">
          <p className="text-center text-black">
            <span className="font-extrabold mr-10 text-red-900">
              DESIGNED BY SAMSON BADEJO
            </span>{" "}
            © Brand 2024 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
