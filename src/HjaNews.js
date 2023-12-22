import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

function HjaNews({ darkMode }) {
  return (
    <div className={`text-gray-700 ${darkMode ? "text-white" : "text-black"}`}>
      <section
        className={`py-16 w-full p-2 border rounded text-justify  ${
          darkMode ? "dark:bg-slate-800" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 text-justify">
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
              </div>

              <div className="images ">
                <img
                  src="https://github.com/hja7333/port/blob/main/public/image_123650291%20(3).JPG?raw=true"
                  alt="Landing page of HJA NEWS app, it has home and login buttons, filters for cooking, football, coding"
                  className="w-full h-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none"
                />

                <img
                  src=" https://github.com/hja7333/port/blob/main/public/image_123650291%20(2).JPG?raw=true"
                  alt="Single article page on the HJA NEWS app, with header as before, votes, author, and comments underneath "
                  className="w-full h-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none"
                />
              </div>

              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="https://hjanews.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600  dark:shadow-gray-800 hover:underline animated-link"
                  >
                    <FontAwesomeIcon icon={faBowlFood} bounce /> HJA News Web
                    App
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/hja7333/nc-news"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:shadow-gray-800 hover:underline animated-link "
                  >
                    <FontAwesomeIcon icon={faBowlFood} bounce /> Frontend Code
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/hja7333/nc-news"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600  dark:shadow-gray-800 hover:underline animated-link"
                  >
                    <FontAwesomeIcon icon={faBowlFood} bounce /> Backend Code
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

export default HjaNews;
