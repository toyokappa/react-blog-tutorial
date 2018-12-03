import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default Wrapper;
