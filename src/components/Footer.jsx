import React from "react";

const thisYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {thisYear}</p>
      <p>Created Doloquee M. Bedell jr</p>
    </footer>
  );
}

export default Footer;
