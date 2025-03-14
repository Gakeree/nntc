import React, { useState } from "react";
import Modal from "react-modal";

// Sample gallery images
const images = [
  { src: "https://via.placeholder.com/300x200?text=Campus+Building", alt: "Campus Building" },
  { src: "https://via.placeholder.com/300x200?text=Library", alt: "Library" },
  { src: "https://via.placeholder.com/300x200?text=Computer+Lab", alt: "Computer Lab" },
  { src: "https://via.placeholder.com/300x200?text=Sports+Complex", alt: "Sports Complex" },
  { src: "https://via.placeholder.com/300x200?text=Lecture+Hall", alt: "Lecture Hall" },
  { src: "https://via.placeholder.com/300x200?text=Hostels", alt: "Hostels" },
];

// Set up modal styles
Modal.setAppElement("#root");

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-12 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Campus Gallery</h2>
        <p className="text-gray-600 mb-6">Take a look at our campus and facilities.</p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => setSelectedImage(image.src)}
            />
          </div>
        ))}
      </div>

      {/* Image Modal for Fullscreen View */}
      {selectedImage && (
        <Modal
          isOpen={true}
          onRequestClose={() => setSelectedImage(null)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-6"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="relative">
            <button
              className="absolute top-3 right-3 text-white text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <img src={selectedImage} alt="Expanded View" className="max-w-full max-h-screen rounded-lg" />
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Gallery;
