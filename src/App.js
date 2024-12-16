import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import RootLayout from "./components/RootLayout";
import Pricing from "./Pages/Pricing";
import Membership from "./Pages/Membership";
import Gallery from "./Pages/Gallery";
import GymClass from "./Pages/GymClass";

const App = () => {

  useEffect(() => {
    // Add a global event listener to handle <a> clicks
    const handleAnchorClick = (event) => {
      const target = event.target;

      // Check if the clicked element is an <a> tag with an href attribute
      if (target.tagName === "A" && target.getAttribute("href")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // Attach the listener to the document
    document.addEventListener("click", handleAnchorClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);


  return (
    <Routes>
      {/* RootLayout wraps all child routes */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} /> {/* Home renders at "/" */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="price" element={<Pricing />} />
        <Route path="membership" element={<Membership />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="classes" element={<GymClass />} />

      </Route>
    </Routes>
  );
};

export default App;
