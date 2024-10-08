import React from "react";
import Footer from "./../Footer/Footer.jsx";
import { Instagram } from "lucide-react";

function Events() {
  return (
    <div className="hero min-h-screen pt-16 flex flex-col items-center justify-start bg-custom-dark-blue">
      {/* Background Pattern with Overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-custom-dark-blue bg-[linear-gradient(to_right,#d0d0d0_2px,transparent_2px),linear-gradient(to_bottom,#d0d0d0_2px,transparent_2px)] bg-[size:6rem_4rem] bg-blend-overlay"></div>
      <div className="absolute bottom-[-10%] left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-[-10%] right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div
        aria-hidden="true"
        className="absolute inset-x-8 inset-y-12 mx-auto w-36 rotate-45 scale-x-140 scale-y-150 rounded-full bg-gradient-to-b from-pink-500 to-purple-600 opacity-80 blur-3xl"
      ></div>

      <div className="mt-0.5 text-center">
        <h1 className="text-white text-4xl font-bold font-redHat">Events</h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="relative wrap overflow-hidden">
          <div className="absolute left-1/2 h-full border-2 border-opacity-20 border-gray-700"></div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl font-redHat flex justify-between items-end">
                Event Title
                <span className="px-2 text-lg">12th January,2024</span>
              </h3>
              <p className="text-gray-700 leading-tight font-space">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl font-redHat flex justify-between items-end">
                Event Title
                <span className="px-2 text-lg">12th January,2024</span>
              </h3>
              <p className="text-gray-700 leading-tight font-space">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl font-redHat flex justify-between items-end">
                Event Title
                <span className="px-2 text-lg">12th January,2024</span>
              </h3>

              <p className="text-gray-700 leading-tight font-space">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.
              </p>
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl font-redHat flex justify-between items-end">
                Event Title
                <span className="px-2 text-lg">12th January,2024</span>
              </h3>
              <p className="text-gray-700 leading-tight font-space">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl font-redHat flex justify-between items-end">
                Event Title
                <span className="px-2 text-lg">12th January,2024</span>
              </h3>

              <p className="text-gray-700 leading-tight font-space">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.
              </p>
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl font-redHat flex justify-between items-end">
                Event Title
                <span className="px-2 text-lg">12th January,2024</span>
              </h3>
              <p className="text-gray-700 leading-tight font-space">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl font-redHat flex justify-between items-end">
                Event Title
                <span className="px-2 text-lg">12th January,2024</span>
              </h3>

              <p className="text-gray-700 leading-tight font-space">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.
              </p>
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl font-redHat flex justify-between items-end">
                Event Title
                <span className="px-2 text-lg">12th January,2024</span>
              </h3>
              <p className="text-gray-700 leading-tight font-space">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl font-redHat flex justify-between items-end">
                Event Title
                <span className="px-2 text-lg">12th January,2024</span>
              </h3>

              <p className="text-gray-700 leading-tight font-space">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Events;
