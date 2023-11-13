import React from "react";
import "./index.css";
import "./App.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

import Footer from "./Footer";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <nav className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-6xl text-gray-600 font-semibold">Alan Hunt</h1>
          <ul className="flex space-x-6">
            <li>
              <Link to="about" smooth={true} duration={500}>
                About Me
              </Link>
            </li>{" "}
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact Me
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* About Me Section */}

      <section id="about" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <br />
          <h2 className="text-4xl font-semibold text-center mb-8">About Me</h2>
          <AboutMe />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <br />
          <h2 className="text-4xl font-semibold text-center mb-8">Projects</h2>
          <Projects />
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="bg-white py-16">
        <div className="container mx-auto px-4">
          {" "}
          <br />
          <h2 className="text-4xl font-semibold text-center mb-8">
            Contact Me
          </h2>
          <ContactMe />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
