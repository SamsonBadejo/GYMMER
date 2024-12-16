import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Title = ({ title }) => {

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (px) from the original trigger point
    });
  }, []);

  return (
    <div>
      <span className="relative flex justify-center mt-20 " data-aos="fade-up" data-aos-delay="100">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        <span className="relative z-10 bg-white text-red-500 text-2xl px-6 py-2">
          {title}
        </span>
      </span>
    </div>
  );
};

export default Title;
