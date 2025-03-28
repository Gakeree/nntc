import React, { useState } from "react";
import Modal from "react-modal";

// import images

// import image1 from "../../assets/1.jpg"
// import image2 from "../../assets/2.jpg"
// import image3 from "../../assets/3.jpg"
// import image4 from "../../assets/4.jpg"
// import image5 from "../../assets/5.jpg"
// import image6 from "../../assets/6.jpg"
// import image7 from "../../assets/7.jpg"
// import image8 from "../../assets/8.jpg"


// Sample gallery images
// const images = [
//   { src: image1 },
//   { src: image2 },
//   { src: image3 },
//   { src: image4 },
//   { src: image5 },
//   { src: image6 },
//   { src: image7 },
//   { src: image8 },
// ];

// // Set up modal styles
// Modal.setAppElement("#root");

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   return (
//     <section id="gallery" className="py-12 px-6 bg-gray-100">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6">Campus Gallery</h2>
//         <p className="text-gray-600 mb-6">Take a look at our campus and facilities.</p>
//       </div>

//       {/* Image Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
//         {images.map((image, index) => (
//           <div key={index} className="relative">
//             <img
//               src={image.src}
             
//               className="w-full h-auto rounded-lg cursor-pointer transition-transform transform hover:scale-105"
//               onClick={() => setSelectedImage(image.src)}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Image Modal for Fullscreen View */}
//       {selectedImage && (
//         <Modal
//           isOpen={true}
//           onRequestClose={() => setSelectedImage(null)}
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-6"
//           overlayClassName="fixed inset-0 bg-black bg-opacity-50"
//         >
//           <div className="relative">
//             <button
//               className="absolute top-3 right-3 text-white text-2xl font-bold"
//               onClick={() => setSelectedImage(null)}
//             >
//               ✖
//             </button>
//             <img src={selectedImage} alt="Expanded View" className="max-w-full max-h-screen rounded-lg" />
//           </div>
//         </Modal>
//       )}
//     </section>
//   );
// };

// export default Gallery
