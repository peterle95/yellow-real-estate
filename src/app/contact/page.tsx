import React from 'react';

const ContactPage = () => {
  return (
    <div className="container-custom py-16">
      <h1 className="text-3xl font-heading font-bold mb-6">Contact Us</h1>
      <p className="mb-4">We would love to hear from you! Please fill out the form below:</p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required></textarea>
        </div>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
