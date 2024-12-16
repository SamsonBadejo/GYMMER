import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Personal Training Programs",
    path: "/about#services",
    aosDelay: 100,
  },
  {
    title: "Group Fitness Classes",
    path: "/about#services",
    aosDelay: 200,
  },
  {
    title: "Strength Training and Weightlifting",
    path: "/about#services",
    aosDelay: 300,
  },
  {
    title: "Cardio Fitness Zone",
    path: "/about#services",
    aosDelay: 400,
  },
  {
    title: "Wellness and Recovery Services",
    path: "/about#services",
    aosDelay: 500,
  },
  {
    title: "Nutritional Guidance",
    path: "/about#services",
    aosDelay: 600,
  },
];

const Feature = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (px) from the original trigger point
    });
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-6">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.path}
            className="hover:text-red-800 transition-all duration-100"
          >
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={feature.aosDelay}
            >
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10 animate-bounce"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="20" width="12" height="24" fill="none" />
                  <rect x="51" y="20" width="12" height="24" fill="none" />
                  <rect x="16" y="28" width="32" height="8" fill="none" />
                  <line x1="14" y1="28" x2="14" y2="36" />
                  <line x1="50" y1="28" x2="50" y2="36" />
                </svg>
              </div>
              <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                {feature.title}
              </h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Feature;
