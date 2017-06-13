import React, { Component } from 'react'

class HomeLinks extends Component {
    render(){
        return (
             <div className="container home-auth">
                   <div className="col-sm-6">
                        <a className="btn btn-lg btn-default" href="auths/register">Register</a>
                   </div>
                    <div className="col-sm-6">
                        <a className="btn btn-lg btn-primary" href="auths/login">Log In</a>
                   </div>
                </div>
        )
    }
}

export default HomeLinks