import React from "react";

function AboutMe() {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-gray-600 text-4xl font-semibold text-center mb-8">
            About Me
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-700">
              <p className="text-2xl mb-4">
                As a highly motivated and adaptable professional, I bring a
                dynamic blend of experiences from the fields of education,
                software engineering, and case work. My journey is characterized
                by a fervent dedication to embracing new challenges and
                fostering a lifelong learning mindset, especially in the
                ever-evolving tech industry. My journey has been a unique one,
                with a background that spans Teaching, Field Sales, and Senior
                Administration, culminating in my graduation from the esteemed
                Northcoders Software Engineering Bootcamp.
              </p>
              <p className="text-2xl mb-4">
                My reputation is built on a foundation of strong problem-solving
                skills and an unwavering commitment to delivering innovative
                solutions. I'm on the lookout for an exciting and demanding role
                where I can join forces with a team of seasoned software
                engineers and, together, we'll create a profound impact on our
                organization.
              </p>
            </div>
            <div>
              <img
                src="https://th.bing.com/th/id/OIG.nNWBeZORNw3eqfdgX5ER?pid=ImgGn"
                alt=""
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8">
            My Journey
          </h2>
          <div className="text-gray-700">
            <p className="text-2xl mb-4">
              During my intensive 13-week experience at Northcoders, I immersed
              myself in a wide range of projects, from collaborative group work
              to solo and paired endeavors.
            </p>
            <p className="text-2xl mb-4"></p>
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
              src="https://th.bing.com/th/id/OIG.pu3WYzRMNdI42os67jj1?pid=ImgGn"
              alt=""
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
