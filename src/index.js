import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();

const spaceId = 'rlz1oc4sgyfk';
const accessToken = 'f5dfdf9b1672f3cbbf5030c269fff9d9a0b349ed42a2a66b3d56ed747185603a';
const url = `https://cdn.contentful.com/spaces/${spaceId}/entries`;

axios.get(url, { headers: { 'Authorization': `Bearer ${accessToken}`}})
        .then(res => console.log(res.data.items[0]));