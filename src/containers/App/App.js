import React, { Component } from 'react';

import LeftNavigation from '../../components/LeftNavigation';
import Main from '../../components/Main';

//import './App.css';

class App extends Component {
  render() {
    return (
        <div className="app-container">
            <LeftNavigation />
            <Main />
        </div>
    );
  }
}

export default App;
