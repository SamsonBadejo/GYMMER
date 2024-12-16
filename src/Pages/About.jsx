import React from "react";
import { Link } from "react-router-dom";
import GymPhoto from "../Assets/Profile.jpg"; // Replace with your preferred image
import Offer from "../components/Offer/Offer";
import Title from "../components/Title";
import Team from "../components/Teams/Team";

const About = () => {
  return (
    <section className="bg-black">
      <div className="container  px-6 py-16 mx-auto">
        <div className="lg:-mx-6 mt-16 lg:flex lg:items-center">
          <img
            className="object-contain object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
            src={GymPhoto}
            alt="Gym and Fitness"
          />

          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <p className="text-5xl font-semibold text-red-500">“</p>

            <h1 className="text-2xl font-semibold text-white lg:text-3xl lg:w-96">
              Welcome to <span className="text-red-500">Gymmer</span>
            </h1>

            <p className="max-w-lg mt-6 text-white">
              <strong className="text-red-500 ">Gymmer</strong> is a demo
              fitness website designed to showcase advanced features and sleek,
              modern design. Ideal for gyms, personal trainers, and wellness
              brands, it includes membership plans, payment integration, and
              responsive layouts.
            </p>

            <p className="mt-4 max-w-lg text-white">
              Looking for a professional fitness website? This demo is{" "}
              <span className="text-red-500 font-semibold">
                available for sale
              </span>{" "}
              and fully customizable to match your brand’s needs.
            </p>

            <p className="mt-4 max-w-lg text-white">
              Get started today and transform{" "}
              <strong className="text-red-500 ">Gymmer</strong> into your dream
              platform!
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-red-500 rounded shadow-md hover:bg-red-600 transition duration-200"
              >
                Contact Us
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
        <Title title="Our Services" />
        <Offer  />
        <Title title="Teams" />
        <Team />

      </div>
    </section>
  );
};

export default About;
