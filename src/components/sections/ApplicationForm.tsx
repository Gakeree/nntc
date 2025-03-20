import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";


const gradeToCourseLevels = {
  "A": ["Artisan", "Certificate", "Diploma"],
  "A-": ["Artisan", "Certificate", "Diploma"],
  "B+": ["Artisan", "Certificate", "Diploma"],
  "B": ["Artisan", "Certificate", "Diploma"],
  "B-": ["Artisan", "Certificate", "Diploma"],
  "C+": ["Artisan", "Certificate", "Diploma"],
  "C": ["Artisan", "Certificate", "Diploma"],
  "C-": ["Artisan", "Certificate", "Diploma"],
  "D+": ["Artisan", "Certificate"],
  "D": ["Artisan", "Certificate"],
  "D-": ["Artisan"],
  "E": ["Artisan"]
};

const availableCourses = {
  "Artisan": ["ICT", "Food and Bevearage", "Tourism", "Catering"],
  "Certificate": ["Business Management", "Sales and Marketing", "Human Resource", "C.A.M.S", "ICT", "Food and Bevearage", "Tourism", "Catering", "Cosmetology", "Beauty & Hair Dressing", "CareGiving", "Home Care Management", "Nursing Assistant"],
  "Diploma": ["Business Management", "Sales and Marketing", "Human Resource", "C.A.M.S", "ICT", "Food and Bevearage", "Tourism", "Catering", "Cosmetology", "Beauty & Hair Dressing"],

};




// Regex for email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Regex for phone number validation (example: allows only digits and assumes 10 digits are required)
const phoneRegex = /^\d{10}$/;

