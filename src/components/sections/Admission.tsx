import React from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Admission Process</h1>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">APPLICATION PROCEDURE</h2>
        <p><strong>HOW TO APPLY:</strong></p>
        <p>To gain general admission to do an Artisan, Certificate, Diploma or Advance Diploma Course at NNTC College, you must have successfully completed your Secondary Education qualification. Artisan Level Courses are open to everyone including Secondary School dropouts and KCPE Certificate holders.</p>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Step 1: Course Selection</h2>
        <p>NNTC College offers a wide range of courses ranging from Certificate, Diploma, and Advanced Diploma. Kindly visit our website's Courses section to find out  the various programs we offer. You will find the various courses we offer and select the one you wish to study.</p>
        <p>If you need help deciding on a course, we offer free career guidance. Just contact us, and someone will assist you in making an informed decision.</p>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Step 2: Entry Requirements</h2>
        <p>Ensure that you meet the minimum entry/admission requirements for your desired course. If you don't meet these requirements, we offer Artisan Level Courses that will qualify you to study at a higher level.</p>
        <p>Contact our admission office for grade requirements:</p>
        <ul className="text-red-600 list-disc pl-5">
          <li>0737 429222</li>

        </ul>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Step 3: Mode of Study</h2>
        <p>We offer Full-time, Part-time, Evening, and Online learning. Select the mode of study that suits you best.</p>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Step 4: Complete and Submit an Application Form</h2>
        <p>If you meet all the above requirements, you are now ready to complete the application form. Admission forms can be obtained from our admissions office or downloaded from our website.</p>
        <p>You can email the completed form to info@nyerinorthtechnical.co.ke or visit our campuses for registration.</p>
      </section>

      <section className="mb-8 p-6 bg-yellow-100 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Account Details</h2>
        <p><strong>Bank Account Details:</strong></p>
        <p>Account Name: NYERI NORTH TECHNICAL COLLEGE </p>
        <p>Account Number: 100595</p>
        <p>Paybill No: 247247</p>
        <p><strong>Fee Payment via M-Pesa</strong></p>
        <ol className="pl-5">
          <li>Go to Safaricom SIM Tool Kit</li>
          <li>Select M-PESA menu</li>
          <li>Select "Lipa Na M-PESA" and enter Paybill No: 247247</li>
          <li>Enter the account number: 100595</li>
          <li>Confirm and pay</li>
        </ol>
      </section>

      <div className="text-center">
        <Link to="/apply" className="mt-6 py-3 px-8 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition duration-200">
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default Admission;
