import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./navs/About";
import Error from "./navs/Error";

import Home from "./navs/Home";
import Navbar from "./navs/Navbar";
import Movie from "./components/SingleMovie";
import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies/:id">
          <Movie />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
