import React from "react";

function AboutMe({ darkMode }) {
  return (
    <section
      className={`py-16 w-full p-2 rounded text-justify ${
        darkMode ? "dark:bg-slate-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4 text-justify">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={`py-16 ${darkMode ? "dark:bg-slate-800" : "bg-white"}`}
          >
            <p className="text-2xl mb-4">
              Hey folks! 🌟 I'm a highly motivated professional with experience
              in education, software engineering, nationwide field sales, and
              international credit control. Picture this: I've danced my way
              through teaching, rocked it in field sales, and strutted my stuff
              in international credit control, all leading up to my epic
              graduation from the Northcoders Software Engineering Bootcamp.
            </p>
            <p className="text-2xl mb-4">
              I'm all about tackling new challenges and keeping that learning
              energy alive, especially in the ever-changing tech scene. My
              reputation? It's built on killer problem-solving skills and a
              commitment to dropping innovative solutions. Now, I'm on the hunt
              for a challenging role where I can team up with some tech wizards
              to make a serious impact on our turf! 🚀✨
            </p>
          </div>
          <div>
            <img
              src="https://th.bing.com/th/id/OIG.nNWBeZORNw3eqfdgX5ER?pid=ImgGn"
              alt=""
              className="w-full h-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
