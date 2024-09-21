import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white dark:bg-darkBlue text-gray-800 dark:text-white py-16">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <p className="text-lg text-center mb-8">
          Whether you have a question, a project you want to discuss, or just want to say hi, feel free to reach out!
        </p>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-semibold mb-2">Your Message</label>
            <textarea
              id="message"
              rows="5"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="Enter your message"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 dark:bg-lightBlue text-white dark:text-black py-3 px-6 rounded-md font-semibold hover:bg-blue-600 dark:hover:bg-lightBlueHover transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 