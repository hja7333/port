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
          <Route path="/about" element={<div>About Me content</div>} />{" "}
          {/* About Me content */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
