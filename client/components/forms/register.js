import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Accounts } from 'meteor/accounts-base'

class RegisterForm extends Component{
    constructor(props){
        super(props)

        this.state ={error_reason : ''}
    }
   
    createUser(event){
        event.preventDefault()

        const email = this.refs.email.value,
              username = this.refs.username.value,
              password = this.refs.password.value,
              confirm_password = this.refs.confirm_password.value
              
        
        Accounts.createUser({ email, username, password}, (error)=>{
            if(error){
                 this.setState({error_reason: error.reason})
            } else {
                browserHistory.push('/app/bins')
            }
        })
    }
    render(){
        return (
            <form onSubmit={this.createUser.bind(this)}>
                <div className="error-group danger">{this.state.error_reason}</div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Email" type="email" id="email" ref="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input placeholder="Username" type="text" id="username" ref="username" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input placeholder="Password" type="password" id="password" ref="password" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirm Password:</label>
                    <input placeholder="Confirm Password" type="password" id="confirm_password" ref="confirm_password" className="form-control"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary form_button">
                        Register
                    </button>
                </div>
                <div className="form-group">
                    <a href="/auths/login">Already have an account?</a>
                </div>
            </form>
        )
    }
}

export default RegisterForm
