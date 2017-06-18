import React, {Component} from 'react'
import { markdown } from 'markdown'

class BinsViewer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        // const rawHTML = markdown.toHTML(this.props.bin.content);
        return (
            <div className="col-xs-4">
                <h5>Viewer</h5>
                <div>This is the html viewer</div>
            </div>
        )
    }
}

export default BinsViewer