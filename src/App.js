import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow-md">
          <nav className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Alan Hunt</h1>

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
                    <h1 className="text-4xl font-semibold text-center mb-8">
                      About Me
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="text-gray-700">
                        <p className="mb-4">
                          I'm an enthusiastic Full Stack Developer with
                          proficiency in Javascript, HTML, CSS, and Node.
                        </p>
                        <p className="mb-4">
                          During my intensive 13-week experience at Northcoders,
                          I immersed myself in a wide range of projects, from
                          collaborative group work to solo and paired endeavors.
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="text-gray-700">
                        <p className="mb-4">
                          My journey has been a unique one, with a background
                          that spans teaching and senior administration,
                          culminating in my graduation from the esteemed
                          Northcoders bootcamp.
                        </p>
                        <p className="mb-4">
                          As a developer, I bring my diverse background,
                          creative passion, and zest for life to every project I
                          undertake. I'm excited to blend these qualities into
                          crafting apps that prioritize user satisfaction and
                          offer visually appealing designs.
                        </p>
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

                <section className="bg-white py-16">
                  <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-semibold text-center mb-8">
                      Passion for Development
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="text-gray-700">
                        <p className="mb-4">
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
                </section>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
