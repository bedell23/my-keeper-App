import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {/* <Note /> */}
      {notes.map((props) => (
        <Note Key={props.keys} title={props.title} content={props.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
