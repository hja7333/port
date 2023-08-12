import React from "react";

const contactMeText = {
  title: "Hello there!",
  body: "Feel free to get in touch with me for any inquiries or opportunities. I'm open to collaborations, discussions, and exploring exciting projects together. Whether you want to chat about software development, share insights, or discuss potential ventures, I'm here to listen and respond. Feel free to contact me via email at [Your Email Address]. I'm eager to connect and look forward to hearing from you!",
};

function ContactMe() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{contactMeText.title}</h2>
      <p>{contactMeText.body}</p>
    </div>
  );
}

export default ContactMe;
