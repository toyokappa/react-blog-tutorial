import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  componentDidMount() {
    this.setBlogContent();
  }

  setBlogContent() {
    const spaceId = 'rlz1oc4sgyfk';
    const accessToken = 'f5dfdf9b1672f3cbbf5030c269fff9d9a0b349ed42a2a66b3d56ed747185603a';
    const url = `https://cdn.contentful.com/spaces/${spaceId}/entries`;

    axios.get(url, { headers: { 'Authorization': `Bearer ${accessToken}`}})
      .then(res => {
        const blogItem = res.data.items[0].fields;
        this.setState({
          title: blogItem.title,
          body: blogItem.body
        })
      });
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>{this.state.body}</p>
      </div>
    );
  }
}

export default App;