const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    idNumber: "",

    SecondarySchool: "",
    kcseGrade: "",

    preferredCourse: "",
    courseLevel: "Certificate",
    startDate: "",
    modeOfStudy: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "kcseGrade") {
      const allowedLevels = gradeToCourseLevels[value] || ["Certificate"];
      setFormData({
        ...formData,
        kcseGrade: value,
        courseLevel: allowedLevels[0],  // Set default level
        preferredCourse: availableCourses[allowedLevels[0]][0], // Default first course
      });
    }

    if (name === "courseLevel") {
      setFormData({
        ...formData,
        courseLevel: value,
        preferredCourse: availableCourses[value][0] || "",
      });
    }
  };

  const handleNext = () => {
    if (step === 1) {
      // Check if any required field in step 1 is empty
      if (!formData.firstName || !formData.middleName || !formData.lastName || !formData.nationality) {
        alert("Please fill out all fields before proceeding.");
        return;
      }
    }

    if (step === 2) {
      // Validate email and phone number
      if (!emailRegex.test(formData.email)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Please enter a valid email address.",
        }));
        return;
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      }

      if (!phoneRegex.test(formData.phoneNumber)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: "Please enter a valid 10-digit phone number.",
        }));
        return;
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: "" }));
      }

      // Check if any required field in step 2 is empty
      if (!formData.email || !formData.phoneNumber) {
        alert("Please fill out all required fields before proceeding.");
        return;
      }
    }

    if (step === 3) {
      // Check if any required field in step 3 is empty
      if (!formData.SecondarySchool || !formData.kcseGrade || !formData.preferredCourse || !formData.startDate || !formData.modeOfStudy) {
        alert("Please fill out all required fields before proceeding.");
        return;
      }
    }

    setStep((prev) => prev + 1);
  };




  const handlePrevious = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");

    // Reset the form data
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      nationality: "",
      idNumber: "",

      SecondarySchool: "",
      kcseGrade: "",
      preferredCourse: "",
      courseLevel: "Certificate",
      startDate: "",
      modeOfStudy: "",
    });

    // Optionally reset step to 1
    setStep(1);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className={`w-1/3 h-2 rounded-full ${step >= 1 ? "bg-red-600" : "bg-gray-300"}`} />
        <div className={`w-1/3 h-2 rounded-full ${step >= 2 ? "bg-yellow-500" : "bg-gray-300"}`} />
        <div className={`w-1/3 h-2 rounded-full ${step >= 3 ? "bg-green-600" : "bg-gray-300"}`} />
      </div>

      <h2 className="text-3xl font-bold text-center text-red-600 mb-4">NNTC Application FORM</h2>

      <form onSubmit={handleSubmit}>
        <motion.div
          key={step}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
        >
          {step === 1 && (
            <div>
              <h3 className="text-lg font-semibold mb-5 pb-4 text-yellow-600">Personal Information</h3>

              <label htmlFor="firstName" className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="First Name"
                className="border p-3 rounded-md w-full mb-3 focus:ring-2 focus:ring-red-600 bg-white dark:bg-gray-800 dark:text-white"
                onChange={handleChange}
                required
              />

              <label htmlFor="middleName" className="block text-gray-700">Middle Name</label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                placeholder="Middle Name"
                className="border p-3 rounded-md w-full mb-3 focus:ring-2 focus:ring-red-600 bg-white dark:bg-gray-800 dark:text-white"
                onChange={handleChange}
                required
              />

              <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="Last Name"
                className="border p-3 rounded-md w-full mb-3 focus:ring-2 focus:ring-red-600 bg-white dark:bg-gray-800 dark:text-white"
                onChange={handleChange}
                required
              />

              <label htmlFor="nationality" className="block text-gray-700">Nationality</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                placeholder="Nationality"
                className="border p-3 rounded-md w-full mb-3 focus:ring-2 focus:ring-red-600 bg-white dark:bg-gray-800 dark:text-white"
                onChange={handleChange}
                required
              />

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!formData.firstName || !formData.middleName || !formData.lastName || !formData.nationality}
                  className={`bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition ${!formData.firstName || !formData.middleName || !formData.lastName || !formData.nationality ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  Next
                </button>

              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-600">Contact & ID Details</h3>

              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                className="border p-3 rounded-md w-full mb-3 focus:ring-2 focus:ring-red-600 bg-white dark:bg-gray-800 dark:text-white"
                onChange={handleChange}
                required
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}

              <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                placeholder="0737429222"
                className="border p-3 rounded-md w-full mb-3 focus:ring-2 focus:ring-red-600 bg-white dark:bg-gray-800 dark:text-white"
                onChange={handleChange}
                required
              />
              {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}

              <label htmlFor="idNumber" className="block text-gray-700">ID Number</label>
              <input
                type="text"
                name="idNumber"
                value={formData.idNumber}
                placeholder="ID Number (if available)"
                className="border p-3 rounded-md w-full mb-3 focus:ring-2 focus:ring-red-600 bg-white dark:bg-gray-800 dark:text-white"
                onChange={handleChange}
              />

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!formData.email || !formData.phoneNumber}
                  className={`bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition ${!formData.email || !formData.phoneNumber ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  Next
                </button>

              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-600">Course Selection</h3>

              <label htmlFor="SecondarySchool" className="block text-gray-700">Secondary School Attended</label>
              <input
                type="text"
                name="SecondarySchool"
                value={formData.SecondarySchool}
                placeholder="Secondary School attended"
                className="border p-3 rounded-md w-full mb-3 focus:ring-2 focus:ring-red-600 bg-white dark:bg-gray-800 dark:text-white"
                onChange={handleChange}
                required
              />

              <label htmlFor="kcseGrade" className="block text-gray-700">KCSE Grade</label>
              <select
                name="kcseGrade"
                value={formData.kcseGrade}
                onChange={handleChange}
                className="border p-3 rounded-md w-full mb-3 focus:ring-2 focus:ring-red-600 bg-white dark:bg-gray-800 dark:text-white"
              >
                <option value="">Select Grade</option>
                {Object.keys(gradeToCourseLevels).map((grade) => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>


              <label htmlFor="preferredCourse" className="block text-gray-700">Preferred Course</label>
              <select
                name="preferredCourse"
                value={formData.preferredCourse}
                onChange={handleChange}
                className="border p-3 rounded-md w-full mb-3 focus:ring-2 focus:ring-red-600 bg-white dark:bg-gray-800 dark:text-white"
              >
                {availableCourses[formData.courseLevel]?.map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>


              <label htmlFor="courseLevel" className="block text-gray-700">Course Level</label>
              <select
                name="courseLevel"
                value={formData.courseLevel}
                onChange={handleChange}
                className="border p-3 rounded-md w-full mb-3 focus:ring-2 focus:ring-red-600 bg-white dark:bg-gray-800 dark:text-white"
              >
                {gradeToCourseLevels[formData.kcseGrade]?.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>

              <label htmlFor="startDate" className="block text-gray-700">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                className="border p-3 rounded-md w-full mb-3 focus:ring-2 focus:ring-red-600 bg-white dark:bg-gray-800 dark:text-white"
                onChange={handleChange}
                required
              />

              <label htmlFor="modeOfStudy" className="block text-gray-700">Mode of Study</label>
              <select
                name="modeOfStudy"
                value={formData.modeOfStudy}
               className="border p-3 rounded-md w-full mb-3 focus:ring-2 focus:ring-red-600 bg-white dark:bg-gray-800 dark:text-white"
                onChange={handleChange}
                required
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Online">Online</option>
              </select>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={
                    !formData.SecondarySchool ||
                    !formData.kcseGrade ||
                    !formData.preferredCourse ||
                    !formData.startDate ||
                    !formData.modeOfStudy
                  }
                  className={`bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition ${!formData.SecondarySchool ||
                    !formData.kcseGrade ||
                    !formData.preferredCourse ||
                    !formData.startDate ||
                    !formData.modeOfStudy
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                    }`}
                >
                  Submit
                </button>


              </div>
            </div>
          )}
        </motion.div>
      </form>
    </div>
  );
};

export default ApplicationForm;
