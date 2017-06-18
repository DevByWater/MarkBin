import React, { Component } from 'react'


import BinsEditor from './bins_editor'
import BinsViewer from './bins_viewer'


class BinsWorkplace extends Component {
    constructor(props){
        super(props)

    }

    render(){
        return( 
            <div className="binsWorkplace">
                <BinsEditor bin={this.props.bin}  />
                <BinsViewer bin={this.props.bin} />
            </div>
        )
    }
}

export default BinsWorkplace