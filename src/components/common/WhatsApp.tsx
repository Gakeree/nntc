import { useState } from "react";
import React from "react";

const FloatingWhatsAppButton = () => {
  const phoneNumber = "254702578844";
  const [message, setMessage] = useState("Hello, I would like to get more information about the college.");

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-7 right-5 flex flex-col items-end">
      <select
        onChange={(e) => setMessage(e.target.value)}
        className="mb-2 p-2 border rounded-md  bg-white dark:bg-gray-800 dark:text-white"
      >
        <option value="Hello, I would like to get more information about the college.">
          General Inquiry
        </option>
        <option value="Hello, I am interested in applying to the college. Can you guide me through the admission process?">
          Admission Inquiry
        </option>
        <option value="Hello, I would like to know about the courses offered.">
          Course Inquiry
        </option>
        <option value="Hello, can you provide details on tuition fees and payment options?">
          Tuition Fees
        </option>
      </select>
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        📲 Chat with Us
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;
