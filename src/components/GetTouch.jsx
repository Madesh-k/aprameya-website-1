import React, { useState, useEffect } from "react";

function GetTouch() {
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [captchaValid, setCaptchaValid] = useState(true);

  const generateCaptcha = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    return captcha;
  };

  const handleCaptchaChange = (e) => {
    setInputCaptcha(e.target.value);
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setInputCaptcha("");
    setCaptchaValid(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputCaptcha === captcha) {
      setCaptchaValid(true);
      // Handle form submission
      console.log("Form submitted successfully");
    } else {
      setCaptchaValid(false);
    }
  };

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  return (
    <div
      id="getTouch"
      className="w-full max-w-7xl bg-blue-100 p-8 rounded-lg mx-auto m-8"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Join Our Community
        </h1>
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label
              className="block text-lg font-medium mb-2 text-gray-700"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-lg font-medium mb-2 text-gray-700"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-lg font-medium mb-2 text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="flex items-center">
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
               {/*<button
                type="button"
                className="ml-4 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-md shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send OTP
              </button> */}
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-lg font-medium mb-2 text-gray-700"
              htmlFor="phone"
            >
              Contact Phone
            </label>
            <div className="flex items-center">
              <input
                type="text"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your phone number"
              />
              {/* <button
                type="button"
                className="ml-4 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-md shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send OTP
              </button> */}
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-lg font-medium mb-2 text-gray-700"
              htmlFor="reason"
            >
              Reason for Joining
            </label>
            <textarea
              id="reason"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              rows="4"
              placeholder="Enter your reason for joining"
            ></textarea>
          </div>
          <div className="flex flex-col items-center mb-6">  
            <div className="flex items-center">
              <span className="ml-4 px-3 py-1.5 bg-gray-200 text-gray-700 text-sm rounded-md shadow-md">
                {captcha}
              </span>
              <button
                type="button"
                onClick={refreshCaptcha}
                className="ml-2 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-md shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Refresh
              </button>
            </div>
            <div className="pt-4">
            <input
                type="text"
                id="captcha"
                className={` px-4 py-3 border ${
                  captchaValid ? "border-gray-300" : "border-red-500"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                placeholder="Enter the captcha"
                value={inputCaptcha}
                onChange={handleCaptchaChange}
              />
              </div>
          </div>
          {!captchaValid && (
            <p className="text-red-500 text-sm mt-2 text-center">
              Captcha does not match. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-indigo-600 text-white text-lg rounded-md shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetTouch;
