import React, { useEffect } from "react";
import Footer from "../Footer/Footer.jsx";
import CardGrid from "./CardGrid.jsx";

function About() {
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="hero min-h-screen pt-16 flex flex-col items-center justify-start relative">
      {/* Background Pattern with Overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-custom-dark-blue bg-[linear-gradient(to_right,#d0d0d0_2px,transparent_2px),linear-gradient(to_bottom,#d0d0d0_2px,transparent_2px)] bg-[size:6rem_4rem] bg-blend-overlay"></div>

      <div className="mt-0.5 text-center">
        <h1 className="text-white text-4xl font-bold font-redHat">
          About
          <span className="font-redHat"> CRID</span>
        </h1>
        <p
          className={`mt-4 text-white text-lg max-w-xl mx-auto text-justify font-space text-shadow transform transition-all duration-1000  ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          At CRID, we believe data science can transform intelligence and drive
          positive change 🚀. We bring together experts and enthusiasts to share
          knowledge and ideas, advancing the field and empowering informed
          decision-making 💡.
        </p>
      </div>

      <div className="mt-0.5 text-center">
        <h1 className="text-white text-4xl font-bold font-redHat py-8">
          Meet Our Team
        </h1>
      </div>

      <div className="py-2 my-2">
        <CardGrid />
      </div>

      {/* Added Footer Component */}
      <Footer />
    </div>
  );
}

export default About;
