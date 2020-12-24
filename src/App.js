import React, { Component } from 'react';
import './App.css';

import FormInput from './components/form/FormInput';
import AllCard from './components/cards/AllCard';
 class App extends Component {
  render() {
    return (
      <div className="App">
        <FormInput />
        <AllCard />
      </div>
    )
  }
}

export default App
