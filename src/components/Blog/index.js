import React from "react";
import { Route } from "react-router-dom";

import BlogIndex from "./BlogIndex";
import BlogItem from "./BlogItem";

const Blog = () => {
  return (
    <>
      <Route exact path="/blog" component={BlogIndex} />
      <Route path="/blog/:id" component={BlogItem} />
    </>
  );
};

export default Blog;
