import React from 'react';
import { FaInstagram, FaWhatsapp, FaGoogle, FaTwitter, FaFacebook } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex justify-center space-x-6 p-4">
      {/* Gmail Link */}
      <a
        href="mailto:zwitsam8@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-gray-600 hover:text-red-500 transition duration-300"
      >
        <FaGoogle />
      </a>

      {/* WhatsApp Link */}
      <a
        href="https://wa.me/2348109514251"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-gray-600 hover:text-green-500 transition duration-300"
      >
        <FaWhatsapp />
      </a>

      {/* Instagram Link */}
      <a
        href="https://www.instagram.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-gray-600 hover:text-pink-500 transition duration-300"
      >
        <FaInstagram />
      </a>

      {/* Twitter Link */}
      <a
        href="https://twitter.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-gray-600 hover:text-blue-500 transition duration-300"
      >
        <FaTwitter />
      </a>

      {/* Facebook Link */}
      <a
        href="https://www.facebook.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-gray-600 hover:text-blue-600 transition duration-300"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default SocialIcons;
