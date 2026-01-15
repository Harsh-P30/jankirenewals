import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "919990233861"; // Replace with your WhatsApp number (without +)
    const text = `
*Contact Us Form Submission*
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Mobile: ${formData.mobile}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
    `;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank"); // Opens WhatsApp
  };

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6 lg:p-16 p-6 gap-16 items-center bg-gray-100">
      {/* Google Map */}
      <div className="relative w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden">
        <iframe
          title="Janaki Renewable Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.375482132152!2d77.47097448170346!3d28.53303821469611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cebe01accd559%3A0xa76104b11c888d2a!2s116%2C%20Udyog%20Kendra%202%2C%20Ecotech%20III%2C%20Greater%20Noida%2C%20Tusyana%2C%20Uttar%20Pradesh%20201306!5e1!3m2!1sen!2sin!4v1752946145338!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl w-full mx-0 p-6 bg-white shadow-lg rounded-lg my-6 md:my-0 md:w-1/2">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium">Contact/Mobile:</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium">Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium">Your Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
