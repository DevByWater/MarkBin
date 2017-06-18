import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Bins } from '../../../imports/collections/bins'

import BinsWorkplace from './bins_workplace'
import BinsShare from './bins_share'

class BinsMain extends Component {
    render(){
        if(!this.props.bin) {return <div>Loading...</div>}
        return (
            <div className="binsMain">
                <BinsWorkplace bin={this.props.bin} />
                <BinsShare  bin={this.props.bin} />
            </div>
        )
    }
}
export default createContainer((props)=> {
    const { binId } = props.params
    Meteor.subscribe('bins')
    Meteor.subscribe('sharedBins')

    return { bin: Bins.findOne(binId)}
}, BinsMain)