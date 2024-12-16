import React from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import Gallery1 from "../Assets/Gallery 1.jpg";
import Gallery2 from "../Assets/Gallery 2.jpg";
import Gallery3 from "../Assets/Gallery 3.jpg";
import Gallery4 from "../Assets/Gallery 4.jpg";
import Gallery5 from "../Assets/Gallery 5.jpg";
import Gallery6 from "../Assets/Gallery 6.jpg";
import Gallery7 from "../Assets/Gallery 7.jpg";

import { FaArrowDown } from "react-icons/fa";


const Gallery = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const images = [
    { src: Gallery1 },
    { src: Gallery2 },
    { src: Gallery3 },
    { src: Gallery4 },
    { src: Gallery5 },
    { src: Gallery6 },
    { src: Gallery7 },
    { src: Gallery1 },
    { src: Gallery2 },
    { src: Gallery3 },
    { src: Gallery4 },
    { src: Gallery5 },
    { src: Gallery6 },
    { src: Gallery7 },
    { src: Gallery1 },
    { src: Gallery2 },
    { src: Gallery3 },
    { src: Gallery4 },
    { src: Gallery5 },
    { src: Gallery6 },
    { src: Gallery7 },
    { src: Gallery1 },
    { src: Gallery2 },
    { src: Gallery3 },
  ];

  return (
    <div className="relative bg-black min-h-screen">
      {/* Background Section */}

      {/* Content Section */}
      <div className="px-4 py-16 mx-auto max-w-screen-xl text-white">
        {/* Title and Description */}
        <div className="text-center mb-12 mt-16">
          <h2 className="text-5xl font-bold text-red-500 mb-4 ">
            Explore Our Gallery
          </h2>
          <p className="text-sm text-gray-300 px-36 hidden sm:block">
            Welcome to our Gym Gallery, where strength meets inspiration.
            Explore a collection of powerful moments captured during intense
            workouts, fitness milestones, and transformations. Each image
            represents dedication, discipline, and the pursuit of personal
            growth. Get motivated and see the journey unfold. Scroll down to
            witness the grind!
          </p>
          
        </div>
        <div className="py-10 flex flex-col items-center animate-bounce">
                    <span className="text-white flex gap-5 text-xs sm:text-sm">
                      <FaArrowDown />
                      Scroll Down <FaArrowDown />
                    </span>
                    <i className="text-3xl sm:text-4xl text-red-500 fas fa-arrow-down"></i>
                  </div>

        {/* Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              data-aos="zoom-in"
            >
              <img
                className="object-cover w-full h-72 rounded-lg transition-transform duration-500 group-hover:scale-110"
                src={image.src}
                alt={`Gallery ${index + 1}`}
              />
              {/* Hover Effect: Overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              {/* Hover Effect: Text */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg font-semibold text-white">
                  Image {index + 1}
                </p>
              </div>
              {/* Border Effect */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-white transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
