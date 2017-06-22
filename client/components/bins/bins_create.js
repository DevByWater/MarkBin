import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'


import FormHandler from '../../handlers/form_handler'

class CreateBinModal extends Component {
    constructor(props){
        super(props)
        this.state = {
             mode: '',
             binName: ''
            }
        // this.email = this.props.user.email[0].address
        this.binChecker = FormHandler.checkBinName
        
    }
    setFileType(file){
        this.setState({fileType: file})
        console.log(this.state.fileType)
    }
    onBinNameChange(name){
        this.setState({binName: name.target.value })
    }
    onBinClick(){
       errors = this.binChecker(this.state.binName)
       if(errors){
           return errors.message
       }
        Meteor.call('bins.insert', this.state.binName , this.state.mode, (error, binName)=>{
            browserHistory.push(`/bins/${binName}`)
        }) 
    }

    render(){
       console.log(this.props.user)
        return(
            <div className="modal fade" id="createBinModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="creatBinLabel">Create New Bin</h4>
                        </div>
                        <div className="modal-body">
                            <h4>Choose file format</h4>
                            <div className="row">
                                <div 
                                onClick = {()=>{this.setFileType('html')}} 
                                className="col-xs-6 modalFileSelector" 
                                id="htmlFile">
                                    <img src="/img/html5.png" className="modalImage"/>
                                    <h3>HTML</h3>
                                </div>
                                <div 
                                onClick={()=>{this.setFileType('markdown')}}
                                className="col-xs-6 modalFileSelector"
                                id="mdFile">
                                     <img src="/img/markdown.png" className="modalImage"/>
                                     <h3>Markdown</h3>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="modalInput">
                                <div className="col-xs-12">
                                    <h5 className="col-xs-12">Bin Name</h5>

                                    <input onChange={this.onBinNameChange.bind(this)}
                                     type="text"
                                      className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 binName" />

                                </div>
                                <div className="col-xs-12">
                                    <span className="fullBinName">{this.state.binName}</span>
                                </div>   
                            </div>
                            <div className="col-xs-12 modalButtons">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                                <button type="button"
                                onClick={this.onBinClick.bind(this)}
                                className="btn btn-primary form_button">Create Bin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateBinModal