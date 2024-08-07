import React, { useState } from "react";

function Services() {
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = () => {
    setShowContent(!showContent);
  };

  return (
    <div
      id="services"
      className="w-full max-w-7xl bg-white p-8 rounded-lg shadow-lg mx-auto mt-10"
    >
      <h2 id="services" className="text-2xl font-bold mb-6">
        OUR SERVICE
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Personal Brand Strategy Development
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Comprehensive analysis of your current personal brand</li>
            <li>Identify your unique value proposition and target audience</li>
            <li>
              Developing a tailored branding strategy that aligns with your
              goals
            </li>
          </ul>
        </div>

        <div className="bg-[#F8E6E0] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Social Media Management
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Crafting and curating engaging content across Instagram, LinkedIn,
              Pinterest, more
            </li>
            <li>
              Leveraging trends and analytics to optimize social media
              performance
            </li>
            <li>
              Implementing a consistent posting schedule to maintain audience
              engagement
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 ">
          <img
            src="images/service1.png"
            alt="service"
            style={{ height: "250px" }}
            className="w-full h-21"
          />
        </div>
        <div className="bg-pink-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Content Creation and Curation
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Producing high-quality visuals, videos, and written content that
              align with your brand
            </li>
            <li>
              Developing a mix of motivating, knowledgeable, and entertaining
              content, including memes
            </li>
            <li>
              Collaborating with influencers and creators for unique content
            </li>
          </ul>
        </div>

        <div className="bg-purple-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Branding Workshops and Seminars
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Offering personalized workshops and seminars on personal branding
            </li>
            <li>
              Practical guidance on topics like audience identification, niche
              research, and content planning
            </li>
            <li>Interactive sessions to develop your branding skills</li>
          </ul>
        </div>
        {showContent && (
          <>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Reputation Management
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Monitoring and managing your online reputation.</li>
                <li>
                  Addressing negative feedback and enhancing positive
                  visibility.
                </li>
                <li>
                  Building and maintaining authority and authenticity in your
                  niche.
                </li>
              </ul>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Psychological Profiling and Persona Building
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Utilizing psychological principles to understand your
                  strengths and opportunities.
                </li>
                <li>
                  Creating a detailed persona that reflects your authentic self
                  and resonates with your audience.
                </li>
              </ul>
            </div>

            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Custom Branding Packages
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Tailored packages to meet your specific branding needs.</li>
                <li>
                  Flexible services ranging from basic brand setup to
                  comprehensive brand management.
                </li>
                <li>
                  Ongoing support and consultation to ensure long-term success.
                </li>
              </ul>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Audience Engagement and Growth
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Strategies to increase your follower base organically.</li>
                <li>
                  Engaging with your audience through comments, messages, and
                  interactive content.
                </li>
                <li>
                  Conducting audience research to tailor content and strategies
                  effectively.
                </li>
              </ul>
            </div>
            <div className="bg-red-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                LinkedIn Profile Optimization
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Creating a professional and impactful LinkedIn profile.</li>
                <li>
                  Developing content and engagement strategies for LinkedIn.
                </li>
                <li>
                  Enhancing visibility and connections within your industry.
                </li>
              </ul>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Collaboration and Networking
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Identifying and securing collaborations with relevant
                  influencers and brands.
                </li>
                <li>
                  Building a network of industry connections to enhance your
                  brand's reach.
                </li>
                <li>Strategizing and executing effective PR campaigns.</li>
              </ul>
            </div>
          </>
        )}

        <div className="bg-white p-6 flex items-center text-center justify-center">
          <button
            onClick={handleButtonClick}
            className="px-6 py-2 border border-black rounded-lg"
          >
            {showContent ? "Less" : "Know More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
