import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import BinsEditor from './bins_editor'
import BinsViewer from './bins_viewer'
import BinsShare from './bins_share'
import CreateBinModal from './bins_create'


class BinsWorkplace extends Component {
    constructor(props){
        super(props)


    }


    render(){
        return( 
            <div className="binsWorkplace">
                <div className="create-bin-container">
                    <button className="btn-link" data-toggle="modal" data-target="#createBinModal">
                                <i className="fa fa-plus"></i> Create Bin
                    </button>
                    <CreateBinModal user={this.props.user}/>
                    {this.props.bin.content}
                </div>
                <BinsEditor bin={this.props.bin} />
                <BinsViewer bin={this.props.bin} />
                <BinsShare bin={this.props.bin} />
            </div>
        )
    }
}

export default createContainer((props)=> {
    const { binName } = props.params
    Meteor.subscribe('bins')
    Meteor.subscribe('sharedBins')
    Meteor.subscribe('current_user')
   

    return { bin: Bins.findOne(binName)}
}, BinsWorkplace)