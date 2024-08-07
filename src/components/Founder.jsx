import React from "react";

function Founder() {
  return (
    <section>
      <div className="w-full max-w-7xl bg-white p-8 rounded-lg shadow-lg mx-auto">
        <h2 className="text-2xl font-bold mb-10 ">Our Founder</h2>
        <div className="space-y-8 ">
          {/* First client testimonial */}
          <div className="bg-purple-100 max-w-5xl w-full p-8 rounded-lg shadow-lg mx-auto relative flex items-center">
            <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full shadow-md text-sm font-semibold">
              Founder
            </div>
            <img
              style={{
                width: 200,
                height: 200,
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
                I would love to thank Krisha and Antara Ma'am and the team from
                @aprameya_in for helping me with my Instagram growth. Your
                advice and tips have really boosted my followers and made my
                post reach more people. My followers and reach is incredible
                now. I appreciate all the support you have provided in giving
                content ideas and looking forward to learning more from you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
