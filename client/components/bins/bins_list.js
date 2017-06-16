import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Bins } from '../../../imports/collections/bins'


class BinsList extends Component {
    onBinClick(event){
        event.preventDefault()
        Meteor.call('bins.insert', (error, binId)=>{
            browserHistory.push(`/bins/${binId}`)
        }) 
    }
    onBinRemove(bin){
        Meteor.call('bins.remove', bin)
    }
    renderList(){
        return this.props.bins.map(bin => {
            const url = `/bins/${bin._id}`
            return (
                <li className="list-group-item" key={bin._id}>
                    <Link to={url}> Bin {bin._id}</Link>
                    <span className="pull-right">
                        <button
                            className="btn btn-danger"
                            onClick={()=> this.onBinRemove(bin)}>
                            Remove
                        </button>
                    </span>
                </li>
            )
        })
    }
    render(){
        console.log(this.props.bins.length)
        if(this.props.bins.length > 0){
             return (
                 <div className="container binList">
                     <ul className="list-group">
                        {this.renderList()}
                    </ul>
                 </div>
            )
        }
        return (
            <div className="container jumbotron emptyBin-container">
                <h2>Looks like you need a bin</h2>
                <button className="btn form_button" onClick={this.onBinClick.bind(this)}>Create a Bin!</button>
            </div>
        )
     
    }
}

export default createContainer(()=>{
    Meteor.subscribe('bins')
    Meteor.subscribe('sharedBins')
    return { bins: Bins.find({}).fetch() }
}, BinsList)