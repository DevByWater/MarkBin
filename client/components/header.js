import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'

import Accounts from './accounts'
import EditorModes from '../../imports/scripts/editor_modes'
import CreateBinModal from './bins/bins_create'



class Header extends Component {
    renderCreateBin(){
        if(Meteor.userId()){
            return(
                <li onClick={this.onBinClick.bind(this)}>+ Create Bin</li>
            )
        }
    }

    renderAccountLink(){
        if(!Meteor.userId()){
            return(
                <li>
                    <a href="auths/login">Sign In</a>
                </li>    
            )
        }
        return(
            <li>
                <Accounts/>

            </li>   
        )
    }
    
    onBinClick(event){
        event.preventDefault()
        Meteor.call('bins.insert', (error, binId)=>{
            browserHistory.push(`/bins/${binId}`)
        }) 
    }
    render(){
        console.log(Meteor.user())
        return (
            <nav className="nav navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand navbrand">
                            <img src="/img/ben2.png"/>
                        </Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="btn btn-info" data-toggle="modal" data-target="#createBinModal"><a href="#">
                            <i className="fa fa-plus"></i> Create Bin
                        </a></li>
                       
                        {this.renderAccountLink()}
                    </ul>
                </div>
                <CreateBinModal />    
            </nav>
        )
    }
}

export default Header