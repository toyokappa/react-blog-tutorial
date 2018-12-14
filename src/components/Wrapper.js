import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";

class Wrapper extends Component {
  render() {
    return (
      <Container fluid>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Container>
    );
  }
}

export default Wrapper;
