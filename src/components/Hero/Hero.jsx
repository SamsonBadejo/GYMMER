import React from "react";
import "./Hero.css";
import Image1 from "../../Assets/Hero 1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <img src={Image1}
        className="absolute inset-0 object-cover w-full h-full"
        alt="Hero background"
      />
      {/* Overlay */}
      <div className="relative bg-black bg-opacity-75 h-full">
        <div className="px-6 py-16 mx-auto max-w-screen-xl md:px-12 lg:px-16 lg:py-24 h-full flex flex-col justify-center">
          <div className="flex flex-col items-center justify-between lg:flex-row h-full">
            {/* Text Content */}
            <div className="w-full max-w-2xl mb-12 text-center lg:text-left lg:mb-0 lg:w-7/12">
              <h2 className="mt-16 animate-fadeInLeft text-4xl font-bold leading-tight text-white sm:text-5xl">
                Transform Your Body <br className="hidden md:block" />
                Empower Your{" "}
                <span className="text-red-500 animate-pulse">Mind</span>
              </h2>
              <p className="mt-14 text-lg animate-fadeIn text-gray-300">
                Unlock your potential with expert coaching, state-of-the-art
                facilities, and a community that motivates you. From
                first-timers to fitness pros, we’re here to help you push
                limits, build strength, and feel unstoppable. Start your journey
                today!
              </p>
              <div className="mt-14">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold animate-fadeInLeft text-white bg-red-500 rounded shadow-md hover:bg-red-600 transition duration-200"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
