import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import React from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-10 p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
}
    
    // The  ScrollToTopButton  component is a functional component that uses the  useState  and  useEffect  hooks to manage the visibility of the button. The  isVisible  state is used to determine whether the button should be visible or not. 
    // The  useEffect  hook is used to add an event listener to the  scroll  event on the window object. When the user scrolls down the page, the  toggleVisibility  function is called, which updates the  isVisible  state based on the current scroll position. 
    // The  scrollToTop  function is called when the button is clicked, which scrolls the window to the top of the page using the  scrollTo  method with the  behavior  option set to  smooth . 
    // The button is rendered with a click event handler that calls the  scrollToTop  function when clicked. The button is styled using Tailwind CSS classes to position it at the bottom right corner of the screen and to provide a hover effect. The opacity of the button is set based on the  isVisible  state, so it fades in and out as the user scrolls up and down the page. 
    // Step 3: Import the ScrollToTopButton Component 
    // Now that we have created the  ScrollToTopButton  component, we can import it into the  App  component and render it at the top level of the application.