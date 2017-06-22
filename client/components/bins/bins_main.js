import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Bins } from '../../../imports/collections/bins'

import BinsList from './bins_list'

class BinsMain extends Component {
    render(){
        if(!this.props.bin) {return <div>Loading...</div>}
        return (
            <div className="binsMain">
                <div className="col-xs-12 col-sm-6">
                    <h1>Bin Profile</h1>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <BinsList />
                </div>
            </div>
        )
    }
}
export default createContainer((props)=> {
    const { binId } = props.params
    Meteor.subscribe('bins')
    Meteor.subscribe('sharedBins')
    Meteor.subscribe('current_user')
   

    return { bin: Bins.findOne(binId)}
}, BinsMain)