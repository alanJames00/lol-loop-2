import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}. Author: alanjames.<a href="https://github.com/alanJames00">Github</a></p>
    </footer>
  );
}

export default Footer;
