import React, { Component } from 'react'

class HomeGoto extends Component{
    render(){
        return(
             <div className="container jombotron goToMenu">
                <h1>Hey there!</h1>
                <ul className="col-sm-10 col-sm-col-xs-offset-1 goToMenu-list">
                    <li className="col-xs-12">
                        <button className="btn-home-reg" href="bins/list">Go to Bins</button>
                    </li>
                    <li className="col-xs-12">
                        <button className="btn-home-login">Create Bin</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HomeGoto