import React, { Component } from 'react'
import RegisterForm from './register'
import LoginForm from './login'

class AuthForm extends Component {
    
   
    render(){
        action = this.props.params.action
        if(action === 'register'){
            return(
                <div className="auth-container">
                    <div className="col-sm-6 col-sm-offset-3 form_wrapper">
                        <h1>Register</h1>
                        <RegisterForm />
                    </div>
                </div>
            )
        }
        if(action === 'login'){
            return (
                <div className="auth-container">
                    <div className="col-sm-6 col-sm-offset-3 form_wrapper">
                        <h1>Log In</h1>
                        <LoginForm />
                    </div>
                </div>
            )
        }
        


    }
}

export default AuthForm