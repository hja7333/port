import React from "react";
import "./index.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Projects from "./Projects";
// import Footer from "./Footer";
import ContactMe from "./ContactMe";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow-md">
          <nav className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
            <h1 className="text-6xl text-gray-600 font-semibold">Alan Hunt</h1>

            <ul className="flex space-x-6">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-800">
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route
            path="/about"
            element={
              <div>
                <section className="bg-white py-16">
                  <div className="container mx-auto px-4">
                    <h1 className=" text-gray-600 text-4xl font-semibold text-center mb-8">
                      About Me
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="text-gray-700">
                        <p className="text-2xl mb-4">
                          As a highly motivated and adaptable professional, I
                          bring a dynamic blend of experiences from the fields
                          of education, software engineering, and case work. My
                          journey is characterized by a fervent dedication to
                          embracing new challenges and fostering a lifelong
                          learning mindset, especially in the ever-evolving tech
                          industry. My journey has been a unique one, with a
                          background that spans Teaching, Field Sales, and
                          Senior Administration, culminating in my graduation
                          from the esteemed Northcoders Software Engineering
                          Bootcamp.
                        </p>
                        <p className="text-2xl mb-4">
                          My reputation is built on a foundation of strong
                          problem-solving skills and an unwavering commitment to
                          delivering innovative solutions. I'm on the lookout
                          for an exciting and demanding role where I can join
                          forces with a team of seasoned software engineers and,
                          together, we'll create a profound impact on our
                          organisation.
                        </p>

                        <p className="text-2xl mb-4"></p>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="text-gray-700">
                        <p className="text-2xl mb-4">
                          During my intensive 13-week experience at Northcoders,
                          I immersed myself in a wide range of projects, from
                          collaborative group work to solo and paired endeavors.
                        </p>
                        <p className="text-2xl mb-4"></p>
                        <ul class="list-disc" className="text-2xl mb-4">
                          <li>
                            Frontend: Git, Trello, HTML5, CSS3, Axios, React,
                            React Native, Expo, Android Dev Studio, React Native
                            Map, Google Maps SDK, Google Maps Geocoding & Places
                            APIs.
                          </li>
                          <li>
                            Backend: PostgreSQL, Express.js, Node.js, Jest,
                            Supertest, MongoDB, Mongoose, MongoDB Atlas,
                            Passport.js, Cloudinary.{" "}
                          </li>
                          <li> Language: JavaScript</li>
                          <li>
                            Graduated from an intensive 13-week Coding Bootcamp,
                            specialising in full-stack web development.
                          </li>
                          <li>
                            Developed a front-end solo project using React,
                            Axios, HTML5, and CSS3, resulting in a user-
                            friendly application.
                          </li>
                          <li>
                            Applied back-end expertise in Node.js, Express.js,
                            and PostgreSQL to create efficient and secure
                            solutions.
                          </li>
                          <li>
                            {" "}
                            Practiced test-driven development using Jest,
                            ensuring the reliability of software projects.{" "}
                          </li>{" "}
                          <li>
                            Collaborated integrating new technologies like
                            MongoDB, Mongoose, MongoDB Atlas, Cloudinary, and
                            passport.js for the back-end, and React Native,
                            Expo, Android development studios, Google Maps
                            Geocoding API, and Google Places for the front-end.
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
                  </div>
                </section>

                {/* <section className="bg-white py-16">
                  <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-semibold text-center mb-8">
                      Passion for Development
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="text-gray-700">
                        <p className="text-2xl mb-4">
                          As a developer, I bring my diverse background,
                          creative passion, and zest for life to every project I
                          undertake. I'm excited to blend these qualities into
                          crafting apps that prioritize user satisfaction and
                          offer visually appealing designs.
                        </p>
                      </div>
                      <div>
                        <img
                          src="https://th.bing.com/th/id/OIG.oiczP_pH3S01InU_C8M5?pid=ImgGn&w=1024&h=1024&rs=1"
                          alt=""
                          className="w-full h-auto rounded"
                        />
                      </div>
                    </div>
                  </div>
                </section> */}
              </div>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
