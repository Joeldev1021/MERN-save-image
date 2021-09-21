import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Notes from "./components/Notes";
import Header from "./components/Header";
import Signin from "./components/Signin";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes().then((res) => setNotes(res));
  }, []);

  const getNotes = async () => {
    const res = await axios("http://localhost:4000/notes");
    return res.data;
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Notes notes={notes} />
        <Signin />
      </div>
    </div>
  );
}

export default App;
