import React from "react";
import "../Home.css";

function Clients() {
  return (
    <div className="w-full max-w-7xl bg-white p-8 rounded-lg shadow-lg mx-auto">
      <h2 className="text-2xl font-bold mb-10 ">OUR CLIENTS</h2>
      <div className="space-y-14 ">
        {/* First client testimonial */}
        <div className="bg-purple-100 max-w-5xl w-full p-8 rounded-lg shadow-lg mx-auto relative flex items-center">
          <div className="absolute top-0 transform -translate-y-1/2 right-2 bg-white px-3 py-1 rounded-full shadow-md text-sm font-semibold">
            Vanisha
          </div>
          <img
            style={{
              width: 165,
              height: 165,
              margin: 0,
              padding: 0,
              float: "left",
              left: -60,
            }}
            src="images/client1.jpg"
            alt="Client 1"
            className="rounded-full absolute clients-img"
          />
          <div
            style={{
              overflowY: "scroll",
              maxHeight: "100px",
              width: "100%",
              marginLeft: "120px",
            }}
          >
            <p className="text-lg">
            Hi, I am Vanisha Ahuja
            I would love to thank Krisha and Antara Ma’am and the team from @aprameya_in for helping 
            me with my Instagram growth. Your advice and tips have really boosted my followers and made 
            my post reach more people. My followers and reach is incredible now. 
            I appreciate all the support you have provided in giving content ideas and looking 
            forward to learning more from you.
            </p>
          </div>
        </div>

        {/* Second client testimonial */}
        <div className="bg-green-100 max-w-5xl w-full p-8 rounded-lg shadow-lg mx-auto relative flex items-center">
          <div className="absolute top-0 transform -translate-y-1/2 left-2 bg-white px-3 py-1 rounded-full shadow-md text-sm font-semibold">
            Palak Badlani
          </div>
          <img
            src="images/client2.jpg"
            alt="Client 2"
            className="w-24 h-24 rounded-full mr-6 absolute clients-img"
            style={{
              width: 160,
              height: 160,
              margin: 0,
              padding: 0,
              right: -60,
            }}
          />
          <div
            style={{
              overflowY: "scroll",
              maxHeight: "100px",
              marginRight: "130px",
              direction: "rtl",
            }}
          >
            <p
              style={{
                direction: "ltr",
              }}
              className="text-lg ml-5"
            >
              I would like to appreciate my manager from @aprameya_in and their team 
              for building my Instagram page. I was having 3883 followers when we started 
              working together and it's been only 20 days and I've gained 200+ followers, 
              and 5L+ accounts have reached my profile.
            </p>
          </div>
        </div>

        {/* Third client testimonial */}
        <div className="bg-gray-100 max-w-5xl w-full p-8 rounded-lg shadow-lg mx-auto relative flex items-center">
          <div className="absolute top-0 transform -translate-y-1/2 right-2 bg-white px-3 py-1 rounded-full shadow-md text-sm font-semibold">
           Piyaaa
          </div>
          <img
            src="images/client3.jpg"
            alt="Client 3"
            className="w-24 h-24 rounded-full absolute clients-img"
            style={{
              width: 165,
              height: 165,
              margin: 0,
              padding: 0,
              left: -60,
            }}
          />
          <div
            style={{
              overflowY: "scroll",
              maxHeight: "100px",
              width: "100%",
              marginLeft: "120px",
            }}
          >
            <p
              style={{
                direction: "ltr",
              }}
              className="text-lg"
            >
              Hello, I'm working with the agency called Aprameya and 
              the team is very nice and supports is very nice.
              We discuss about content ideas and we come up with ideas 
              which we post on Instagram and OMG my engagement is wow, 
              it's growing, like it is not stuck it's increasing. 
              And I love working with the team so yeah the vibe is matching.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
