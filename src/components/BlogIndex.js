import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getEntries } from "../api/contentfulApi";

class BlogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogIndex: []
    };
  }

  componentDidMount() {
    this.setBlogContent();
  }

  setBlogContent() {
    getEntries()
      .then(res => {
        const blogList = res.data.items;
        const blogIndex = blogList.map(blogItem => {
          return { id: blogItem.sys.id, title: blogItem.fields.title };
        });
        this.setState({ blogIndex: blogIndex });
      });
  }

  renderBlogIndex(index) {
    const blogIndex = index.map(item => {
      return (
        <li key={item.id}>
          <Link to={`blog/${item.id}`}>{item.title}</Link>
        </li>
      );
    });
    return <ul>{blogIndex}</ul>;
  }

  render() {
    return <div>{this.renderBlogIndex(this.state.blogIndex)}</div>;
  }
}

export default BlogIndex;
