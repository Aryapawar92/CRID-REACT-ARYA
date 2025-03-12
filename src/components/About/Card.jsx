import React from "react";

function Card({ item }) {
  return (
    <div className="relative flex flex-col text-gray-700 bg-black shadow-md rounded-xl w-80">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-black shadow-lg rounded-xl h-64">
        <img
          src={item.image}
          alt="profile-picture"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="block mb-2 font-sans text-2xl font-semibold leading-snug tracking-normal text-white">
          {item.name}
        </h4>
        <p className="block font-sans text-base font-medium leading-relaxed  text-white bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
          {item.role}
        </p>
      </div>
      {/* <div className="flex justify-center p-4 pt-2 gap-5">
        <Link
          to={item.Linkedin}
          className="block text-xl font-normal leading-relaxed text-blue-600 hover:text-blue-800"
        >
          <Linkedin />
        </Link>
      </div> */}
    </div>
  );
}

export default Card;
