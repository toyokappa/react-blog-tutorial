import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import * as moment from "moment";
import { getEntry, getAsset } from "../api/contentfulApi";

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
    const { id } = this.props.match.params;
    getEntry(id)
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
    getAsset(id)
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
