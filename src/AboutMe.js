import React from "react";

function AboutMe() {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-700">
              <p className="text-2xl mb-4">
                Hey folks! 🌟 I'm a highly motivated professional with
                experience in education, software engineering, nationwide field
                sales, and international credit control. Picture this: I've
                danced my way through teaching, rocked it in field sales, and
                strutted my stuff in international credit control, all leading
                up to my epic graduation from the Northcoders Software
                Engineering Bootcamp.
              </p>
              <p className="text-2xl mb-4">
                I'm all about tackling new challenges and keeping that learning
                energy alive, especially in the ever-changing tech scene. My
                reputation? It's built on killer problem-solving skills and a
                commitment to dropping innovative solutions. Now, I'm on the
                hunt for a challenging role where I can team up with some tech
                wizards to make a serious impact on our turf! 🚀✨
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
      <h2 className="text-4xl text-center font-semibold mb-8">My Journey</h2>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-8 flex items-center">
          <div className="text-gray-700 mr-8">
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
              className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none"
              src="https://th.bing.com/th/id/OIG.pu3WYzRMNdI42os67jj1?pid=ImgGn"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
