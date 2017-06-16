import React, { Component } from 'react'

import HomeLinks from './home_links'

class HomeMain extends Component{
    render(){
        return (
                <div>
                    <div className="container home-header">
                        <div className="bens-container">
                            <img src="/img/ben2.png" className="main_ben2" />
                        </div>
                        <h1>Ben the Bin</h1>
                        <h2>Your neighboorhood Markup, HTML, & CSS editor</h2>
                        <h3>Free and Open-Source</h3>
                    </div>
                    <div className="col-sm-4 col-sm-offset-4 home-auth-links">
                        <HomeLinks />
                    </div>   
                </div>
        )
    }
}

export default HomeMain