import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row items-center mx-auto w-full  max-w-7xl bg-[#0D2736] shadow-lg"
    >
      <div className="lg:w-1/2 w-full flex items-center justify-center p-6">
        <img
          src="images/footer.jfif"
          alt="photo"
          style={{
            height: "460px",
            objectFit: "cover",
            width: "100%",
          }}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="lg:w-1/2 w-full p-8 bg-[#D9D9D9]">
        <form className=" p-6 rounded-lg">
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
              className="bg-[#0D2736] hover:bg-[#36A4E1] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
