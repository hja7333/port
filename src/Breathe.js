import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";
function Breathe({ darkMode }) {
  return (
    <section
      className={`py-16 w-full p-2 border rounded text-justify ${
        darkMode ? "dark:bg-slate-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4 text-justify">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={`py-16 ${darkMode ? "dark:bg-slate-800" : "bg-white"}`}
          >
            {/* <h2
              className={`text-4xl text-center font-semibold mb-4 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Breathe
            </h2> */}
            <p className="text-2xl mb-4">
              Introducing the Breathe App: An online carbon intensity calculator
              designed and developed during a solo sprint at Northcoders. With a
              focus on sustainability and environmental awareness, this
              innovative app harnesses the power of the carbon intensity API to
              provide users with valuable insights into their local carbon
              footprint. By simply entering their postcode, users can instantly
              discover the carbon intensity in their area, gaining a deeper
              understanding of the environmental impact of their energy usage.
              This project showcases my passion for leveraging technology to
              create meaningful solutions for a greener future. Together, let's
              take steps towards a more sustainable tomorrow.
            </p>
            <p className="text-2xl mb-4">
              Technologies used: JavaScript, React, HTML, CSS
            </p>
          </div>
          <div>
            <img
              src="https://github.com/hja7333/port/blob/main/public/Screenshot%202023-12-22%20at%2010.15.55.png?raw=true"
              alt="Breathe app page with input for postcode"
              className="w-full h-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="https://github.com/hja7333/fe-react-data-visualisation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:shadow-gray-800 hover:underline animated-link"
            >
              <FontAwesomeIcon icon={faEarthAfrica} bounce /> Source Code
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Breathe;
