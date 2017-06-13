import React, { Component } from 'react'
import { Link } from 'react-router'
import { Meteor } from 'meteor/meteor'

import BinsList from './bins/bins_list'


class Home extends Component {

    
    render(){

        if(!Meteor.userId()){
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
        return (
            <div className="container home-binList">
                <BinsList/>
            </div>
        )   
        
    }  
}

export default Home