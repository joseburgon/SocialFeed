import React from 'react';
import Header from '../components/Header';
import Post from '../components/Post';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Post />
  </div>
);

export default App;
