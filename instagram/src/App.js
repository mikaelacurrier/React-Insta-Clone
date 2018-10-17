import React, { Component } from 'react';
import PostPage from './components/PostContainer/components/PostPage';

import './App.css';
import './components/SearchBar/components/search.css';
import './components/PostContainer/components/container.css';
import './components/CommentSection/components/comment.css';
import Authenticate from './components/Authentication/components/Authenticate';



class App extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <Authenticate />
    );
  }
}

export default App;
