import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'

class LoginForm extends Component{
    constructor(props){
        super(props)

        this.state = { error: {} }
    }
    loginWithPassword(event){
        event.preventDefault()

        const email = this.refs.email.value,
              password = this.refs.password.value

        Meteor.loginWithPassword(email, password, (error)=>{
            this.setState({error})
        })    
    }
    render(){
        return (
            <form onSubmit={this.loginWithPassword}>
                <div className="error-group">{error.reason}</div>
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

export default LoginForm
