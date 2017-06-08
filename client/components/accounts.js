import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Template } from 'meteor/templating'
import { Blaze } from 'meteor/blaze'

class Accounts extends Component {
    componentDidMount() {
        // Render blaze accounts form
        this.view = Blaze.render(Template.loginButtons, 
                                ReactDOM.findDOMNode(this.refs.login_container))
        

    }

    componentWillUnmount() {
        Blaze.remove(this.view)
    }

    render(){
        return (
            <div ref="login_container">
            </div>
        )
    }
}
export default Accounts