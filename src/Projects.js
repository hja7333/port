import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const grub = {
    title: "Grub",
    body: (
      <>
        <p>
          We used: BE: Mongoose, MongoDB (hosted with Mongo Atlas), Express,
          Jest, Supertest, Passport.js, Node.JS
        </p>
        <p>
          FE: React Native, React Native maps, React Native google places
          autocomplete, Expo, Android Studio, Axios.
        </p>
        <p>
          Our tech stack choices were made to try to optimise the users
          experience and also to explore wider technologies outside of the PERN
          stack we have become used to.
        </p>{" "}
        <div className="images">
          <img
            src="https://github.com/hja7333/port/blob/main/public/Screenshot%202023-11-02%20at%2017.43.55.png?raw=true"
            alt="Create account screen of the GRUB APP"
          />
          <img
            src="https://github.com/hja7333/port/blob/main/public/Screenshot%202023-11-02%20at%2017.44.35.png?raw=true"
            alt="Map View screenshot of the Grub App"
          />{" "}
        </div>
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
  const breathe = {
    title: "Breathe",
    body: (
      <>
        <p>
          Introducing the Breathe App: An online carbon intensity calculator
          designed and developed during a solo sprint at Northcoders. With a
          focus on sustainability and environmental awareness, this innovative
          app harnesses the power of the carbon intensity API to provide users
          with valuable insights into their local carbon footprint. By simply
          entering their postcode, users can instantly discover the carbon
          intensity in their area, gaining a deeper understanding of the
          environmental impact of their energy usage. This project showcases my
          passion for leveraging technology to create meaningful solutions for a
          greener future. Together, let's take steps towards a more sustainable
          tomorrow.
        </p>

        <p>Technologies used: JavaScript, React, HTML, CSS</p>
        <br />
      </>
    ),

    links: [
      {
        text: "Source Code",
        url: "https://github.com/hja7333/fe-react-data-visualisation",
      },
    ],
  };

  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <div>
          <h2 className="text-3xl font-semibold mb-4">{breathe.title}</h2>
          <p className="text-1.95xl text-gray-600">{breathe.body}</p>

          {breathe.links.map((link, index) => (
            <p key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline animated-link"
              >
                <FontAwesomeIcon icon={faEarthAfrica} bounce /> {link.text}
              </a>
            </p>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">{grub.title}</h2>
          <p className="text-1.95xl text-gray-600">{grub.body}</p>
          <ul className="mt-4 space-y-2">
            {grub.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline animated-link"
                >
                  <FontAwesomeIcon icon={faBowlFood} bounce />
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
