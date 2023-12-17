import React, { useState } from 'react';
import call from "./img/call.jpg";
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'https://formspree.io/f/myyqrvvk', 
        formData
      );

      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='bg-gray-300'>
    <div className="flex md:flex-row flex-col items-center justify-center min-h-screen py-5 ">
      <img
        src={call} 
        alt="Person Calling"
        className="md:w-1/3 w-1/2 rounded-full shadow-lg mb-12 md:mb-0 mr-8"
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-md shadow-md md:w-1/3 w-[73%]"
      >
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </label>

        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </label>

        <label className="block mb-2">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border p-2 rounded-md"
          ></textarea>
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>

    </div>
  );
};

export default Form;
