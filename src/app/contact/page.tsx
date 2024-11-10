
'use client';

import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 text-white py-16">
      <div className="max-w-lg w-full px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Contact Me</h1>

        {/* Contact Form */}
        <form className="bg-white text-gray-900 rounded-lg p-8 shadow-lg">
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows={5}
              placeholder="Your message"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-600 transition duration-300"
              disabled
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
