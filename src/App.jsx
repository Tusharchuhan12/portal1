import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Experience from "./Component/Experience";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  // WhatsApp details
  const phone = "918630116843"; // Change to your number
  const message = "Hello! I need more details.";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="relative bg-black min-h-screen">
      {/* Sections */}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

      {/* WhatsApp Floating Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition z-50"
      >
        <FaWhatsapp className="w-13 h-13 text-white" />
      </a>
    </div>
  );
}

export default App;
