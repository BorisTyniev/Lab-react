import React, { Component } from 'react';
import UserAvatar from './UserAvatar';
import './App.css';

import UserCard from './UserCard';


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
            <UserAvatar avatar = {person.picture.large}/>
            <UserCard 
            firstName = {person.name.first} 
            lastName = {person.name.last} 
            gender = {person.gender} 
            locationCountry = {person.location.country} 
            locationCity = {person.location.city}
            dobDate = {person.dob.date}
            dobAge = {person.dob.age}
            phone = {person.phone}
            email = {person.email}
            />            
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
        

        </header>


{/* COMPONENTS */}
  {this.state.pictures}

         
  
  </div>
  )
 }
}

export default App;

