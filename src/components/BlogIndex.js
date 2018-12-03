import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    const spaceId = "rlz1oc4sgyfk";
    const accessToken =
      "f5dfdf9b1672f3cbbf5030c269fff9d9a0b349ed42a2a66b3d56ed747185603a";
    const url = `https://cdn.contentful.com/spaces/${spaceId}/entries`;

    axios
      .get(url, { headers: { Authorization: `Bearer ${accessToken}` } })
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
