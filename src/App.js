//jshint esversion: 8
import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Composer from "./components/Composer";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(typedText, setTypedText) {
    setNotes(() => [...notes, typedText]);
    setTypedText({title: "", body: ""});
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <div className="App">
      <div id="content-wrap">
        <Header />
        <Composer onSubmitted={addNote} />{" "}
        <div className="innerContent">
          {" "}
          {notes.map((note, index) => (
            <Card
              key={index}
              onDelete={deleteNote}
              id={index}
              title={<em> {note.title} </em>}
              body={note.body}
              imgUrl={"http://placekitten.com/g/250/150"}
              maxText={200}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
