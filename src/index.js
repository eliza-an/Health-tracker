import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import BoxTracker from "./pages/tracker";
import React, { Component } from 'react';

export default class App extends Component() {
  render(){
  return (
    <Router>
      <div>
        <h2>Welcome to React Router Tutorial</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={"/"} className="nav-link">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to={"/tracker"} className="nav-link">
                tracker
              </Link>
            </li>
            {/* <li>
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li> */}
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/tracker" component={BoxTracker} />
          {/* <Route path="/about" component={About} /> */}
        </Routes>
      </div>
    </Router>
  );}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
