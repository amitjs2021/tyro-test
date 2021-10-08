import React from "react";
import { Switch, Route } from "react-router-dom";

//local imports
import About from "./About";
import Error from "./Error";

//components imports
import Home from "./Home";
import Navbar from "./Navbar";
import Movie from "./SingleMovie";
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
