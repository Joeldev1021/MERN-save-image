import React from "react";
import "./App.css";
import NotesPages from "./pages/NotesPages";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotesForm from "./pages/NotesForm";
import GlobalNotesProvider from "./context/provider/GlobalNotesProvider";
import GobalUserProvider from "./context/provider/GobalUserProvider";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <Router>
      <GobalUserProvider>
        <GlobalNotesProvider>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route path="/note/edite/:id">
                  <NotesForm />
                </Route>
                <Route path="/notes">
                  <NotesPages />
                </Route>
                <Route path="/auth/signin">
                  <Signin/>
                </Route>
                <Route path="/auth/signup">
                <Signup />
                </Route>
                <Route path="/add">
                  <NotesForm />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </GlobalNotesProvider>
      </GobalUserProvider>
    </Router>
  );
}

export default App;
