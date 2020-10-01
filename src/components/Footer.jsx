import React from "react";

const thisYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {thisYear}</p>;
    </footer>
  );
}

export default Footer;