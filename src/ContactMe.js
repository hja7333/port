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
      className={` w-full px-4  p-2 border rounded text-justify ${
        darkMode ? "dark:bg-slate-800 text-white" : "bg-white text-black"
      }`}
    >
      <div>
        <h2
          className={`w-full  px-4 text-2xl mb-4 bg-white shadow-md ${
            darkMode ? "text-white dark:bg-slate-800" : "bg-white"
          }`}
        >
          Hello there!
        </h2>
        <p
          className={`w-full px-4 py-8 text-2xl mb-4 bg-white shadow-md ${
            darkMode ? "text-white dark:bg-slate-800" : "bg-white"
          }`}
        >
          🖐️ I'm always excited to connect with fellow tech enthusiasts and
          potential collaborators. Whether you're interested in discussing
          exciting projects, exploring permanent positions, or freelance
          opportunities, I'm all ears. Let's chat and see where our paths may
          lead. Feel free to drop me a line, and let's start a conversation.
          Looking forward to connecting with you!"
        </p>

        <form onSubmit={sendEmail}>
          <div></div>
          <div
          // className={`w-full text-2xl mb-4 bg-white shadow-md ${
          //   darkMode ? "text-white dark:bg-slate-800" : "bg-white"
          // }`}
          >
            <label
              htmlFor="name"
              className={`block text-lg font-semibold  bg-white shadow-md ${
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
              className={`w-full p-2 border rounded bg-white shadow-md ${
                darkMode ? "text-white dark:bg-slate-800" : "bg-white"
              }`}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`p-2 border bg-white text-primary font-semibold py-2 px-4 rounded hover:bg-secondary shadow-md ${
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
