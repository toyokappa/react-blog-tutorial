import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import BlogIndex from "./BlogIndex";
import Contact from "./Contact";

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={BlogIndex} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default Wrapper;
