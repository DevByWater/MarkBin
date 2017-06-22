import React, {Component} from 'react'
import { markdown } from 'markdown'


class BinsViewer extends Component {
    constructor(props){
        super(props)

        this.previewFame = document.getElementById('preview')
    }
    // updatePreview(){
    //     let preview = this.previewFame.contentDocument || this.previewFame.contentWindow.document
    //     preview.open()
    //     preview.write(this.props.bin.content)
    //     preview.close()
    // }   
    // timeOut(){
    //     setTimeout(this.updatePreview, 500)
    // }

    render(){
        // const rawHTML = markdown.toHTML(this.props.bin.content);
        return (
            <div className="col-xs-5">
                <h4>Preview</h4>
                <iframe id="preview" srcDoc={this.props.bin.content}></iframe>
            </div>
        )
    }
}

export default BinsViewer