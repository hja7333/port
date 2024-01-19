import React from "react";

function AboutMe({ darkMode }) {
  return (
    <section
      className={`py-16 w-full p-2 rounded ${
        darkMode ? "dark:bg-slate-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={`py-16 ${darkMode ? "dark:bg-slate-800" : "bg-white"}`}
          >
            <p className="text-2xl mb-4">
              Greetings! 🌟 I am a Full Stack Developer, my journey has seen me
              thrive in legal field sales, excel in teaching, culminating in my
              successful completion of the Northcoders Software Engineering
              Bootcamp.
            </p>
            <p className="text-2xl mb-4">
              Driven by an unquenchable thirst for knowledge, I am passionate
              about embracing new challenges, particularly in the ever-evolving
              tech landscape. My professional identity is forged upon a
              foundation of robust problem-solving skills and an unwavering
              commitment to delivering innovative solutions. I am actively
              seeking a challenging role where I can collaborate with
              accomplished tech professionals to make a significant impact in
              our domain. I bring to the table a determination to contribute
              meaningfully to cutting-edge projects. Let's team up !
            </p>
          </div>
          <div>
            <img
              src="https://github.com/hja7333/port/blob/main/public/OIG_output.avif?raw=true"
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
