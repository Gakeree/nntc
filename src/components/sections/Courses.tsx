import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaClock, FaMoneyBillWave, FaFileDownload, FaExclamationCircle } from "react-icons/fa";
import { schools, courses } from "../data/Coursesdata"; // ✅ Importing external data

export default function Courses() {
  const [activeSchool, setActiveSchool] = useState("business");
  const [selectedLevel, setSelectedLevel] = useState("certificate");

  return (
    <section id="courses" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Diverse Programs</h2>

        {/* School Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {schools.map((school) => (
            <button
              key={school.id}
              onClick={() => setActiveSchool(school.id)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105 ${activeSchool === school.id ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {school.name}
            </button>
          ))}
        </div>

        {/* Level Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          {["artisan", "certificate", "diploma"].map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all transform hover:scale-105 ${selectedLevel === level ? "bg-green-600 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>

        {/* Courses Display */}
        <motion.div
          key={`${activeSchool}-${selectedLevel}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses[activeSchool]?.[selectedLevel]?.length > 0 ? (
            courses[activeSchool][selectedLevel].map((course, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-800">{course.name}</h3>
                <p className="text-gray-600 mt-2">{course.description}</p>

                {/* Course Details */}
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-600" />
                    <span><strong>Duration:</strong> {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMoneyBillWave className="text-green-600" />
                    <span><strong>Fee:</strong> {course.fee}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBookOpen className="text-purple-600" />
                    <span><strong>Requirements:</strong> {course.requirements}</span>
                  </div>
                </div>

                {/* Apply & Brochure Buttons */}
                <div className="mt-6 flex justify-between">
                  <a
                    href="/apply"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all"
                  >
                    Apply Now
                  </a>
                  <a
                    href="/brochure.pdf"
                    download="College_Brochure.pdf"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                  >
                    <FaFileDownload />
                    Brochure
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center col-span-3 text-gray-500 mt-6">
              <FaExclamationCircle className="text-red-500 text-3xl mx-auto mb-2" />
              <p>No courses available for this level.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
