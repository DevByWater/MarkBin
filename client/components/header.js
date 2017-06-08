import React, { Component } from 'react'
import Accounts from './accounts'


class Header extends Component {
    onBinClick(event){
        event.preventDefault()
        Meteor.call('bins.insert')
        console.log('bin inserted')
    }
    render(){
        return (
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <a className="nav navbar-brand">MarkBin</a>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <a><Accounts /></a>
                    </li>
                    <li>
                        <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header