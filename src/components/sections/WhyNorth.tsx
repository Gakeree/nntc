import { FaAward, FaUsers, FaHandsHelping } from "react-icons/fa";
import React from "react";

export default function WhyNorth() {
  const features = [
    {
      icon: <FaAward className="text-red-500 text-4xl" />,
      title: "Accredited Programs",
      description:
        "Our programs are accredited, ensuring that you receive a high-quality education that meets industry standards.",
    },
    {
      icon: <FaUsers className="text-red-500 text-4xl" />,
      title: "Supportive Community",
      description:
        "Join a diverse and supportive community of students, alumni, and faculty who share your passion and commitment to excellence.",
    },
    {
      icon: <FaHandsHelping className="text-red-500 text-4xl" />,
      title: "Practical Experience",
      description:
        "From salon-style training spaces to hands-on experience in healthcare settings, our students gain real-world exposure.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Why Nyeri North Technical College?</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-2">
        Embark on a transformative educational journey where your aspirations in beauty and applied sciences come to life.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
            {/* <button className="mt-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500">
              LEARN MORE
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
}
