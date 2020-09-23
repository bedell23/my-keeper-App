import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
const currentTime = currentDate.getHours();

let greeting;

let customStyle = {
  color: "",
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}{" "}
    <h1 className="heading" style={customStyle}>{`${greeting}`}</h1>
  </React.StrictMode>,
  document.getElementById("root")
);
