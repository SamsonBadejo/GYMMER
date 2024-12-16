import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Testimonials.css";

// Importing images from assets
import Image1 from "../../Assets/Gallery 1.jpg";
import Image2 from "../../Assets/Gallery 2.jpg";
import Image3 from "../../Assets/Gallery 3.jpg";
import Image4 from "../../Assets/Gallery 4.jpg";
import Image5 from "../../Assets/Gallery 5.jpg";
import Image6 from "../../Assets/Gallery 6.jpg";
import Image7 from "../../Assets/Gallery 1.jpg";
import Image8 from "../../Assets/Gallery 7.jpg";

const Testimonials = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set duration for animation
      offset: 100, // Set offset
    });
  }, []);

  // Testimonial data
  const testimonials = [
    {
      image: Image1,
      name: "John Doe",
      position: "Fitness Instructor",
      quote:
        "The best gym experience I've had! The trainers are incredibly knowledgeable and helpful.",
    },
    {
      image: Image2,
      name: "Jane Smith",
      position: "Yoga Instructor",
      quote:
        "GYMMER has an amazing environment. It feels like a community where everyone supports each other.",
    },
    {
      image: Image3,
      name: "Mark Lee",
      position: "Strength Coach",
      quote:
        "I’ve learned so much in just a few sessions. The team here is outstanding and supportive.",
    },
    {
      image: Image4,
      name: "Lucy King",
      position: "Personal Trainer",
      quote:
        "Excellent training methods and highly supportive staff! I feel stronger every day.",
    },
    {
      image: Image5,
      name: "Chris Black",
      position: "Gym Trainer",
      quote:
        "Great energy and amazing trainers! You’re always pushed to do your best here.",
    },
    {
      image: Image6,
      name: "Nina Gray",
      position: "Cardio Specialist",
      quote:
        "This gym is more than just a place to work out; it’s a space for personal growth.",
    },
    {
      image: Image7,
      name: "Oliver White",
      position: "Wellness Coach",
      quote:
        "My fitness journey has truly changed since joining GYMMER. I highly recommend the trainers!",
    },
    {
      image: Image8,
      name: "Emma Green",
      position: "Pilates Instructor",
      quote:
        "Highly professional trainers that are focused on helping you achieve your goals.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container px-6 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl mb-6">
          What our <span className="text-red-500">clients</span> say
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-600 mb-8">
          Our clients rave about their experiences with GYMMER's expert
          trainers. Here's what they have to say!
        </p>

        {/* Infinite Scroll Container with restricted width */}
        <div className="testimonials-container">
          <div className="testimonial-items-wrapper animate-marquee">
            {/* First set of Testimonials */}
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-item" key={index}>
                <p className="leading-loose text-black mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    className="object-cover rounded-full w-16 h-16"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="mx-4">
                    <h1 className="font-semibold text-red-500">
                      {testimonial.name}
                    </h1>
                    <span className="text-sm text-gray-800">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Second set of Testimonials */}
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-item" key={`duplicate-${index}`}>
                <p className="leading-loose text-black mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    className="object-cover rounded-full w-16 h-16"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="mx-4">
                    <h1 className="font-semibold text-red-500">
                      {testimonial.name}
                    </h1>
                    <span className="text-sm text-gray-800">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
