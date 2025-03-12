import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import Footer from "../Footer/Footer.jsx";

function Home() {
  const aboutSectionRef = useRef(null);
  const [transitionClasses, setTransitionClasses] = useState("");
  const [hover, setHover] = useState(false);

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    setTransitionClasses("translate-x-0 opacity-100");
  }, []);

  return (
    <div className="min-h-screen bg-custom-dark-blue overflow-hidden">
      {/* Hero Section */}
      <div className="hero min-h-screen flex flex-col justify-center items-center relative">
        {/* Radial Gradient Circles */}
        <div className="absolute bottom-[-10%] left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-[-10%] right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div
          aria-hidden="true"
          className="absolute inset-x-8 inset-y-12 mx-auto w-36 rotate-45 scale-x-140 scale-y-150 rounded-full bg-gradient-to-b from-pink-500 to-purple-600 opacity-80 blur-3xl"
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left Side: Text Content */}
          <div
            className={`lg:w-1/2 text-center lg:text-left transform transition-all duration-1000 ease-out ${
              transitionClasses
                ? transitionClasses
                : "-translate-x-full opacity-0"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-redHat">
              CRID
            </h1>
            <p className="text-lg sm:text-xl text-white mb-8 font-space">
              The Center for Reforming Intelligence through Data Science [CRID]
              is a vibrant community ⭐ that fosters innovation and growth. We
              bring together experts and enthusiasts to share knowledge and
              ideas through engaging speaker sessions and dynamic events. Our
              community is a hub for learning, collaboration, and networking,
              empowering individuals to harness the power of data-driven
              insights 🔍. By sharing experiences and best practices, we drive
              collective progress and shape the future of intelligent
              decision-making 🚀.
            </p>
            <div className="flex justify-center lg:justify-start text-white">
              <button
                type="button"
                onClick={scrollToAbout}
                className="inline-flex items-center rounded-md bg-white px-5 py-3 text-black text-sm font-semibold hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black font-space"
              >
                Learn More
                <ArrowDown className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div
            className={`lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 transform transition-all duration-1000 ease-out ${
              transitionClasses
                ? transitionClasses
                : "translate-x-full opacity-0"
            }`}
          >
            <img
              src="/images/data-home.jpg"
              className="max-w-full lg:max-w-md rounded-lg shadow-2xl"
              alt="Hero"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        ref={aboutSectionRef}
        className="py-20 w-full flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-white text-4xl font-bold font-redHat">
          About
          <span className="font-redHat"> CRID</span>
        </h1>
        <p className="mt-4 text-white text-lg max-w-xl mx-auto text-justify font-space">
          CRID is a comprehensive platform dedicated to fostering community and
          innovation through research and development. Our mission is to bridge
          the gap between academia and industry, facilitating groundbreaking
          projects and fostering collaborative growth. Join us in our pursuit of
          excellence and be a part of the future of innovation.
        </p>

        {/* Images Side by Side */}
        <div className="mt-8 flex justify-center gap-12">
          <div
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
          >
            <img
              src={
                hover === true
                  ? "/images/left-image.jpg"
                  : "/images/center-image.jpg"
              }
              alt="Magazine Cover"
              className="max-w-md w-full h-fit rounded-lg shadow-lg"
            />
            <div className="mt-4 text-white font-space justify-center">
              Download PDF
            </div>
          </div>
          <div
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
          >
            <img
              src={
                hover === true
                  ? "/images/SCIPIA-2 SECOND PAGE.jpg"
                  : "/images/SCIPIA-2 FIRST PAGE.jpg"
              }
              alt="Second Magazine Cover"
              className="max-w-md w-full rounded-lg shadow-lg"
            />
            <div className="mt-4 text-white font-space justify-center">
              Download PDF
            </div>
          </div>
        </div>
        <h1 className="text-white text-4xl font-bold font-redHat py-2 my-2">
          Our
          <span className="font-redHat"> Magazines</span>
        </h1>
        <p className="mt-4 text-white text-lg max-w-xl mx-auto text-justify font-space">
          The SCIPIA editions cover a wide range of topics, from India’s rich
          historical resilience and space achievements like Chandrayaan-3's moon
          landing, to the future of AI, robotics, and automation. They emphasize
          professionalism, responsible engineering, and the cultural influence
          of anime globally. Together, they inspire curiosity and growth, aiming
          to educate and engage youth in shaping the future.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
