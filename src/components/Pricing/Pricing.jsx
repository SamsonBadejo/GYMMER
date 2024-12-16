import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (px) from the original trigger point
    });
  }, []);

  return (
    <div class="bg-white">
      <div class="container px-6 py-8 mx-auto">
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          class="text-2xl  font-semibold text-center text-black capitalize lg:text-3xl dark:text-white"
        >
          MEMBERSHIP PLAN{" "}
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          class="max-w-2xl mx-auto mt-4 text-center text-black xl:mt-8 dark:text-gray-300"
        >
          Find the membership plan that fits your busy schedule. Whether you’re
          looking for flexible day access, monthly plans, or family packages,
          we’ve got options for every budget. No matter your choice, you’re one
          step closer to a healthier you.
        </p>

        <span
          className="relative flex justify-center mt-20 "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          <span className="relative z-10 bg-white text-red-500 text-2xl px-6 py-2">
            MONTHLY MEMBERSHIP PLAN
          </span>
        </span>
        <hr class="h-px my-6 bg-gray-200 border-none" />

        <div class="grid  grid-cols-1 gap-8 mt-16 xl:mt-16 xl:gap-12 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          <div
            data-aos="slide-right"
            data-aos-delay="100"
            class="w-full hover:bg-red-200 p-8 space-y-8 text-center border border-red-200 rounded-lg dark:border-gray-700 transition duration-300 relative"
          >
            <p class="font-medium text-7 uppercase dark:text-gray-300">
              Individual
            </p>

            <h2 class="text-4xl font-semibold text-black uppercase dark:text-gray-100">
              N40,000
            </h2>

            <p class="font-medium text-7 dark:text-gray-300">Monthly</p>

            <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Join Today
            </button>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            class="w-full hover:bg-red-200 p-8 space-y-8 text-center border border-red-200 rounded-lg dark:border-gray-700 transition duration-300 relative"
          >
            <p class="font-medium text-7 uppercase dark:text-gray-300">
              Couples
            </p>

            <h2 class="text-4xl font-semibold text-black uppercase dark:text-gray-100">
              N80,000
            </h2>

            <p class="font-medium text-7 dark:text-gray-300">Monthly</p>
            <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Join Today
            </button>
          </div>

          <div
            data-aos="slide-left"
            data-aos-delay="100"
            class="w-full hover:bg-red-200 p-8 space-y-8 text-center border border-red-200 rounded-lg dark:border-gray-700 transition duration-300 relative"
          >
            <p class="font-medium text-gray-700 uppercase dark:text-gray-300">
              Family
            </p>

            <h2 class="text-4xl font-semibold text-black uppercase dark:text-gray-100">
              N150,000
            </h2>

            <p class="font-medium text-7 dark:text-gray-300">Monthly</p>

            <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Join Today
            </button>
          </div>
        </div>
        <span
          className="relative flex justify-center mt-20 "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          <span className="relative z-10 bg-white text-red-500 text-2xl px-6 py-2">
            YEARLY MEMBERSHIP PLAN
          </span>
        </span>
        <hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-500" />

        <div class="grid  grid-cols-1 gap-8 mt-16 xl:mt-16 xl:gap-12 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          <div
            data-aos="slide-right"
            data-aos-delay="100"
            class="w-full hover:bg-red-200 p-8 space-y-8 text-center border border-red-200 rounded-lg dark:border-gray-700 transition duration-300 relative"
          >
            <p class="font-medium text-7 uppercase dark:text-gray-300">
              Individual
            </p>

            <h2 class="text-4xl font-semibold text-black uppercase dark:text-gray-100">
              N480,000
            </h2>

            <p class="font-medium text-7 dark:text-gray-300">Yearly</p>

            <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Join Today
            </button>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            class="w-full hover:bg-red-200 p-8 space-y-8 text-center border border-red-200 rounded-lg dark:border-gray-700 transition duration-300 relative"
          >
            <p class="font-medium text-7 uppercase dark:text-gray-300">
              Couples
            </p>

            <h2 class="text-4xl font-semibold text-black uppercase dark:text-gray-100">
              N960,000
            </h2>

            <p class="font-medium text-7 dark:text-gray-300">Yearly</p>
            <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Join Today
            </button>
          </div>

          <div
            data-aos="slide-left"
            data-aos-delay="100"
            class="w-full hover:bg-red-200 p-8 space-y-8 text-center border border-red-200 rounded-lg dark:border-gray-700 transition duration-300 relative"
          >
            <p class="font-medium text-gray-700 uppercase dark:text-gray-300">
              Family
            </p>

            <h2 class="text-4xl font-semibold text-black uppercase dark:text-gray-100">
              N1,800,000
            </h2>

            <p class="font-medium text-7 dark:text-gray-300">Yearly</p>

            <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Join Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
