import React, {Component} from 'react'

class BinsShare extends Component {
    onShareClick(){
        const username = this.refs.username.value
        Meteor.call('bins.share', this.props.bin, username)
    }
    renderSharedList(){
        return this.props.bin.sharedWith.map(username => {
            return <button 
                key={username}
                className="btn btn-default"> 
                {username}
                </button>
        })
    }

    render(){
        return (
            <footer className="bins-share">
                <div className="input-group">
                    <input ref="username" className="form-control" />
                    <div className="input-group-btn">
                        <button 
                        onClick={this.onShareClick.bind(this)}
                        className="btn btn-default">
                            Share Bin
                        </button>
                    </div>
                </div>
                <div>
                    Shared With:
                </div>
                <div className="btn-group">
                    {this.renderSharedList()}
                </div>
            </footer>
        )
    }
}

export default BinsShare