import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'


import FormHandler from '../../handlers/form_handler'

class CreateBinModal extends Component {
    constructor(props){
        super(props)
        this.user = Meteor.users.findOne(Meteor.userId());
        this.state = { fileType: '', binName: ''}
        this.binChecker = FormHandler.checkBinName
    }
    getFileType(file){
        if(file !== 'html' || file !== 'markdown'){
            console.log('this is not a correct file')
            return
        }
        return this.setState({fileType: file})
    }
    onBinNameChange(name){
        this.setState({binName: name})
    }
    onBinClick(state){
       errors = this.binChecker(state.binName)
       if(errors){
           return errors.message
       }
        Meteor.call('bins.insert', state.binName, state.fileType, (error, binName)=>{
            browserHistory.push(`/bins/${binName}`)
        }) 
    }

    render(){
        console.log(this.user)
        return(
            <div className="modal fade" id="createBinModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="creatBinLabel">Create New Bin</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div 
                                onClick = {this.getFileType('html')} 
                                className="col-xs-6 modalFileSelector" 
                                id="htmlFile">
                                    <img src="/img/html5.png" className="modalImage"/>
                                    <h3>HTML</h3>
                                </div>
                                <div 
                                onClick={this.getFileType('markdown')}
                                className="col-xs-6 modalFileSelector"
                                id="mdFile">
                                     <img src="/img/markdown.png" className="modalImage"/>
                                     <h3>Markdown</h3>
                                </div>
                            </div>
                            <div className="container modalInput">
                                <div className="row">
                                    <h4>Bin Name</h4>

                                    <input onChange={this.onBinNameChange.bind(this)}
                                     type="text" className="form-control binName" />

                                </div>
                                <div className="row">
                                    <span className="fullBinName">{this.state.binName}</span>
                                </div>   
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                            <button type="button"
                             onClick={this.onBinClick.bind(this, this.state)}
                             className="btn btn-primary form_button">Create Bin</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateBinModal