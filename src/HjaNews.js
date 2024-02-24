import React from "react";

function HjaNews({ darkMode }) {
  return (
    <div className={`text-gray-700 ${darkMode ? "text-white" : "text-black"}`}>
      <section
        className={`py-16 w-full p-2  rounded   ${
          darkMode ? "dark:bg-slate-800" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 ">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-gray-700">
                <div
                  className={`text-gray-700 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  <p className="text-2xl mb-4">
                    Built a snappy news web app with Node.js and Express,
                    powered by PostgreSQL for a sturdy backend. Used clean
                    RESTful API endpoints like /api/topics and /api/articles to
                    make data flow seamless. Handled HTTP methods elegantly,
                    with Express managing requests and fetching data from
                    PostgreSQL.{" "}
                  </p>

                  <p className="text-2xl mb-4">
                    Ensured a smooth user experience with robust error handling
                    for 404 and 400 situations. Implemented error-handling
                    middleware for consistent responses. Tested endpoints
                    thoroughly with the supertest package for reliability.
                  </p>
                  <p className="text-2xl mb-4">
                    Kept the codebase organized by separating routing and
                    controller functions. Ready for action and user-friendly –
                    delivering news hassle-free!
                  </p>
                </div>
                <div className="mt-8">
                  <ul className="mt-4 space-y-2">
                    <li>
                      <button
                        onClick={() =>
                          window.open("https://hjanews.netlify.app/", "_blank")
                        }
                        className=" dark:shadow-gray-800 hover:underline animated-link text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xs px-3 py-1.5 text-center me-2 mb-2"
                      >
                        HJA News Web App
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/hja7333/nc-news",
                            "_blank"
                          )
                        }
                        className=" dark:shadow-gray-800 hover:underline animated-link text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xs px-3 py-1.5 text-center me-2 mb-2"
                      >
                        Frontend Code
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/hja7333/nc-news",
                            "_blank"
                          )
                        }
                        className=" dark:shadow-gray-800 hover:underline animated-link text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xs px-3 py-1.5 text-center me-2 mb-2"
                      >
                        Backend Code
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="images ">
                <img
                  src="https://github.com/hja7333/port/blob/main/public/newsHuntMain_output.avif?raw=true"
                  alt="Landing page of HJA NEWS app, it has home and login buttons, filters for cooking, football, coding"
                  className="w-full h-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none"
                />

                <img
                  src=" https://github.com/hja7333/port/blob/main/public/newsHuntArticle_output.avif?raw=true"
                  alt="Single article page on the HJA NEWS app, with header as before, votes, author, and comments underneath "
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

export default HjaNews;
