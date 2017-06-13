import React, { Component } from 'react'
import { Link } from 'react-router'
import { Meteor } from 'meteor/meteor'

import BinsList from './bins/bins_list'
import HomeMain from './home/home_main'


class Home extends Component {

    
    render(){

        if(!Meteor.userId()){
             return (
               <HomeMain />
            )
        }
        return (
            <div className="container home-binList">
                <BinsList/>
            </div>
        )   
        
    }  
}

export default Home