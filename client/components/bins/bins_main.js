import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Bins } from '../../../imports/collections/bins'

import BinsList from './bins_list'

class BinsMain extends Component {
    constructor(){
        super()
        this.state = {user: {}}
    }
    componentWillMount() {
        this.setState({user: Meteor.user()})
    }
    render(){
        if(!this.props.bin) {return <div>Loading...</div>}
        return (
            <div className="binsMain">
                <div className="col-xs-12 col-sm-6">
                    <h1>Bin Profile</h1>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <BinsList user={this.state.user} />
                </div>
            </div>
        )
    }
}
export default createContainer((props)=> {
    Meteor.subscribe('bins')
    Meteor.subscribe('sharedBins')
    Meteor.subscribe('user')
   

    return { user: Meteor.user()}
}, BinsMain)