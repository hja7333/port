// Projects.js
import React from "react";

const projects = {
  title: "Breathe",
  Body: "Introducing the Breathe App: An online carbon intensity calculator designed and developed during a solo sprint at Northcoders. With a focus on sustainability and environmental awareness, this innovative app harnesses the power of the carbon intensity API to provide users with valuable insights into their local carbon footprint. By simply entering their postcode, users can instantly discover the carbon intensity in their area, gaining a deeper understanding of the environmental impact of their energy usage. This project showcases my passion for leveraging technology to create meaningful solutions for a greener future. Together, let's take steps towards a more sustainable tomorrow.",
  body2: "Technologies used: JavaScript, React, HTML, CSS",
  image: "",
  links: [
    {
      text: "Source Code",
      url: "https://github.com/hja7333/fe-react-data-visualisation",
    },
    //could add another text and url for the actual app if it is online
  ],
};

const grub = {
  title: "Grub",
  body: (
    <>
      <p>
        We used: BE: Mongoose, MongoDB (hosted with Mongo Atlas), Express, Jest,
        Supertest, Passport.js, Node.JS
      </p>
      <p>
        FE: React Native, React Native maps, React Native google places
        autocomplete, Expo, Android Studio, Axios.
      </p>
      <p>
        Our tech stack choices were made to try to optimise the users experience
        and also to explore wider technologies outside of the PERN stack we have
        become used to.
      </p>
      {/* ... Add more content ... */}
    </>
  ),
  links: [
    {
      text: "Frontend Source Code",
      url: "https://github.com/hja7333/GrubFe",
    },
    {
      text: "Backend Source Code",
      url: "https://github.com/hja7333/Grub-BE",
    },
    {
      text: "YouTube Promotional Video",
      url: "https://www.youtube.com/watch?v=PLvoOUOAx5A",
    },
  ],
};

function Projects() {
  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">{projects.title}</h2>
        <p className="text-gray-600">{projects.Body}</p>
        {/* Render other projects ... */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">{grub.title}</h2>
          <div className="text-gray-600">{grub.body}</div>
          <ul className="mt-4 space-y-2">
            {grub.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
