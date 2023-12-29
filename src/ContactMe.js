import React from "react";
import emailjs from "emailjs-com";

//const emailJsPublicKey = process.env.EMAILJS_PUBLIC_KEY;
function ContactMe({ darkMode }) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ubp03hj",
        "template_uhyfom6",
        e.target,
        "z9JK8fF-kmB82rQzX"
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert(
            "An error occurred while sending the email. Please try again later."
          );
        }
      );

    e.target.reset();
  };

  return (
    <div
      className={` w-full px-4  p-2 rounded ${
        darkMode ? "dark:bg-slate-800 text-white" : "bg-white text-black"
      }`}
    >
      <div>
        <p
          className={`w-full px-4 py-8 text-2xl mb-4 bg-white  ${
            darkMode ? "text-white dark:bg-slate-800" : "bg-white"
          }`}
        >
          Hello there! 🖐️ I'm always excited to connect with fellow tech
          enthusiasts and potential collaborators. Whether you're interested in
          discussing exciting projects, exploring permanent positions, or
          freelance opportunities, I'm all ears. Let's chat and see where our
          paths may lead. Feel free to drop me a line, and let's start a
          conversation. Looking forward to connecting with you!"
        </p>

        <form onSubmit={sendEmail}>
          <div></div>
          <div>
            <label
              htmlFor="name"
              className={`block text-lg font-semibold  bg-white ${
                darkMode ? "text-white dark:bg-slate-800" : "bg-white"
              }`}
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={` w-full p-2 border rounded ${
                darkMode
                  ? "dark:bg-slate-800 text-white"
                  : "bg-white text-black"
              }`}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-lg font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={` w-full p-2 border rounded ${
                darkMode
                  ? "dark:bg-slate-800 text-white"
                  : "bg-white text-black"
              }`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className={`w-full p-2 border rounded bg-white${
                darkMode ? "text-white dark:bg-slate-800" : "bg-white"
              }`}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2${
              darkMode ? "text-white dark:bg-slate-800" : "bg-white"
            }`}
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
