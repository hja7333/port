import React from "react";

function Grub({ darkMode }) {
  return (
    <div className={`text-gray-700 ${darkMode ? "text-white" : "text-black"}`}>
      <section
        className={`py-16 w-full p-2 ${
          darkMode ? "dark:bg-slate-800" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 text-2xl mb-4">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-gray-700">
                <div
                  className={`text-gray-700 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  <p>
                    Grub is a full stack MERN application that allows users to
                    collectively tackle the rise in food costs, energy bills,
                    and the challenges faced by homeless or low-income
                    individuals. Together, let's create a world where no one
                    goes hungry, and food becomes a catalyst for positive
                    change.{" "}
                  </p>
                  <p>
                    Join Grub today and be part of a global movement
                    transforming lives, one meal at a time. Back End
                    technologies: Mongoose, MongoDB (hosted with Mongo Atlas),
                    Express, Jest, Supertest, Passport.js, Node.JS
                  </p>
                  <p>
                    Frontend technologies: React Native, React Native maps,
                    React Native google places autocomplete, Expo, Android
                    Studio, Axios.
                  </p>
                  <p>
                    Our tech stack choices were made to try to optimise the
                    users experience and also to explore wider technologies
                    outside of the PERN stack we had used on the bootcamp.
                  </p>
                  <div className="mt-8">
                    <ul className="mt-4 space-y-2">
                      <li>
                        <button
                          onClick={() =>
                            window.open(
                              "https://github.com/hja7333/GrubFe",
                              "_blank"
                            )
                          }
                          className=" dark:shadow-gray-800 hover:underline animated-link text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xs px-3 py-1.5 text-center me-2 mb-2"
                        >
                          Frontend Source Code
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() =>
                            window.open(
                              "https://github.com/hja7333/Grub-BE",
                              "_blank"
                            )
                          }
                          className=" dark:shadow-gray-800 hover:underline animated-link text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xs px-3 py-1.5 text-center me-2 mb-2"
                        >
                          Backend Source Code
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() =>
                            window.open(
                              "https://www.youtube.com/watch?v=PLvoOUOAx5A",
                              "_blank"
                            )
                          }
                          className=" dark:shadow-gray-800 hover:underline animated-link text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xs px-3 py-1.5 text-center me-2 mb-2"
                        >
                          YouTube Promotional Video
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="images ">
                <img
                  src="https://github.com/hja7333/port/blob/main/public/GrubCreateAccount_output.avif?raw=true"
                  alt="Create account screen of the GRUB APP"
                  className="w-full h-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none"
                />

                <img
                  src="https://github.com/hja7333/port/blob/main/public/GrubMapView_output.avif?raw=true"
                  alt="Map View screenshot of the Grub App"
                  className="w-full h-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Grub;
