import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact-us">
      <div className="py-6 bg-gray-50 min-h-[calc(100vh-80px)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>
            <hr className='w-1/12 m-auto border-2 border-primary'></hr>

            <p className="text-gray-600 mx-auto mt-6">
              Ready to transform your data into actionable insights? Let's discuss how we can help your business thrive.
            </p>
          </div>

          {/* <div className="grid md:grid-cols-2 gap-12">
          </div> */}
          <div className="bg-secondary w-6/12 m-auto rounded-lg shadow-lg p-8">
            <form className="space-y-2 text-white">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="Enter your fullname"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white mb-2">Company Name</label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-secondary py-3 rounded-lg transition-colors duration-300 font-semibold mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
