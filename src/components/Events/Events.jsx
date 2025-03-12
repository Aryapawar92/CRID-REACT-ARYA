import React from "react";
import Footer from "./../Footer/Footer.jsx";

const eventsData = [
  {
    id: 1,
    title: "Valedictory",
    //date: "12th January, 2024",
    description:
      "CRID's valedictory ceremony was held on 7th August 2024 at RGIT, celebrating a year of dedication and success. The event featured heartfelt speeches, awards, and recognition for committee members. Outgoing team members shared their experiences and wisdom, passing the baton to new inductees. The ceremony ended on a high note, looking forward to CRID's new journey ahead ⭐.",
  },
  {
    id: 2,
    title: "Future in AI",
    //date: "12th January, 2024",
    description:
      'CRID organized an insightful seminar on "THE FUTURE IN AI" on 12th August 2024. Guest speaker Mr. BIBEK NAYAK, an AI expert, shared his insights on the evolving roles of AI across industries. He discussed the effects, challenges, and possibilities of AI, sparking valuable discussions and debates. Participants left with new knowledge on recent AI developments and associated ethics. The event was a huge success, inspiring students to explore AI career opportunities 🚀.',
  },
  {
    id: 3,
    title: "DATA SCIENCE & BLOCKCHAIN",
    description:
      "Insightful seminar on Data Science,delving into the latest trends, tools,and applications in the field and Blockchain Application Development werealso held, allowing students to explorenew technologies and develop expertise in these rapidly evolving fields.",
  },
  {
    id: 4,
    title: "TECH FIESTA",
    description:
      "An event that provided a platform for students to showcase their innovative project ideas and start up pitches.This event encouraged creativity and entrepreneurship, offering participants the opportunity to present their concepts to a broader audience and receive valuable feedback from experts in the field.",
  },
  {
    id: 5,
    title: "ANVAY",
    description:
      "Anvay24, the flagship event organized by IIC and E-cell in the partnership with CRID offered a dynamic platform for students from the Department of AIDS.This event facilitated their active engagement in panel discussions with start up mentors and entrepreneurs.",
  },
];

function Events() {
  return (
    <div className="hero min-h-screen pt-16 flex flex-col items-center justify-start bg-custom-dark-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-custom-dark-blue bg-[linear-gradient(to_right,#d0d0d0_2px,transparent_2px),linear-gradient(to_bottom,#d0d0d0_2px,transparent_2px)] bg-[size:6rem_4rem] bg-blend-overlay"></div>

      <div className="absolute bottom-[-10%] left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-[-10%] right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div
        aria-hidden="true"
        className="absolute inset-x-8 inset-y-12 mx-auto w-36 rotate-45 scale-x-140 scale-y-150 rounded-full bg-gradient-to-b from-pink-500 to-purple-600 opacity-80 blur-3xl"
      ></div>

      <div className="text-center">
        <h1 className="text-white text-4xl font-bold font-redHat">Events</h1>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-screen-xl">
        <div className="relative wrap overflow-hidden">
          {/* Vertical Line (Fix for proper centering) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full border-2 border-opacity-20 border-gray-700"></div>

          {eventsData.map((event, index) => (
            <div
              key={event.id}
              className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full md:w-auto ${
                index % 2 === 0
                  ? "md:right-timeline md:flex-row-reverse"
                  : "md:left-timeline"
              }`}
            >
              <div className="w-full md:w-5/12"></div>
              <div className="z-20 flex items-center bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  {index + 1}
                </h1>
              </div>
              <div className="bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 mt-4 md:mt-0">
                <h3 className="mb-3 font-bold text-gray-800 text-xl font-redHat flex justify-between items-end">
                  {event.title}
                  <span className="px-2 text-lg">{event.date}</span>
                </h3>
                <p className="text-gray-700 leading-tight font-space">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Events;
