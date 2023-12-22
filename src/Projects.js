import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAfrica, faBowlFood } from "@fortawesome/free-solid-svg-icons";

function Projects({ darkMode }) {
  return (
    <div className={`text-gray-700 ${darkMode ? "text-white" : "text-black"}`}>
      <section
        className={`py-16 w-full p-2 border rounded text-justify  ${
          darkMode ? "dark:bg-slate-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-4xl text-center font-semibold mb-4 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Breathe
        </h2>

        <div className="container mx-auto px-4 text-justify">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`text-gray-700 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <div>
                <p className="text-2xl mb-4">
                  Introducing the Breathe App: An online carbon intensity
                  calculator designed and developed during a solo sprint at
                  Northcoders. With a focus on sustainability and environmental
                  awareness, this innovative app harnesses the power of the
                  carbon intensity API to provide users with valuable insights
                  into their local carbon footprint. By simply entering their
                  postcode, users can instantly discover the carbon intensity in
                  their area, gaining a deeper understanding of the
                  environmental impact of their energy usage. This project
                  showcases my passion for leveraging technology to create
                  meaningful solutions for a greener future. Together, let's
                  take steps towards a more sustainable tomorrow.
                </p>

                <p className="text-2xl mb-4">
                  Technologies used: JavaScript, React, HTML, CSS
                </p>
                <img
                  src="https://github.com/hja7333/port/blob/main/public/2023-12-22 at 10.15.55.png"
                  alt="Map View screenshot of the Grub App"
                  className="w-full h-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none"
                />
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
                      <FontAwesomeIcon icon={faEarthAfrica} bounce /> Source
                      Code
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <br />

          {/* Grub Project */}

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-gray-700">
                {/* <h2 className="text-4xl font-semibold mb-4">Grub</h2> */}
                <h2
                  className={`text-4xl text-center font-semibold mb-4 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  Grub
                </h2>
                <div
                  className={`text-gray-700 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  <p className="text-2xl mb-4">
                    We used: BE: Mongoose, MongoDB (hosted with Mongo Atlas),
                    Express, Jest, Supertest, Passport.js, Node.JS
                  </p>
                  <p className="text-2xl mb-4">
                    FE: React Native, React Native maps, React Native google
                    places autocomplete, Expo, Android Studio, Axios.
                  </p>
                  <p className="text-2xl mb-4">
                    Our tech stack choices were made to try to optimise the
                    users experience and also to explore wider technologies
                    outside of the PERN stack we have become used to.
                  </p>
                </div>
              </div>

              <div className="images ">
                <img
                  src="https://github.com/hja7333/port/blob/main/public/Screenshot%202023-11-02%20at%2017.43.55.png?raw=true"
                  alt="Create account screen of the GRUB APP"
                  className="w-full h-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none"
                />

                <img
                  src="https://github.com/hja7333/port/blob/main/public/Screenshot%202023-11-02%20at%2017.44.35.png?raw=true"
                  alt="Map View screenshot of the Grub App"
                  className="w-full h-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none"
                />
              </div>

              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="https://github.com/hja7333/GrubFe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:shadow-gray-800 hover:underline animated-link "
                  >
                    <FontAwesomeIcon icon={faBowlFood} bounce /> Frontend Source
                    Code
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/hja7333/Grub-BE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600  dark:shadow-gray-800 hover:underline animated-link"
                  >
                    <FontAwesomeIcon icon={faBowlFood} bounce /> Backend Source
                    Code
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=PLvoOUOAx5A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600  dark:shadow-gray-800 hover:underline animated-link"
                  >
                    <FontAwesomeIcon icon={faBowlFood} bounce /> YouTube
                    Promotional Video
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
