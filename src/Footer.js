import React from "react";

function Footer({ darkMode }) {
  return (
    <footer
      className={`bg-white shadow-md ${
        darkMode ? "dark:bg-slate-800" : "bg-white"
      }`}
    >
      <p>
        Designed + Developed by Alan Hunt, COPYRIGHT ©{" "}
        {new Date().getFullYear()} Alan Hunt
      </p>
    </footer>
  );
}

export default Footer;
