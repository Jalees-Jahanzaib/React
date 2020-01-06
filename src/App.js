import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state={
    persons:[
      {
        name:'Jalees', age:'20'
      },
      {
        name:'Mayank', age:'21'  
      },
      {
        name:'Fanish', age:'23' 
      }
    ]
  }
  swichNameHandler= () =>{
    this.setState({persons:[
      {
        name:'Jalees Jahanzaib', age:'20'
      },
      {
        name:'Mayank Goyal', age:'21'  
      },
      {
        name:'Fanish Jain', age:'23' 
      }
    ]})
  }
  render() {
    return (
      <div className="App">
        <h1>I m a React App</h1>
        <button onClick={this.swichNameHandler}> switch</button>

        <Person name={this.state.persons[0].name } age={this.state.persons[0].age  } />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age }  />
        <Person name={this.state.persons[2].name } age={this.state.persons[2].age } />


 
      </div>
    );
 // return React.createElement('div',{className:'App'},React.createElement('h1',null,"Is it Working now?")) 

  }
}

export default App;
