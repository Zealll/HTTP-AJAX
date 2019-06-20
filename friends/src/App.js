import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Card from './Card.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      error: ''
    }
  }

  componentDidMount(){
    Axios.get('http://localhost:5000/friends')
    .then(res => {
      this.setState({ friends: res.data })
    })
    .catch(err => this.setState({ error: err }))
  }
  render() {
    console.log(this.state.friends)
    return (
      <div className="App">
        
        <Card friends={this.state.friends}/>
        <header className="App-header">
          {this.state.friends.map(eachFriend => (
          <div className='container' key={eachFriend.id}>
            <div className="friendInfo">
            <h2><strong>Name:</strong> {eachFriend.name}</h2>
            <h3><strong>Age:</strong> {eachFriend.age}</h3>
            <h5><strong>Contact:</strong> {eachFriend.email}</h5>
            </div>
          </div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
