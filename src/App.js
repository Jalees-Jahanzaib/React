import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
      {
        name: 'Jalees', age: '20'
      },
      {
        name: 'Mayank', age: '21'
      },
      {
        name: 'Fanish', age: '23'
      }
    ]
  }
  swichNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName, age: '20'
        },
        {
          name: 'Mayank Goyal', age: '21'
        },
        {
          name: 'Fanish Jain', age: '23'
        }
      ]
    })
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Jalees Jahanzaib', age: '20'
        },
        {
          name: event.target.value, age: '21'
        },
        {
          name: 'Fanish Jain', age: '23'
        }
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <h1>New Start</h1>
        <button onClick={this.swichNameHandler.bind(this, 'Jala Boy')}> switch</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.swichNameHandler.bind(this, "JJ in the House")} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangeHandler} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />



      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,"Is it Working now?")) 

  }
}

export default App;
