import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Need any support? Just call us or mail us, and we will help you with
          our dedicated services.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-green-500 text-4xl mb-2">&#9742;</div>
            <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-600">+91 xxxxxxxxxx</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-blue-500 text-4xl mb-2">&#9993;</div>
            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600">support@digineticai.in</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-indigo-500 text-4xl mb-2">&#127970;</div>
            <h3 className="text-lg font-semibold text-gray-800">Location</h3>
            <p className="text-gray-600">New Delhi - 110048</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Get In Touch!
            </h3>
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label className="block text-gray-700">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-gray-700">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-gray-700">Comments</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-purple-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="h-[100%] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155789.46275963902!2d-122.50460690308965!3d47.608828458506984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA%2C%20USA!5e1!3m2!1sen!2sin!4v1730263174560!5m2!1sen!2sin`}
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>

            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155789.46275963902!2d-122.50460690308965!3d47.608828458506984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA%2C%20USA!5e1!3m2!1sen!2sin!4v1730263174560!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
