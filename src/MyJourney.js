import React from "react";

function MyJourney({ darkMode }) {
  return (
    <section
      className={`py-16 w-full p-2 border rounded text-justify  ${
        darkMode ? "dark:bg-slate-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4 text-justify ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={`text-gray-700 ${
              darkMode ? "text-white" : "text-black mr-8"
            } `}
          >
            <p className="text-2xl mb-4">
              During my intensive 13-week experience at Northcoders, I immersed
              myself in a wide range of projects, from collaborative group work
              to solo and paired endeavors.
            </p>
            <ul className="list-disc text-2xl mb-4">
              <li>
                Frontend: Git, Trello, HTML5, CSS3, Axios, React, React Native,
                Expo, Android Dev Studio, React Native Map, Google Maps SDK,
                Google Maps Geocoding & Places APIs.
              </li>
              <li>
                Backend: PostgreSQL, Express.js, Node.js, Jest, Supertest,
                MongoDB, Mongoose, MongoDB Atlas, Passport.js, Cloudinary.
              </li>
              <li>Language: JavaScript</li>
              <li>
                Graduated from an intensive 13-week Coding Bootcamp,
                specializing in full-stack web development.
              </li>
              <li>
                Developed a front-end solo project using React, Axios, HTML5,
                and CSS3, resulting in a user-friendly application.
              </li>
              <li>
                Applied back-end expertise in Node.js, Express.js, and
                PostgreSQL to create efficient and secure solutions.
              </li>
              <li>
                Practiced test-driven development using Jest, ensuring the
                reliability of software projects.
              </li>
              <li>
                Collaborated integrating new technologies like MongoDB,
                Mongoose, MongoDB Atlas, Cloudinary, and passport.js for the
                back-end, and React Native, Expo, Android development studios,
                Google Maps Geocoding API, and Google Places for the front-end.
              </li>
            </ul>
          </div>
          <div>
            <img
              className="w-full h-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none"
              src="https://th.bing.com/th/id/OIG.SwodUL7BLVj8zn29AphQ?pid=ImgGn"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyJourney;
