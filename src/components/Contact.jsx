import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row items-center bg-gray-100 mx-auto w-full max-w-7xl  rounded-lg shadow-lg"
    >
      <div className="lg:w-1/2 w-full flex items-center justify-center text-white p-8">
        <img
          src="images/image4.jpg"
          alt="photo"
          style={{
            height: "460px",
            objectFit: "cover",
            width: "100%",
          }}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="lg:w-1/2 w-full p-8">
        <form className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-center text-2xl font-bold mb-6">Contact Us</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone no
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Msg
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
