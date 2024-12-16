import React, { useEffect } from "react";
import Firstbank from "../Assets/Firstbank.png";
import Accessbank from "../Assets/Access.png";
import GTBank from "../Assets/GTBank_logo.svg.png";
import Pricing from "../components/Pricing/Pricing";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialIcons from "../components/SocialIcons";
import Image1 from "../Assets/Hero 3.jpg";
import { FaArrowDown } from "react-icons/fa";

const Membership = () => {
  const banks = [
    {
      logo: Firstbank,
      name: "First Bank",
      accountNumber: "1234567890",
    },
    {
      logo: Accessbank,
      name: "Access Bank",
      accountNumber: "0987654321",
    },
    {
      logo: GTBank,
      name: "GTBank",
      accountNumber: "1122334455",
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (px) from the original trigger point
    });
  }, []);

  return (
    <div className="min-h-screen">
      <img
        src={Image1}
        className="absolute inset-0 object-cover w-full h-full"
        alt="Hero background"
      />
      <div className="relative bg-black bg-opacity-75 h-screen flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl px-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-red-500 animate-fadeInDown">
            Membership Payment
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-white animate-fadeIn">
            Find the membership plan that fits your busy schedule. Whether
            you’re looking for flexible day access, monthly plans, or family
            packages, we’ve got options for every budget. No matter your choice,
            you’re one step closer to a healthier you.
          </p>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-white animate-fadeIn">
            Train with expert coaches, state-of-the-art equipment, and a
            community that motivates you every step of the way.
          </p>
        </div>
        <div className="absolute bottom-8 flex flex-col items-center animate-bounce">
          <span className="text-white flex gap-5 text-xs sm:text-sm">
            <FaArrowDown />
            Scroll Down <FaArrowDown />
          </span>
          <i className="text-3xl sm:text-4xl text-red-500 fas fa-arrow-down"></i>
        </div>
      </div>
      {/* Main Content Section */}
      <div className="container px-4 py-8 mx-auto bg-white">
        <Pricing />
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl font-semibold text-center capitalize lg:text-2xl"
        >
          Membership Payment
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-xl mx-auto my-4 text-center"
        >
          Kindly make payment using any of the bank details below.
        </p>

        <div className="grid grid-cols-1 gap-6 mt-6 xl:mt-12 md:grid-cols-2 xl:grid-cols-3">
          {banks.map((bank, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col items-center p-6 transition-colors duration-300 transform group rounded-xl"
            >
              <img
                className="object-cover w-24 h-24 rounded-full "
                src={bank.logo}
                alt={`${bank.name} Logo`}
              />
              <h1 className="mt-3 text-lg font-semibold capitalize">
                {bank.name}
              </h1>
              <p className="mt-1 text-sm">
                Account Number: {bank.accountNumber}
              </p>
              <p className="text-sm">Company: GYMMMER</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm">
            After payment, kindly reach out to us with a copy of your receipt
            via any of our channels below:
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="https://wa.me/your-number"
              className="hover:text-blue-600"
              aria-label="WhatsApp"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="..." />
              </svg>
            </a>
            <a
              href="mailto:your-email@gmail.com"
              className="hover:text-blue-600"
              aria-label="Gmail"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="..." />
              </svg>
            </a>
            <a
              href="tel:+234123456789"
              className="hover:text-blue-600"
              aria-label="Phone"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="..." />
              </svg>
            </a>
          </div>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Membership;
