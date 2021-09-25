import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import NotesPages from "./pages/NotesPages";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotesForm from "./pages/NotesForm";

function App() {
  const [notes, setNotes] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    
    getNotes().then((res) => setNotes(res));
  }, [status]);

  const getNotes = async () => {
    const res = await axios("http://localhost:4000/note");
    return res.data;
  };

  const createNote = async (newNote) => {
    await axios({
      method: "POST",
      headers: { "content-type": "application/json" },
      data: {
        title: newNote.title,
        description: newNote.description,
      },
      url: "http://localhost:4000/note/add",
    });
    setStatus(!status);
  };

  const deleteNote = async (id) => {
    await axios({
      method: "DELETE",
      url: `http://localhost:4000/note/delete/${id}`,
     })
     setStatus(!status);
  };

  const editeNote = async(note) => {
       console.log(note)
       await axios({
         method: "PUT",
         data :{
             title: note.title,
             description: note.description,
         },
         url: `http://localhost:4000/note/edite/${note._id}`
       })
      setStatus(!status);
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
          <Route path="/note/edite/:id">
              <NotesForm notes={notes} editeNote={editeNote} />
            </Route>
            <Route path="/notes">
              <NotesPages notes={notes} deleteNote={deleteNote} />
            </Route>
            <Route path="/sign">
              <Signin />
            </Route>
            <Route path="/add">
              <NotesForm createNote={createNote} />
            </Route> 
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
