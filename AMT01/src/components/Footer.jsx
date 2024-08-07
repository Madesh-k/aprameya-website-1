import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark-100 max-w-7xl w-full p-4 sm:p-8 rounded-lg shadow-lg mx-auto relative flex flex-col items-center">
      <div className="w-full max-w-screen-xl p-4">
        <div className="md:flex md:justify-between md:items-start">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <img
              src="images/logo.png"
              alt="APARMEYA Logo"
              style={{ height: "150px", width: "300px" }}
              className="object-contain mx-auto md:mx-0"
            />
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 text-center md:text-left">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Pages
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#home" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="mt-8 md:mt-0">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg dark:bg-gray-800 text-center md:text-left">
                <a href="">
                  <p className="mb-4 flex items-center justify-center md:justify-start">
                    <span className="inline-block w-6 h-6 mr-3 bg-gray-200 rounded-full flex items-center justify-center dark:bg-gray-700">
                      <svg
                        className="h-8 w-8 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    Location: Mumbai, Maharashtra
                  </p>
                </a>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <a
                    href="mailto:Aprameya.team@gmail.com"
                    className="flex items-center"
                  >
                    <span className="inline-block w-6 h-6 mr-3 bg-gray-200 rounded-full flex items-center justify-center dark:bg-gray-700">
                      <svg
                        className="h-8 w-8 text-red-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                      </svg>
                    </span>
                    Email: aprameya.team@gmail.com
                  </a>
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <span className="inline-block w-6 h-6 mr-3 bg-gray-200 rounded-full flex items-center justify-center dark:bg-gray-700">
                    <svg
                      className="h-8 w-8 text-red-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="9" />
                      <line x1="3.6" y1="9" x2="20.4" y2="9" />
                      <line x1="3.6" y1="15" x2="20.4" y2="15" />
                      <path d="M11.5 3a17 17 0 0 0 0 18" />
                      <path d="M12.5 3a17 17 0 0 1 0 18" />
                    </svg>
                  </span>
                  Website: www.yourwebsite.com
                </p>

                {/* Social Media Section */}
                <div className="flex justify-center space-x-6 mt-6">
                  <a
                    href="https://www.linkedin.com/company/aestheticmedia/"
                    aria-label="Find us on LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-12 h-12 text-gray-800 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                        clipRule="evenodd"
                      />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </a>

                  <a
                    href="https://x.com/aprameya"
                    aria-label="Find us on Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-8 h-12 text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-200"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.5,6.8l5.8-6.2h-1.4l-5,5.4l-4-5.4H0l6.2,8.2L0,15.5h1.4l5.4-5.9l4.4,5.9H16L9.5,6.8z M2.1,1.6h2.2l9.7,12.9h-2.2L2.1,1.6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/aprameya_in"
                    aria-label="Find us on Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-12 h-12 text-gray-800 dark:text-white hover:text-pink-600 dark:hover:text-pink-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-gray-500 dark:text-gray-400 font-medium text-center">
          © 2023 APRAMEYA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
