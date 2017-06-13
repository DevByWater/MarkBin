import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Blaze } from 'meteor/blaze'

class Accounts extends Component {
    logOut(){
        Meteor.logout((error)=>{
            if(error){
                 console.log(error.reason)
            }
           
        })
    }

    render(){
        return (
            <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <i className="fa fa-user-o fa-lg"></i>
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                    <li><a href="#" onClick={this.logOut.bind(this)}>Sign Out</a></li>
                    <li><a href="#">Change Password</a></li>
                    <li><a href="#">Edit Profile</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">View Bins</a></li>
                </ul>
            </div>
        )
    }
}
export default Accounts