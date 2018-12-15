import React from "react";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/androidstudio.css";

class Markdown extends React.Component {
  componentWillMount() {
    marked.setOptions({
      sanitize: true,
      langPrefix: "hljs language-",
      highlight: (code, lang) => {
        return hljs.highlightAuto(code, [lang]).value;
      }
    });
  }

  render() {
    const html = marked(this.props.body);
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }
}

export default Markdown;
