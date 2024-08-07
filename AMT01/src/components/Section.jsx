import React from "react";

export default function Section() {
  return (
    <div className=" bg-gray-100 flex flex-col items-center py-12">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 p-8">
            <h1 className="text-4xl font-bold mb-4">
              APRAMEYA PERSONAL BRANDING
            </h1>
            <p className="text-lg mb-6">
              From Identity To Legacy, We Grow Together
            </p>
            <div className="flex space-x-4">
              <img
                src="images/image2.png"
                alt="Image 2"
                className="rounded-lg w-24 h-24 object-cover"
              />
              <img
                src="images/image3.jpg"
                alt="Image 3"
                className="rounded-lg w-24 h-24 object-cover"
              />
              <img
                src="images/image4.jpg"
                alt="Image 4"
                className="rounded-lg w-24 h-24 object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <img
              src="images/image1.png"
              alt="image-1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
