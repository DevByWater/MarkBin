import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'

class LoginForm extends Component{
    constructor(props){
        super(props)

        this.state = {  error_reason: '' }
    }
    
    loginUser(event){
        event.preventDefault()

        const username = this.refs.email.value || '',
              password = this.refs.password.value || ''

        Meteor.loginWithPassword(email, password, (error)=>{
            if(error){
                this.setState({error_reason: error.reason})
            } else {
                browserHistory.push('bins/list')
            }
        })

           
    }
    
    render(){
        
        return (
            <form onSubmit={this.loginUser.bind(this)}>
                {this.state.error_reason}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Email" type="email" id="email" ref="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input placeholder="Password" type="password" id="password" ref="password" className="form-control"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary form_button">
                        Log In
                    </button>
                </div>
                <div className="form-group">
                    <a href="/auths/register">Need to register?</a>
                    <a href="#">Forgot password?</a>
                </div>
            </form>
        )
    }
}

export default LoginForm
