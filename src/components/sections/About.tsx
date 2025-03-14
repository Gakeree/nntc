import React from "react";
import { FaGraduationCap, FaChalkboardTeacher, FaSchool } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="relative bg-gray-100 py-16 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">Nyeri North Technical College</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Nyeri North Technical College is a registered and accredited institution located in 
            Karatina Town, Postbank 3rd Floor, near Bestlady Mall. We offer a variety of courses 
            tailored to meet different career needs.
          </p>

          {/* Key Features */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <FaGraduationCap className="text-blue-600 text-3xl" />
              <p className="text-gray-700 font-medium">
                Flexible study durations: 1 month to 2 years.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaChalkboardTeacher className="text-purple-600 text-3xl" />
              <p className="text-gray-700 font-medium">
                Courses in Catering, Hospitality, ICT, Cosmetology & Accounting.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaSchool className="text-green-600 text-3xl" />
              <p className="text-gray-700 font-medium">
                Affordable tuition for each Program.
              </p>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="mt-6">
            <a
              href="/apply"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              Enroll Now
            </a>
          </div>
        </div>

        {/* Right: Video Embed */}
        <div className="flex justify-center">
          <iframe
            className="rounded-lg shadow-lg w-full md:w-[500px] h-[300px]"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Nyeri North Technical College Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
