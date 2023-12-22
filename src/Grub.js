import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

function Grub({ darkMode }) {
  return (
    <div className={`text-gray-700 ${darkMode ? "text-white" : "text-black"}`}>
      <section
        className={`py-16 w-full p-2 border rounded text-justify  ${
          darkMode ? "dark:bg-slate-800" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 text-justify">
          {/* Grub Project */}

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-gray-700">
                {/* <h2 className="text-4xl font-semibold mb-4">Grub</h2> */}
                {/* <h2
                  className={`text-4xl text-center font-semibold mb-4 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  Grub
                </h2> */}
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

export default Grub;
