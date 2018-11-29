import React, { Component } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import * as moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      createdAt: "",
      updatedAt: ""
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
        const blogItem = res.data.items[0];
        console.log(blogItem);
        this.setState({
          title: blogItem.fields.title,
          body: blogItem.fields.body,
          createdAt: blogItem.sys.createdAt,
          updatedAt: blogItem.sys.updatedAt
        });
      });
  }

  render() {
    const { title, body, createdAt, updatedAt } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <div>作成日: {moment(createdAt).format("YYYY.MM.DD HH:mm")}</div>
        <div>更新日: {moment(updatedAt).format("YYYY.MM.DD HH:mm")}</div>
        <ReactMarkdown source={body} />
      </div>
    );
  }
}

export default App;
