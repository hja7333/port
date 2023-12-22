import React, { useState } from "react";
import "./index.css";
import "./App.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import { Link } from "react-scroll";
import MyJourney from "./MyJourney";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const containerClasses = `container mx-auto min-h-screen bg-slate-700 ${
    darkMode ? "dark" : ""
  }`;

  const headerClasses = `shadow-md ${
    darkMode ? "dark:bg-slate-800 text-white" : "bg-white text-black"
  }`;

  const sectionClasses = (additionalClasses = "") =>
    `py-16 ${
      darkMode ? "dark:bg-gray-800" : "bg-gray-100"
    } ${additionalClasses}`;

  return (
    <div className={containerClasses}>
      <div className={`min-h-screen ${darkMode ? "dark" : ""}bg-slate-700`}>
        <header className={headerClasses}>
          <nav className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
            <h1 className="text-6xl font-semibold">Alan Hunt</h1>
            <ul className="flex space-x-6">
              <li>
                <Link to="about" smooth={true} duration={500}>
                  About Me
                </Link>
              </li>
              <li>
                <li>
                  <Link to="my-journey" smooth={true} duration={500}>
                    My Journey{" "}
                  </Link>
                </li>
                <Link to="projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact Me
                </Link>
              </li>
            </ul>
            <li>
              <div className={darkMode ? "dark" : ""}>
                <div className="bg-white dark:bg-slate-700">
                  <button
                    onClick={toggleDarkMode}
                    className="bg-grey-300 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
                  >
                    Toggle Dark Mode
                  </button>
                </div>
              </div>
            </li>
          </nav>
        </header>

        {/* About Me Section */}
        <section id="about" className={sectionClasses()}>
          <div className="container mx-auto px-4">
            <br />
            <h2
              className={`text-4xl text-center font-semibold mb-4 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              About Me
            </h2>

            <AboutMe darkMode={darkMode} />
          </div>
        </section>

        {/* My Journey Section */}
        <section id="my-journey" className={sectionClasses()}>
          <div className="container mx-auto px-4">
            <br />
            <h2
              className={`text-4xl text-center font-semibold mb-4 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              My Journey
            </h2>

            <MyJourney darkMode={darkMode} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={sectionClasses()}>
          <div className="container mx-auto px-4">
            <br />
            <h2
              className={`text-4xl text-center font-semibold mb-4 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Projects
            </h2>

            <Projects darkMode={darkMode} />
          </div>
        </section>

        {/* Contact Me Section */}
        <section id="contact" className={sectionClasses()}>
          <div className="container mx-auto px-4">
            <br />
            <h2
              className={`text-4xl text-center font-semibold mb-4 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Contact Me
            </h2>

            <ContactMe darkMode={darkMode} />
          </div>
        </section>

        <footer
          className={`bg-white shadow-md text-center ${
            darkMode ? "dark:bg-slate-800" : "bg-white"
          }`}
        >
          <p>
            Designed + Developed by Alan Hunt, COPYRIGHT ©{" "}
            {new Date().getFullYear()} Alan Hunt
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
