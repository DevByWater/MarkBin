import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'

import Accounts from './accounts'



class Header extends Component {
    renderAccountLink(){
        if(!Meteor.userId()){
            return(
                <a href="auths/login">Sign In</a>
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
                        <Link to="/" className="navbar-brand">Markbin</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
                        </li>
                    </ul>
                    <div className="nav navbar-nav navbar-right">
                       
                            {this.renderAccountLink()}
                        
                    </div>
                </div>    
            </nav>
        )
    }
}

export default Header