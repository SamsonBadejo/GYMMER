import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PT from "../../Assets/Personal training.jpg";
import GroupFitness from "../../Assets/Group fitness.jpg";
import StrengthTraining from "../../Assets/Strength Training.jpg";
import CardioFitness from "../../Assets/Cardio zone.jpg";
import Wellness from "../../Assets/Wellness and recovery services.jpg";
import Nutrition from "../../Assets/Nutritional Guidiance.jpg";

const Offer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (px) from the original trigger point
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalImage, setModalImage] = useState("");

  const handleCardClick = (content, image) => {
    setModalContent(content);
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const featureDetails = [
    {
      title: "Personal Training Programs",
      description:
        "Our personalized training programs are designed to meet individual fitness goals. Whether you're focusing on weight loss, muscle gain, or improving endurance, our expert trainers will create a program tailored to your needs.",
      image: PT,
    },
    {
      title: "Group Fitness Classes",
      description:
        "Join our high-energy group fitness classes that focus on building strength, endurance, and flexibility. Led by experienced instructors, these classes are designed to challenge all fitness levels.",
      image: GroupFitness,
    },
    {
      title: "Strength Training and Weightlifting",
      description:
        "Strength training and weightlifting are core components of any fitness journey. Our facility offers expert guidance to help you build muscle, improve bone density, and increase overall strength.",
      image: StrengthTraining,
    },
    {
      title: "Cardio Fitness Zone",
      description:
        "Our cardio fitness zone is designed to enhance cardiovascular health through various exercises. With state-of-the-art equipment, you'll improve your endurance while burning calories.",
      image: CardioFitness,
    },
    {
      title: "Wellness and Recovery Services",
      description:
        "Incorporating wellness and recovery into your fitness routine is essential for maintaining balance. Our services include stretching, massage therapy, and recovery techniques to help you feel your best.",
      image: Wellness,
    },
    {
      title: "Nutritional Guidance",
      description:
        "Our team offers personalized diet plans to complement your training program, ensuring you get the right balance of macronutrients and micronutrients for optimal performance.",
      image: Nutrition,
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {featureDetails.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={`${100 * index}`}
            onClick={() => handleCardClick(feature.description, feature.image)}
          >
            <div className="flex items-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-20 h-20 rounded-full mr-4 object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-red-600">{feature.title}</h3>
                <p className="mt-4 text-gray-800 text-sm">{feature.description.slice(0, 80)}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Prevent click event from closing modal
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-red-600">More Information</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center mb-4">
              <img
                src={modalImage}
                alt="Expanded"
                className="w-32 h-32 rounded-lg object-cover mr-6"
              />
              <p className="text-gray-600 text-sm">{modalContent}</p>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;
