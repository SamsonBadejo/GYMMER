import React, { useState } from "react";
import {
  FaGoogle,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12">
      <div className="container px-6 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-black mb-6">
          Have Questions? We're Here to Help!
        </h1>

        <div className="lg:flex lg:space-x-12">
          {/* FAQ Column */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div>
                <button
                  className="w-full text-left text-lg font-medium text-black hover:text-red-500 focus:outline-none"
                  onClick={() => toggleAccordion(0)}
                >
                  What are your opening hours?
                </button>
                {activeIndex === 0 && (
                  <p className="text-gray-600 mt-2">
                    Our gym is open from 8 AM to 6 PM, Monday to Saturday. We
                    are closed on Sundays.
                  </p>
                )}
              </div>

              {/* FAQ 2 */}
              <div>
                <button
                  className="w-full text-left text-lg font-medium text-black hover:text-red-500 focus:outline-none"
                  onClick={() => toggleAccordion(1)}
                >
                  Do you offer private classes?
                </button>
                {activeIndex === 1 && (
                  <p className="text-gray-600 mt-2">
                    Yes, we offer private classes upon request. Please contact
                    us for more details about pricing and availability.
                  </p>
                )}
              </div>

              {/* FAQ 3 */}
              <div>
                <button
                  className="w-full text-left text-lg font-medium text-black hover:text-red-500 focus:outline-none"
                  onClick={() => toggleAccordion(2)}
                >
                  Is there a refund policy?
                </button>
                {activeIndex === 2 && (
                  <p className="text-gray-600 mt-2">
                    We do not offer a refund policy. Please ensure you're ready
                    before booking.
                  </p>
                )}
              </div>

              {/* FAQ 4 */}
              <div>
                <button
                  className="w-full text-left text-lg font-medium text-black hover:text-red-500 focus:outline-none"
                  onClick={() => toggleAccordion(3)}
                >
                  How can I contact you for further questions?
                </button>
                {activeIndex === 3 && (
                  <p className="text-gray-600 mt-2">
                    You can reach us through the contact form above or via our
                    social media channels below.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Social Links Column */}
          <div className="flex-1 mt-8 lg:mt-0">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              Connect with Us
            </h2>
            <p className="text-gray-600 mb-4">
              Have more questions? You can reach out to us on any of our
              platforms.
            </p>
            <div className="space-y-4">
              {/* Social Links */}
              <div className="flex  space-x-6 py-4">
                {/* Gmail Link */}
                <a
                  href="mailto:zwitsam8@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-600 hover:text-red-500 transition duration-300"
                >
                  <FaGoogle />
                </a>

                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/2348109514251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-600 hover:text-green-500 transition duration-300"
                >
                  <FaWhatsapp />
                </a>

                {/* Instagram Link */}
                <a
                  href="https://www.instagram.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-600 hover:text-pink-500 transition duration-300"
                >
                  <FaInstagram />
                </a>

                {/* Twitter Link */}
                <a
                  href="https://twitter.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-600 hover:text-blue-500 transition duration-300"
                >
                  <FaTwitter />
                </a>

                {/* Facebook Link */}
                <a
                  href="https://www.facebook.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-lg">
            GYMMER - Your Fitness Journey Starts Here. All prices are fixed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
