import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16" id="contact">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
        <form className="max-w-lg mx-auto flex flex-col">
          <input type="text" placeholder="Name" className="p-3 mb-5 border border-gray-300 rounded-md" />
          <input type="email" placeholder="Email" className="p-3 mb-5 border border-gray-300 rounded-md" />
          <textarea placeholder="Message" className="p-3 mb-5 border border-gray-300 rounded-md h-40"></textarea>
          <button type="submit" className="bg-blue-500 text-white py-3 px-8 text-lg rounded-md hover:bg-blue-600">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;