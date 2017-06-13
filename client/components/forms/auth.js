import React, { Component } from 'react'
import RegisterForm from './register'

class AuthForm extends Component {
    formType = this.props.formType
    render(){
        if(formType === 'register')
        return(
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <RegisterForm />
                </div>
            </div>
        )
    }
}