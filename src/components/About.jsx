import React from "react";

function About() {
  return (
    <div
      id="about"
      className="w-full max-w-7xl bg-blue-100 p-8 rounded-lg shadow-lg mx-auto mt-4"
    >
      <h2 className="text-2xl font-bold mb-6">KNOW ABOUT US</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 flex-1 relative">
            WHO ARE WE?
            <img
              src="images/logo.png"
              alt="logo"
              className="absolute right-0 bottom-1 transform translate-y-1 w-16 h-10 ml-4"
            />
          </h3>
          <div className="w-full h-80 mb-4">
            <img
              src="images/about1.jpg"
              alt="Who Are We"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <p>
            Aprameya is a personal branding agency dedicated to helping
            individuals build significant authentic ,and authorative personal
            brands.By leveraging psychological stratigies and theories in
            marketing , we empower our clients to create a compelling presence
            across warious platforms
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <h3 className="text-xl font-semibold mb-2 flex-1 relative">
              OUR VISION
              <img
                src="images/logo.png"
                alt="logo"
                className="absolute right-0 bottom-1 transform translate-y-1 w-16 h-10 ml-4"
              />
            </h3>
          </div>
          <div className="w-full h-80 mb-4">
            <img
              src="images/about2.jpg"
              alt="Our Vision"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <p>
            Our vision at Aprameya is to empower individual to build significant
            and authentic personal brand that resonate with their true selves
            and stand out in a competitive fields.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <h3 className="text-xl font-semibold mb-2 flex-1 relative">
              OUR MESSAGE
              <img
                src="images/logo.png"
                alt="logo"
                className="absolute right-0 bottom-1 transform translate-y-1 w-16 h-10 ml-4"
              />
            </h3>
          </div>
          <div className="w-full h-80 mb-4">
            <img
              src="images/about3.jpg"
              alt="Our Message"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <p>
            Aprameya is a personal branding firm focused on assisting
            individuals in creating impactful and authentic personal identities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
