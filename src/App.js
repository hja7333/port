import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Routes
import "./App.css";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
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

        {/* Content */}
        <Routes>
          {" "}
          {/* Change from Switch to Routes */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route
            path="/about"
            element={
              <div>
                <p>
                  I'm an enthusiastic Full Stack Developer with proficiency in
                  Javascript, HTML, CSS, and Node. My journey has been a unique
                  one, with a background that spans teaching and senior
                  administration, culminating in my graduation from the esteemed
                  Northcoders bootcamp.
                </p>

                <p>
                  During my intensive 13-week experience at Northcoders, I
                  immersed myself in a wide range of projects, from
                  collaborative group work to solo and paired endeavors. I
                  adeptly navigated various technology stacks, utilizing Agile
                  methodologies to foster efficiency and seamless collaboration
                  within the team.
                </p>

                <p>
                  Beyond my professional life, I lead a plant-based lifestyle,
                  embodying my commitment to health and sustainability. When I'm
                  not coding, I lose myself in the world of books, exploring a
                  wide range of subjects and genres, from gripping fiction to
                  enlightening nonfiction.
                </p>

                <p>
                  My love for nature takes me hiking amidst the breathtaking
                  landscapes of the Peak District, while my fitness routine
                  includes climbing, badminton, and running, allowing me to
                  maintain a healthy work-life balance.
                </p>

                <p>
                  In addition, I actively participate in the Spin Tennis League
                  and Sheffield Tennis League. These experiences provide me with
                  the opportunity to meet new people, compete in thrilling
                  matches, and continue my personal and professional growth.
                </p>

                <p>
                  As a developer, I bring my diverse background, creative
                  passion, and zest for life to every project I undertake. I'm
                  excited to blend these qualities into crafting apps that
                  prioritize user satisfaction and offer visually appealing
                  designs.
                </p>
              </div>
            }
          />{" "}
          {/* About Me content */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
