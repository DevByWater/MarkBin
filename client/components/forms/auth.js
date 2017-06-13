import React, { Component } from 'react'
import RegisterForm from './register'
import LoginForm from './login'

class AuthForm extends Component {
    
   
    render(){
        action = this.props.params.action
        if(action === 'register'){
            return(
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <RegisterForm />
                    </div>
                </div>
            )
        }
        if(action === 'login'){
            return (
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <LoginForm />
                    </div>
                </div>
            )
        }
        


    }
}

export default AuthForm