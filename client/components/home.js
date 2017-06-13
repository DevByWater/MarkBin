import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

import BinsList from './bins/bins_list'


class Home extends Component {
    render(){

        if(!Meteor.userId()){
             return (
                <div className="container home-auth">
                   <div className="col-sm-6">
                        <button className="btn btn-lg btn-default">Register</button>
                   </div>
                    <div className="col-sm-6">
                        <button className="btn btn-lg btn-primary">Log In</button>
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