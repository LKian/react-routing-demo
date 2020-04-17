import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
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
              <Route path="/shop" component={Shop} />
              <Route path="/link3" component={About} />
              <Route path="/##" component={Shop} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
