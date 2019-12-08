import React, { Component } from 'react';

class UserCard extends Component{
    render(){
        return(
            <div className = "UserCard">
                <p>{this.props.firstName}</p>
                <p>{this.props.lastName}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.locationCountry}</p>
                <p>{this.props.locationCity}</p>
                <p>{this.props.dobDate}</p>
                <p>{this.props.dobAge}</p>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
            </div>
        );
    }
}
export default UserCard;