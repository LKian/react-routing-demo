import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Photo from "./components/Photo";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-container">
          <Nav />
          <div className="page">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route exact path="/gallery" component={Gallery} />
              <Route path="/gallery/:id" component={Photo} />
              <Route path="/news" component={News} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
