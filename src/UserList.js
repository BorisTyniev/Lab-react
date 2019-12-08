import React, { Component } from 'react';

class UserList extends Component{
    render(){
        return(
            <div className = "UserList">
                <p>{this.props.UserList}</p>
            </div>
        );
    }
}
export default UserList;