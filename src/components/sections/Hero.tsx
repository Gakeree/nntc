import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { FaGraduationCap, FaDownload } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

// Import images properly
import slide1 from "../../assets/slide1.webp"
import slide2 from "../../assets/slide2.webp"
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";

// Array containing images and corresponding text
const slides = [
  { image: slide1, text: "Elevate your skills in beauty and applied sciences with innovative learning" },
  { image: slide2, text: "Discover hands-on training and expert guidance in your field" },
  { image: slide3, text: "Join a community of passionate learners and achievers today" },
  { image: slide4, text: "Join a community of passionate learners and achievers today" }
];

const Hero: React.FC = () => {
    return (
      
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
      {/* Image Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        // navigation
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image with Blur */}
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay Text & Button */}
              <div className="absolute inset-0 flex flex-col items-center  text-center px-6   bg-black/50  z-20">
              <h1 className=" text-white text-4xl md:text-6xl font-bold mt-12 text-center md:text-left leading-tight">{slide.text}</h1>
              <div className="flex flex-col md:flex-row gap-4 mt-6 sticky">
        {/* Enroll Now Button */}
        <NavLink to="/apply" className="flex items-center gap-2 px-6 py-3 bg-[#FFA500] text-white font-semibold uppercase rounded-md shadow-md hover:bg-[#FF8C00] transition">
          <FaGraduationCap />
          Enroll Now
        </NavLink>

        {/* Download Admission Letter Button */}
                  <a
                    href="/application_Form.pdf"
                    download="NNTC_Application_Letter.pdf"
                    className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-semibold uppercase rounded-md shadow-md hover:bg-yellow-600 transition">
          <FaDownload />
          Download Application  Letter
        </a>
      </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          </Swiper>
           
            </div>
            
  );
};

export default Hero;
