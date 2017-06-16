import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'



class HomeGoto extends Component{
    constructor(props){
        super(props)

        this.url = 'bins/list'
    }
    onBinClick(event){
        event.preventDefault()
        Meteor.call('bins.insert', (error, binId)=>{
            browserHistory.push(`/bins/${binId}`)
        }) 
    }
    goTo(url){
       return browserHistory.push(url)
    }
    render(){
        return(
             <div className="container jombotron goToMenu">
                <h1>Hey there!</h1>
                <ul className="col-sm-10 col-sm-col-xs-offset-1 goToMenu-list">
                    <li className="col-xs-12">
                        <button className="btn btn-lg btn-home-reg" onClick={this.goTo(this.url)}>
                            Go to Bins
                        </button>
                    </li>
                    <li className="col-xs-12">
                        <button className="btn btn-lg btn-home-login" onClick={this.onBinClick.bind(this)}>
                            Create Bin
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HomeGoto