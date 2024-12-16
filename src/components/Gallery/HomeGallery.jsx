import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import Gallery1 from "../../Assets/Gallery 1.jpg";
import Gallery2 from "../../Assets/Gallery 2.jpg";
import Gallery3 from "../../Assets/Gallery 3.jpg";
import Gallery4 from "../../Assets/Gallery 4.jpg";

const HomeGallery = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Images array using imported gallery images
  const images = [
    { src: Gallery1 },
    { src: Gallery2 },
    { src: Gallery3 },
    { src: Gallery4 },

  ];

  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl">
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
      <div className="text-center mt-8">
        <Link
          to="/gallery"
          className="px-6 py-2 text-white bg-red-500 rounded hover:bg-red-700 transition"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default HomeGallery;
