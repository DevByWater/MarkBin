import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base'

class RegisterForm extends Component{
    constructor(props){
        super(props)

        this.state ={error: {}}
    }
   
    createUser(event){
        event.preventDefault()

        const email = this.refs.email.value,
              password = this.refs.password.value,
              confirm_password = this.refs.confirm_password.value
              
        
        Accounts.createUser({ email, password}, (error)=>{
          this.setState({error: error})
        })
    }
    render(){
        return (
            <form onSubmit={this.createUser.bind(this)}>
                <div className="error-group">{this.state.error.reason}</div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Email" type="email" id="email" ref="email" className="form-control"/>
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
            </form>
        )
    }
}

export default RegisterForm
