import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const images = [
    {
      src: "images/image1.jpg",
      videoUrl: "https://www.youtube.com/embed/EhdiNkwW9Y4",
    },
    {
      src: "images/section1.png",
      videoUrl: "https://www.youtube.com/embed/6b2RMsFrUcg",
    },
    {
      src: "images/section2.jpg",
      videoUrl: "https://www.youtube.com/embed/U63zW7fUhJw",
    },
    {
      src: "images/section3.jpg",
      videoUrl: "https://www.youtube.com/embed/OMBd-qTOtwE",
    },
    {
      src: "images/section4.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  // Automatically change the image every 3 seconds when not playing a video
  useEffect(() => {
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, images.length]);

  const handleClick = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <div className="slider-container">
      <div className="slider-slide">
        {isPlaying ? (
          <div className="relative w-full h-full">
            <iframe
              width="100%"
              height="100%"
              src={images[currentIndex].videoUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube video"
            ></iframe>

            <button
              onClick={handleClose}
              className="absolute top-2 right-2 bg-red-600 text-white px-4 py-2 rounded-lg z-10"
            >
              Close
            </button>
          </div>
        ) : (
          <img
            src={images[currentIndex].src}
            alt={`slide-${currentIndex}`}
            className="slider-image w-full h-full object-cover"
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default function Section() {
  return (
    <div className="bg-gray-100 flex flex-col items-center py-12 mt-10">
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
          <div className="flex-1 w-full h-96">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}
