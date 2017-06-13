import React, { Component } from 'react'

import HomeLinks from './home_links'

class HomeMain extends Component{
    render(){
        return (
            <div className="jumbotron home-container">
                <div className="container home-header">
                    <h1>Ben the Bin</h1>
                    <h3>Lets jump in!</h3>
                </div>
                <div className="col-sm-4 col-sm-offset-4 home-auth-links">
                    <HomeLinks />
                </div>   
            </div>
        )
    }
}

export default HomeMain