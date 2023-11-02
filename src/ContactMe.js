import React from "react";
import emailjs from "emailjs-com";

// const emailJsPublicKey = process.env.EMAILJS_PUBLIC_KEY;
function ContactMe() {
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
    <div className="p-8 bg-primary  text-gray-600 ">
      <h2 className="text-2xl font-semibold mb-4">Hello there!</h2>
      <p className="text-2xl mb-4">
        🖐️ I'm always excited to connect with fellow tech enthusiasts and
        potential collaborators. Whether you're interested in discussing
        exciting projects, exploring permanent positions, or freelance
        opportunities, I'm all ears. Let's chat and see where our paths may
        lead. Feel free to drop me a line, and let's start a conversation.
        Looking forward to connecting with you!"
      </p>
      <form onSubmit={sendEmail}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 border rounded"
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
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-white text-primary font-semibold py-2 px-4 rounded hover:bg-secondary hover:text-white"
        >
          Send Email
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
