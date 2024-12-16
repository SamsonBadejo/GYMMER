import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image1 from "../../Assets/Hero 1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactInfo = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (px) from the original trigger point
    });
  }, []);

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "01c9df18-adcf-4818-a9cc-1be3cb4626a1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error:", data);
        setResult(data.message || "Submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="relative h-auto">
        <img
          src={Image1}
          className="absolute inset-0 object-cover w-full h-full"
          alt="Hero background"
        />
        <div className="relative py-16 bg-black bg-opacity-75 h-full">
          <div className="container flex flex-col flex-1 px-10 py-20 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              <div
                className="text-white lg:w-1/2 lg:mx-6"
                
              >
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                  We'd love to hear from you
                </h1>

                <p className="max-w-xl mt-6">
                  We are always open to hear from you. If you have any
                  questions, suggestions or feedback, please feel free to reach
                  out to us. We are always here to help you.
                </p>

                <a href="tel:+1234567890">
                  <button className="px-8 py-3 mt-6 animate-bounce text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50">
                    Call us
                  </button>
                </a>

                <div className="mt-6 md:mt-8">
                  <h3 className="text-gray-300">Follow us</h3>

                  <div className="flex mt-4 -mx-1.5">
                    <Link className="mx-1.5 text-white transition-colors duration-300 transform hover:text-red-500">
                      <svg
                        className="w-10 h-10 fill-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                      </svg>
                    </Link>

                    <Link className="mx-1.5 text-white transition-colors duration-300 transform hover:text-red-500">
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>

                    <Link className="mx-1.5 text-white transition-colors duration-300 transform hover:text-red-500">
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>

                   
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div
                className="w-full px-8 py-12 mt-12 rounded-md shadow-xl lg:w-1/2 lg:mt-0"
                
              >
                <h2 className="mb-5 text-3xl font-medium text-white">Get In Touch</h2>
                <form onSubmit={onSubmit}>
                  <div className="space-y-5">
                    <div className="space-y-1">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full p-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full p-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <textarea
                        name="message"
                        rows="4"
                        placeholder="Your Message"
                        required
                        className="w-full p-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <button
                        type="submit"
                        className="w-full py-3 px-6 text-white bg-red-500 hover:bg-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                <p className="mt-3 text-center text-gray-200">{result}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
