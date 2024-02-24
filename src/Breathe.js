import React from "react";

function Breathe({ darkMode }) {
  return (
    <section
      className={`py-16 w-full p-2  rounded  ${
        darkMode ? "dark:bg-slate-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={`py-16 ${darkMode ? "dark:bg-slate-800" : "bg-white"}`}
          >
            <p className="text-2xl mb-4">
              Introducing the Breathe App: An online carbon intensity calculator
              designed and developed during a solo sprint at Northcoders. With a
              focus on sustainability and environmental awareness, this
              innovative app harnesses the power of the carbon intensity API to
              provide users with valuable insights into their local carbon
              footprint.
            </p>{" "}
            <p className="text-2xl mb-4">
              By simply entering their postcode, users can instantly discover
              the carbon intensity in their area, gaining a deeper understanding
              of the environmental impact of their energy usage.
            </p>
            <p className="text-2xl mb-4">
              This project showcases my passion for leveraging technology to
              create meaningful solutions for a greener future. Together, let's
              take steps towards a more sustainable tomorrow.
            </p>
            <p className="text-2xl mb-4">
              Technologies used: JavaScript, React, HTML, CSS
            </p>
            <div className="mt-8">
              <ul className="mt-4 space-y-2">
                <li>
                  <button
                    onClick={() =>
                      window.open("https://tobreathe.netlify.app/", "_blank")
                    }
                    className=" dark:shadow-gray-800 hover:underline animated-link text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xs px-3 py-1.5 text-center me-2 mb-2"
                  >
                    ToBreathe Web App
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      window.open(
                        "https://github.com/hja7333/fe-react-data-visualisation",
                        "_blank"
                      )
                    }
                    className=" dark:shadow-gray-800 hover:underline animated-link text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xs px-3 py-1.5 text-center me-2 mb-2"
                  >
                    Source Code
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src="https://github.com/hja7333/port/blob/main/public/BreatheApp_output.avif?raw=true"
              alt="Breathe app page with input for postcode"
              width="1029"
              height="2187"
              className="w-full h-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Breathe;
