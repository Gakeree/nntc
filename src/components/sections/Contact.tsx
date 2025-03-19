import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send email via EmailJS
    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        formData, // Sending form data (name, email, message)
        'YOUR_USER_ID' // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          setStatus('Message sent successfully!');
          setIsSubmitting(false);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div id="contact" className="bg-gray-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-green-400">Get in Touch</h2>
        <p className="text-gray-300 mb-8 text-lg">We'd love to hear from you! Reach out through any of these channels.</p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-green-400">Send us a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none transition"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none transition"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none transition h-32"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="animate-spin border-4 border-white border-t-transparent rounded-full w-5 h-5"></span>
              ) : 'Send Message'}
            </button>
          </form>
          {status && <p className="mt-4 text-center text-gray-300">{status}</p>}
        </div>

        {/* Contact Info */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
          <h3 className="text-2xl font-semibold text-green-700">Contact Details</h3>

          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-green-700 text-3xl"/>
            <span className="text-lg">Kibaki Street, Karatina Town</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-green-700 text-3xl"/>
            <span className="text-lg">0702578844</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-green-700 text-3xl" />
            <span className="text-lg">nyerinorthtech@gmail.com</span>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6 justify-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 text-3xl transition transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 text-3xl transition transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 text-3xl transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 text-3xl transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
