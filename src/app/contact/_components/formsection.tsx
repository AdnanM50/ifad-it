'use client';

import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 container py-12">
      {/* Left Form Section */}
      <div className="bg-white rounded-lg p-6  lg:w-[70%] ">
        <h2 className="text-xl font-bold mb-2">Send Us Message</h2>
        <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you shortly.</p>
        
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Type your name"
              className="w-full px-3 py-2 border border-gray-200 rounded-md bg-[#F6F7F8] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Type your phone number"
                className="w-full px-3 py-2 border border-gray-200 bg-[#F6F7F8] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Type your email address"
                className="w-full px-3 py-2 border border-gray-200 bg-[#F6F7F8] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-200 bg-[#F6F7F8] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      
      {/* Right Contact Info Section */}
      <div className="w-full ">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            IPAD Information & Technology Limited has been delivering innovative IT solutions across Bangladesh since 2015. Whether you're planning a new project or need expert consultation, our team is ready to help you succeed.
          </p>
        </div>
        
        {/* Contact Details */}
        <div className="space-y-4 mb-8">
          {/* Office Address */}
          <div className="flex items-start">
            <div className="bg-orange-100 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L7 11H5v2a7 7 0 01-1.95-13.75z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Office Address</h3>
              <p className="text-sm text-gray-600">IPAD Tower, Plot 7(new), Tejgaon Industrial Area, Dhaka-1208</p>
            </div>
          </div>
          
          {/* Phone */}
          <div className="flex items-start">
            <div className="bg-orange-100 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l1.42 6.077A1 1 0 019 13h2a1 1 0 011 1v4a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011-1H9M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l1.42 6.077A1 1 0 019 13h2a1 1 0 011 1v4a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011-1H9M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l1.42 6.077A1 1 0 019 13h2a1 1 0 011 1v4a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011-1H9" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-sm text-gray-600">Phone: 09612114444</p>
            </div>
          </div>
          
          {/* Email */}
          <div className="flex items-start">
            <div className="bg-orange-100 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0018 4.882V4.882c0-.56-.478-.982-1.005-1.005C16.07 3.765 15.04 3.5 14 3.5H6C4.96 3.5 3.93 3.765 3.005 3.882C1.98 3.995 1 4.317 1 4.882v.118c0 .56.478.982 1.005 1.005zm3.004 0v1.005c0 .56.478.982 1.005 1.005C7.07 8.765 8.04 9 9 9h2c.96 0 1.93.235 2.905.352 0 .56.478.982 1.005 1.005C16.07 10.765 17.04 11 18 11v1.005c0 .56-.478.982-1.005 1.005C16.07 13.765 15.04 14 14 14H6C4.96 14 3.93 13.765 3.005 13.648c-.527-.023-1.005-.445-1.005-1.005V11.648c0-.56.478-.982 1.005-1.005C3.93 10.235 4.96 10 6 10h2c.96 0 1.93-.235 2.905-.352C11.96 9.548 12.93 9 14 9H6C4.96 9 3.93 9.235 3.005 9.352c-.527.023-1.005.445-1.005 1.005v1.005z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Email Us</h3>
              <p className="text-sm text-gray-600">contact@ipadgroup.com</p>
            </div>
          </div>
        </div>
        
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Our Social Media</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.991 4.388 10.954 10.125 11.854v-8.384H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849v.084c0 3.205-.012 3.584-.07 4.85-1.488 3.232-3.998 4.876-4.919 4.919-1.266.057-1.645.069-4.85.069h-.084c-3.204 0-3.584-.012-4.849-.069-3.232-1.488-4.876-3.998-4.919-4.919-.057-1.266-.069-1.645-.069-4.85v-.084c0-3.204.012-3.584.069-4.849 1.488-3.232 3.998-4.876 4.919-4.919.057-.057 1.645-.069 4.849-.069h.084zm0-2.163c-3.259 0-5.517 1.643-6.591 2.683-1.362 1.334-2.194 3.227-2.342 5.178-.046 1.328-.046 2.676 0 4.004.148 1.951 1.002 3.828 2.342 5.178 1.074 1.04 3.332 2.683 6.591 2.683 3.259 0 5.517-1.643 6.591-2.683 1.362-1.334 2.194-3.227 2.342-5.178.046-1.328.046-2.676 0-4.004-.148-1.951-1.002-3.828-2.342-5.178-1.074-1.04-3.332-2.683-6.591-2.683zM12 16.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zm0-1.5c2.67 0 5.5 1.23 5.5 2.5 0 1.27-2.83 2.5-5.5 2.5s-5.5-1.23-5.5-2.5c0-1.27 2.83-2.5 5.5-2.5z"/>
              </svg>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 00-1.927-5.926A10 10 0 003.58 6.66C3.317 7.783 2.618 8.825 1.6 9.725a10 10 0 0014.577 14.577c1.1-.99 2.143-1.87 3.127-2.687a10 10 0 001.608-16.202 10 10 0 00-1.608-1.608zm-10.587 16.15c-3.273 0-5.927-2.654-5.927-5.927s2.654-5.927 5.927-5.927 5.927 2.654 5.927 5.927-2.654 5.927-5.927 5.927zm6.273-13.71c-1.513 0-2.745-1.232-2.745-2.745s1.232-2.745 2.745-2.745 2.745 1.232 2.745 2.745-1.232 2.745-2.745 2.745z"/>
              </svg>
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.55v-5.895c0-1.418-.034-3.236-1.975-3.236-1.975 0-2.276 1.538-2.276 3.142v5.989h-3.55V8.887h3.414v1.646h.05c1.168-1.884 3.012-2.93 5.068-2.93 5.445 0 6.47 3.575 6.47 8.245v6.684zM6.643 8.887c-1.118 0-2.028-.91-2.028-2.028 0-1.118.91-2.028 2.028-2.028 1.118 0 2.028.91 2.028 2.028 0 1.118-.91 2.028-2.028 2.028zm0-5.895c-1.633 0-2.954-1.321-2.954-2.954S5.01 0 6.643 0s2.954 1.321 2.954 2.954-1.321 2.954-2.954 2.954z"/>
              </svg>
            </a>
            <a href="#" className="text-red-600 hover:text-red-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111 1.021-.236 1.021-.577v-2.08c-3.287.74-3.982-1.478-3.982-1.478-.537-1.373-1.307-1.742-1.307-1.742-1.067-.734.083-.72.083-.72 1.185.087 1.799.872 1.799.872 1.06 1.832 2.776 1.305 3.472.995.109-.776.419-1.305.762-1.605-2.665-.305-5.467-1.335-5.467-5.931 0-1.31.469-2.382 1.236-3.223-.124-.303-.537-1.524.117-3.176 0 0 1.008-.322 3.302 1.23.956-.262 1.983-.397 3.008-.397 1.025 0 2.052.135 3.008.397 2.294-1.552 3.302-1.23 3.302-1.23.654 1.652.241 2.873.117 3.176.767.841 1.236 1.913 1.236 3.223 0 4.609-2.807 5.625-5.479 5.92.43.372.823.883.823 1.795 0 1.293-.012 2.339-.012 2.66v2.08c0 .341.422.687 1.021.577C18.562 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849v.084c0 3.205-.012 3.584-.07 4.85-1.488 3.232-3.998 4.876-4.919 4.919-1.266.057-1.645.069-4.85.069h-.084c-3.204 0-3.584-.012-4.849-.069-3.232-1.488-4.876-3.998-4.919-4.919-.057-1.266-.069-1.645-.069-4.85v-.084c0-3.204.012-3.584.069-4.849 1.488-3.232 3.998-4.876 4.919-4.919.057-.057 1.645-.069 4.849-.069h.084zm0-2.163c-3.259 0-5.517 1.643-6.591 2.683-1.362 1.334-2.194 3.227-2.342 5.178-.046 1.328-.046 2.676 0 4.004.148 1.951 1.002 3.828 2.342 5.178 1.074 1.04 3.332 2.683 6.591 2.683 3.259 0 5.517-1.643 6.591-2.683 1.362-1.334 2.194-3.227 2.342-5.178.046-1.328.046-2.676 0-4.004-.148-1.951-1.002-3.828-2.342-5.178-1.074-1.04-3.332-2.683-6.591-2.683zM12 16.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zm0-1.5c2.67 0 5.5 1.23 5.5 2.5 0 1.27-2.83 2.5-5.5 2.5s-5.5-1.23-5.5-2.5c0-1.27 2.83-2.5 5.5-2.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;