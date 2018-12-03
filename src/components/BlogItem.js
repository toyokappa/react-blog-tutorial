import React, { Component } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import * as moment from "moment";

class BlogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      errorMsg: "",
      title: "",
      eyeCatchUrl: "https://via.placeholder.com/600x400?text=NoImage",
      body: "",
      createdAt: "",
      updatedAt: ""
    };
  }

  componentWillMount() {
    this.setBlogContent();
  }

  setBlogContent() {
    const spaceId = "rlz1oc4sgyfk";
    const { id } = this.props.match.params;
    const url = `https://cdn.contentful.com/spaces/${spaceId}/entries/${id}`;
    const accessToken =
      "f5dfdf9b1672f3cbbf5030c269fff9d9a0b349ed42a2a66b3d56ed747185603a";

    axios
      .get(url, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then(res => {
        const blogItem = res.data;
        const eyeCatchId = blogItem.fields.eyeCatch.sys.id
        if (eyeCatchId) this.setBlogEyeCatch(eyeCatchId);
        this.setState({
          title: blogItem.fields.title,
          body: blogItem.fields.body,
          createdAt: blogItem.sys.createdAt,
          updatedAt: blogItem.sys.updatedAt
        });
      })
      .catch(error => {
        const errorRes = error.response;
        let errorInfo = { isError: true };
        if (errorRes.status === 404) {
          errorInfo["errorMsg"] =
            "指定したコンテンツは存在しないか削除されました。";
        } else {
          errorInfo["errorMsg"] = "予期せぬエラーが発生しました。";
        }
        this.setState(errorInfo);
      });
  }

  setBlogEyeCatch(id) {
    const spaceId = "rlz1oc4sgyfk";
    const url = `https://cdn.contentful.com/spaces/${spaceId}/assets/${id}`;
    const accessToken =
      "f5dfdf9b1672f3cbbf5030c269fff9d9a0b349ed42a2a66b3d56ed747185603a";

    axios
      .get(url, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then(res => {
        const eyeCatchUrl = res.data.fields.file.url;
        this.setState({ eyeCatchUrl: eyeCatchUrl });
      });
  }

  render() {
    const { isError, errorMsg, title, eyeCatchUrl, body, createdAt, updatedAt } = this.state;
    if (isError) return <div>{errorMsg}</div>;

    return (
      <div>
        <h1>{title}</h1>
        <img src={eyeCatchUrl} alt="eye_catch" />
        <div>作成日: {moment(createdAt).format("YYYY.MM.DD HH:mm")}</div>
        <div>更新日: {moment(updatedAt).format("YYYY.MM.DD HH:mm")}</div>
        <ReactMarkdown source={body} />
      </div>
    );
  }
}

export default BlogIndex;
