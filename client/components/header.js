import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'

import Accounts from './accounts'



class Header extends Component {
    renderAccountLink(){
        if(!Meteor.userId()){
            return(
                <li>
                    <a href="auths/login">Sign In</a>
                </li>    
            )
        }
        return(
            <Accounts/>
        )
    }
    onBinClick(event){
        event.preventDefault()
        Meteor.call('bins.insert', (error, binId)=>{
            browserHistory.push(`/bins/${binId}`)
        })
        
    }
    render(){
        return (
            <nav className="nav navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand navbrand">
                            <img src="/img/ben2.png"/>
                        </Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                       
                            {this.renderAccountLink()}
                        
                    </ul>
                </div>    
            </nav>
        )
    }
}

export default Header