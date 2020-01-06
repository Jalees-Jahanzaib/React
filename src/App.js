import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I m a React App</h1>
        <Person name='Jalees' age='20' />
        <Person name='Mayank' age='21' />
        <Person name='Fanish' age='23' />


 
      </div>
    );
 // return React.createElement('div',{className:'App'},React.createElement('h1',null,"Is it Working now?")) 

  }
}

export default App;
