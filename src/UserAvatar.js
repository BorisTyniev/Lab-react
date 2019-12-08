import React, { Component } from 'react';

class UserAvatar extends Component{
    render(){
        

        return(
            <div className="UserAvatar">
                <img src = {this.props.avatar}/>
            </div>
        );
    }
}
export default UserAvatar;