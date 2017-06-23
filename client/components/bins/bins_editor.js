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

        this.mode = this.props.bin.mode === 'html' ? EditorModes.HTML : EditorModes.Markdown
        
    }
    
    

    onEditorChange(content){
        Meteor.call('bins.update', this.props.bin, content)
    }
    
    

    render(){
        
        return (
            <div className="col-xs-7">
                <h4>Editor</h4>
                <div className="editor-pane">
                    <div  className="tab-pane">  
                        <CodeMirror
                        id="editor_window"
                        value=""
                        onChange={this.onEditorChange.bind(this)}
                        options={this.mode} />
                    </div>
                </div>
            </div>
        )
    }
}

export default BinsEditor
