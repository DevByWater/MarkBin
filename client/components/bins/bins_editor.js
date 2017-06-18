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

        })
        
    }
    renderFiles(){
        console.log(this.props.bin)
        if(this.props.bin.files.length > 0){
            return this.props.bin.files.map(file => {
                <li id={file._id} key={file._id}>=>
                    {file.modeSpec.displayName}
                </li>
            })
        }
    }
    

    onEditorChange(content){
        Meteor.call('bins.update', content)
    }
    showFileInput(){
       $('#newFile').toggle()
    }
    

    render(){
        
        return (
            <div className="col-xs-8">
                <h5>Editor</h5>
                <div className="editor-pane">
                    <div  className="tab-pane">  
                        <CodeMirror
                        value="hello"
                        onChange={this.onEditorChange.bind(this)}
                        options={this.defaultMode} />
                    </div>
                </div>
            </div>
        )
    }
}

export default BinsEditor
