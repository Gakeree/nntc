import React, { useState } from 'react';
// Import FontAwesome icons
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  const [email, setEmail] = useState('');

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = () => {
    // Add email subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <div className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* College Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-500">Nyeri North Technical College</h3>
            <p className="text-gray-400">Dare to dream</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600">Quick Links</h3>
            <ul>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer hover:text-green-600">Home</button></li>
              <li><button onClick={() => scrollToSection('admission')} className="cursor-pointer hover:text-white text-gray-400">Admission & College Life</button></li>
              <li><button onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-white text-gray-400">About Us</button></li>
              <li><button onClick={() => scrollToSection('courses')} className="cursor-pointer hover:text-white text-gray-400">Courses</button></li>
              <li><button onClick={() => scrollToSection('gallery')} className="cursor-pointer hover:text-white text-gray-400">Gallery</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-white text-gray-400">Contact Us</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-600">Contact Info</h3>
            <p className="text-gray-400">Nyeri North Technical College, Karatina, Nyeri</p>
            <p className="text-gray-400">nyerinorthtech@gmail.com</p>
            <p className="text-gray-400">Phone: 0702578844</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-500">Follow Us</h3>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-yellow-500">
              <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
              <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
              <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
              <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

        </div>

        {/* Subscribe Section */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 text-green-600">Subscribe to our Newsletter</h3>
          <div className="flex items-center justify-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 w-72 text-black rounded-lg focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-400"
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Nyeri North Technical College. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
