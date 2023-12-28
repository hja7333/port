import React, { useState, useEffect } from "react";
import "./index.css";
import "./App.css";
import AboutMe from "./AboutMe";
import Grub from "./Grub";
import Breathe from "./Breathe";
import ContactMe from "./ContactMe";
import HjaNews from "./HjaNews";
import { Link } from "react-scroll";
import MyJourney from "./MyJourney";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    document.documentElement.style.backgroundColor = darkMode
      ? "#1F2937"
      : "white";
  }, [darkMode]);

  const headerClasses = `shadow-md ${
    darkMode
      ? "dark:bg-slate-800 text-white border:none "
      : "bg-white text-black"
  }`;

  const sectionClasses = (additionalClasses = "") =>
    `py-16 ${
      darkMode ? "dark:bg-gray-800" : "bg-gray-100"
    } ${additionalClasses}`;

  return (
    <div className>
      <div className={`min-h-screen ${darkMode ? "dark" : ""}bg-slate-700`}>
        <header className={headerClasses}>
          <nav className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center ">
            <h1 className="text-6xl font-semibold  ">Alan Hunt</h1>
            <ul className="flex space-x-6">
              <li>
                <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xs px-3 py-1.5 text-center me-2 mb-2">
                  <Link to="about" smooth={true} duration={500}>
                    About Me
                  </Link>
                </button>
              </li>
              <li>
                <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xs px-3 py-1.5 text-center me-2 mb-2">
                  <Link to="my-journey" smooth={true} duration={500}>
                    My Journey
                  </Link>
                </button>
              </li>
              <li>
                <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xs px-3 py-1.5 text-center me-2 mb-2">
                  <Link to="Breathe" smooth={true} duration={500}>
                    Projects
                  </Link>
                </button>
              </li>
              <li>
                <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xs px-3 py-1.5 text-center me-2 mb-2">
                  <Link to="contact" smooth={true} duration={500}>
                    Contact Me
                  </Link>
                </button>
              </li>
            </ul>

            <div className={darkMode ? "dark" : ""}>
              <div>
                <button
                  onClick={toggleDarkMode}
                  type="button"
                  className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xs px-3 py-1.5 text-center me-2 mb-2"
                >
                  {darkMode ? "lightMode" : "darkMode"}
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* About Me Section */}
        <section id="about" className={sectionClasses()}>
          <div className="container mx-auto px-4">
            <br />
            <h2
              className={`text-4xl text-center font-semibold mb-4  ${
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
        {/* Breathe Section */}
        <section id="Breathe" className={sectionClasses()}>
          <div className="container mx-auto px-4">
            <br />
            <h2
              className={`text-4xl text-center font-semibold mb-4 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Breathe
            </h2>

            <Breathe darkMode={darkMode} />
          </div>
        </section>

        {/* Grub Section */}
        <section id="Grub" className={sectionClasses()}>
          <div className="container mx-auto px-4">
            <br />
            <h2
              className={`text-4xl text-center font-semibold mb-4 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Grub
            </h2>

            <Grub darkMode={darkMode} />
          </div>
        </section>

        {/* HjaNews Section */}
        <section id="HjsNews" className={sectionClasses()}>
          <div className="container mx-auto px-4">
            <br />
            <h2
              className={`text-4xl text-center font-semibold mb-4 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              HJA News
            </h2>

            <HjaNews darkMode={darkMode} />
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
            darkMode ? "dark:bg-slate-800 text-white" : "bg-white text-black"
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
