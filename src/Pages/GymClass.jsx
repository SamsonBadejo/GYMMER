import React, { Component } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Image1 from "../Assets/Hero 1.jpg";
import Title from "../components/Title";
import { FaArrowDown } from "react-icons/fa";

class GymClass extends Component {
  componentDidMount() {
    AOS.init({ duration: 1200 });
  }

  render() {
    return (
      <div className="bg-gray-100 min-h-screen ">
        {/* Header Section */}
        <img
          src={Image1}
          className="absolute inset-0 object-cover w-full h-full"
          alt="Hero background"
        />
        <div className="relative bg-black bg-opacity-75 h-screen flex flex-col justify-center items-center text-center">
          <div className="max-w-4xl px-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-red-500 animate-fadeInDown">
              Unleash Your Potential
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-white animate-fadeIn">
              Discover a range of gym classes designed to empower your body and
              mind. From high-intensity interval training to relaxing yoga
              sessions, we've got everything you need to reach your fitness
              goals.
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

        <Title title="Gym Class Schedule" />

        <div className="0 text-black text-center p-4 sm:p-8" data-aos="fade-up">
          <p className="text-sm sm:text-lg mt-2">
            Explore our normal and popular gym classes tailored to your fitness
            goals.
          </p>
        </div>

        {/* Class Schedule Section */}
        <div className="container no-overflow mx-auto py-6 sm:py-12 px-4 ">
          {/* Normal Schedule */}
          <div className="mb-6 sm:mb-8">
            <h2
              className="text-xl sm:text-2xl font-bold mb-4 text-center"
              data-aos="fade up"
            >
              Normal Class Schedule
            </h2>
            <div
              className="overflow-x-auto max-w-screen-lg mx-auto"
              data-aos="fade up"
            >
              <table className="table-auto w-full bg-white shadow-md rounded text-sm sm:text-base" data-aos="fade-in">
                <thead className="bg-red-500 text-white">
                  <tr>
                    <th className="py-2 sm:py-3 px-4">Day</th>
                    <th className="py-2 sm:py-3 px-4">Time</th>
                    <th className="py-2 sm:py-3 px-4">Class</th>
                    <th className="py-2 sm:py-3 px-4">Instructor</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      day: "Monday",
                      time: "8:00 AM",
                      class: "Yoga",
                      instructor: "Samson",
                    },
                    {
                      day: "Tuesday",
                      time: "9:00 AM",
                      class: "HIIT",
                      instructor: "Sarah",
                    },
                    {
                      day: "Wednesday",
                      time: "7:00 AM",
                      class: "Zumba",
                      instructor: "Grace",
                    },
                    {
                      day: "Thursday",
                      time: "6:00 PM",
                      class: "Spin Class",
                      instructor: "Mike",
                    },
                    {
                      day: "Friday",
                      time: "5:00 PM",
                      class: "Pilates",
                      instructor: "Bella",
                    },
                  ].map((schedule, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } hover:bg-gray-200`}
                    >
                      <td className="py-2 sm:py-3 px-4 text-center">
                        {schedule.day}
                      </td>
                      <td className="py-2 sm:py-3 px-4 text-center">
                        {schedule.time}
                      </td>
                      <td className="py-2 sm:py-3 px-4 text-center">
                        {schedule.class}
                      </td>
                      <td className="py-2 sm:py-3 px-4 text-center">
                        {schedule.instructor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Popular Gym Classes */}
          <div>
            <h2
              className="text-xl sm:text-2xl font-bold mb-4 text-center"
              data-aos="fade-in"
            >
              Popular Gym Classes
            </h2>
            <div className="overflow-x-auto max-w-screen-lg mx-auto">
              <table className="table-auto w-full bg-white shadow-md rounded text-sm sm:text-base" data-aos="fade-in">
                <thead className="bg-red-800 text-white">
                  <tr>
                    <th className="py-2 sm:py-3 px-4">Class</th>
                    <th className="py-2 sm:py-3 px-4">Description</th>
                    <th className="py-2 sm:py-3 px-4">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      class: "CrossFit",
                      description: "High-intensity strength training.",
                      time: "10:00 AM",
                    },
                    {
                      class: "Cardio Blast",
                      description: "Heart-pumping cardio exercises.",
                      time: "12:00 PM",
                    },
                    {
                      class: "Boxing",
                      description: "Learn boxing techniques and burn calories.",
                      time: "3:00 PM",
                    },
                    {
                      class: "Body Pump",
                      description: "Weight-based group fitness program.",
                      time: "4:00 PM",
                    },
                  ].map((schedule, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } hover:bg-gray-200`}
                    >
                      <td className="py-2 sm:py-3 px-4 text-center">
                        {schedule.class}
                      </td>
                      <td className="py-2 sm:py-3 px-4 text-center">
                        {schedule.description}
                      </td>
                      <td className="py-2 sm:py-3 px-4 text-center">
                        {schedule.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GymClass;
