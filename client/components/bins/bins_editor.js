import React, {Component} from 'react'
import { Meteor } from 'meteor/meteor'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/mode/htmlmixed/htmlmixed'


import EditorModes from '../../../imports/scripts/editor_modes'



class BinsEditor extends Component {
    constructor(props){
        super(props)

       
        
        this.state = {
             defaultMode: EditorModes.HTML,
             markDown: EditorModes.Markdown,
             files: []
        }
    }

    createNewFile(bin, mode){
        Meteor.call('files.insert', bin._id,  mode, (error, file_result)=>{
            if(error){
                return error.reason
            }
            Meteor.call('bins.updateFiles', bin._id, file_result, (error, bin_result)=>{
                if(error){
                    return error.reason
                }
                console.log('success')
            })

        })
        
    }
    renderFiles(){
        if(this.props.bin.files.length > 0){
            return this.props.bin.files.map(file => {
                <li id={file._id} key={file._id}>=>
                    {file.modeSpec.displayName}
                </li>
            })
        }
    }
    

    onEditorChange(content){
        Meteor.call('files.update', this.props.file, content)
    }
    showFileInput(){
       $('#newFile').toggle()
    }
    

    render(){
        
        return (
            <div className="col-xs-8">
                <h5>Editor</h5>
                <ul className="tab-list">
                    {this.renderFiles()}

                    <li>
                        <form className="form-inline">
                            <input type="text" id="newFile" ref="newFile" className="form-control"/>
                        </form>
                        <button className="btn btn-outline-success"
                            onClick={this.showFileInput}>
                                <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </li>
                </ul>
                <div className="editor-pane">
                    <div id={this.props.file._id} className="tab-pane">  
                        <CodeMirror
                        value={this.props.file.content}
                        onChange={this.onEditorChange.bind(this)}
                        options={this.defaultMode} />
                    </div>
                </div>
            </div>
        )
    }
}

export default BinsEditor
