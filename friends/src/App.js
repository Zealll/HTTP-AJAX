import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount(){
    Axios.get('http://localhost:5000/friends')
    .then(res => {
      this.setState({friends: res.data})
    })
    .catch(err => {})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.friends.map(eachFriend => (
          <div className='container'>
            <div className="friendInfo">
            <h2><name>Name:</name> {eachFriend.name}</h2>
            <h3><age>Age:</age> {eachFriend.age}</h3>
            <h5><contact>Contact:</contact> {eachFriend.email}</h5>
            </div>
          </div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
