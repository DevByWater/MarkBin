import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'

export default class AuthenticatedApp extends Component {
    constructor(props){
        super(props)

        this.user = Meteor.userId() !== null
    }
    componentWillMount() {
        if(!this.user){
            this.history.push('auths/login')
        }
    }
    componentDidUpdate(){
        if (!this.user) {
            this.history.push('auths/login');
        }
    }
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

