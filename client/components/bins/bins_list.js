import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'


import { Bins } from '../../../imports/collections/bins'

import CreateBinModal from './bins_create'


class BinsList extends Component {
    constructor(props){
        super(props)
    }
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
                <li className="list-group-item binList-item" key={bin._id}>
                    <Link to={url}> Bin {bin._id}</Link>
                    <span className="pull-right">
                        <span className="shared-count">
                            <i className="fa fa-users" aria-hidden="true"></i>
                            {bin.sharedWith.length}
                        </span>
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
        console.log(Meteor.user())
        if(this.props.bins.length > 0){
             return (
                 <div className='col-xs-12'>
                    <div className="row create-bin-row">
                        <button className="btn form_button" data-toggle="modal" data-target="#createBinModal">
                            <i className="fa fa-plus"></i> Create Bin
                        </button>
                    </div>
                    <div className="container binList">
                        <h1 className="bin-headers">Your Bins</h1>
                        <ul className="list-group">
                            {this.renderList()}
                        </ul>
                    </div>

                    <CreateBinModal user={Meteor.user()} />

                </div>
            )
        }
        return (
            <div className="container jumbotron emptyBin-container">
                <h2>Looks like you need a bin</h2>

                <button className="btn form-button" data-toggle="modal" data-target="#createBinModal">
                            <i className="fa fa-plus"></i> Create Bin
                </button>
                 <CreateBinModal user={this.props.user}/>

            </div>
        )
     
    }
}

export default createContainer(()=>{
    Meteor.subscribe('bins')
    Meteor.subscribe('sharedBins')
    return { bins: Bins.find({}).fetch() }
}, BinsList)