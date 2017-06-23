import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Accounts } from 'meteor/accounts-base'

import FormValidator from '../../../imports/scripts/form_validator'

class RegisterForm extends Component{
    constructor(props){
        super(props)

        this.state ={
            error_reason : {
                default: '',
                pwdFormat: '',
                pwdMatch: '',
                email: '',
                username: ''
            }
        }
    }
   
    createUser(event){
        event.preventDefault()

        const email = this.refs.email.value,
              username = this.refs.username.value,
              password = this.refs.password.value,
              confirm_password = this.refs.confirm_password.value,
              url = `bins/${username}`
              
        
        Accounts.createUser({ email, username, password}, (error)=>{
            if(error){
                 this.setState({error_reason: {default: error.reason} })
            } else if(!FormValidator.checkEmailFormat(email)){
               FormValidator.emailFormatError()
               this.setState({error_reason: {email: FormValidator.error_message.email}})
            } else if(!FormValidator.checkPasswordFormat(password)) {
                FormValidator.passwordFormatError()
                this.setState({error_reason: {pwdFormat: FormValidator.error_message.password}})
            } else if(!FormValidator.matchPasswords(password, confirm_password)){
                FormValidator.matchError()
                this.setState({error_reason: {pwdMatch: FormValidator.error_message.}})
            } else {
                browserHistory.push(url)
            }

        })
    }
    render(){
        return (
            <form onSubmit={this.createUser.bind(this)}> 
                <div className="error-group danger">{this.state.error_reason.default}</div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Email" type="email" id="email" ref="email" className="form-control" required/>
                    <span className="error-span">{this.state.error_reason.email}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input placeholder="Username" type="text" id="username" ref="username" className="form-control" required/>
                    <span className="error-span">{this.state.error_reason.username}</span>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input placeholder="Password" type="password" id="password" ref="password" className="form-control" required/>
                    <span className="error-span">{this.state.error_reason.pwdFormat}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirm Password:</label>
                    <input placeholder="Confirm Password" type="password" id="confirm_password" ref="confirm_password" className="form-control" required/>
                    <span className="error-span">{this.state.error_reason.pwdMatch}</span>
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
