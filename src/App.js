import React, { Component } from 'react';
import logo from './friedhead.svg';
import './App.css';


class App extends Component {

    state = {
      pictures: []
  }


// ------ OLD API CALL  ------ //

  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=10`)
    .then(results => { return results.json()})
    .then(data => { let pictures = data.results.map((person) => {

        return (
          <div>
            <img src={person.picture.large}/> 
            <p>{person.email}</p>
          </div>
          )
      })
    this.setState({ pictures: pictures });
    console.log(this.state.pictures)
  })
}


render() {

// ------  THE RETURN BLOCK  ------ //

return (
  <div className="App">


{/* HEADER */}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <h2>Day Twelve / Person Generator</h2>
        </header>


{/* COMPONENTS */}

         {this.state.pictures}     
  
  </div>
  )
 }
}

export default App;

