import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'
import { Meteor } from 'meteor/meteor'

import BinsList from './bins/bins_list'
import HomeMain from './home/home_main'
import HomeGoto from './home/home_goto'


class Home extends Component{
    renderHome(){
        if(!Meteor.userId()){
            return <HomeMain />
        }
        return <HomeGoto />
    }

    render(){
        return(
             <div className="home-auth-container">
                <div className="jumbotron home-container">
                    {this.renderHome()}
                </div>
             </div>   
        )
    }
    
}

export default Home