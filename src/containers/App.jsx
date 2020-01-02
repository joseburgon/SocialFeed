import React, { useState, useEffect } from 'react';
import SocialFeed from '../components/SocialFeed';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../assets/styles/App.scss';

const App = () => {
  // const initialState = useInitialState(API);
  return (
    <div className='App'>
      <SocialFeed />
    </div>
  );
}

export default App;
