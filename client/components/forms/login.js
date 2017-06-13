import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'

class LoginForm extends Component{
    loginWithPassword(e){
        e.preventDefault()

        const email = this.refs.email.value,
              password = this.refs.password.value

        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                console.log("there was an error: ", error.reason)
            }
            return
        })    
    }
    render(){
        return (
            <form onSubmit={this.loginWithPassword()}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Email" type="email" id="email" ref="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input placeholder="Password" type="password" id="password" ref="password" className="form-control"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Log In
                    </button>
                </div>
            </form>
        )
    }
}
