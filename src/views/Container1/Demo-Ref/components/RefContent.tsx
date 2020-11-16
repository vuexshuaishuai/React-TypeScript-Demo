import React, { Component } from 'react'
import "./RefContent.css"

class HomeContent extends Component<any> {
    state = {}

    render() {
        return (
            <div className="content">
                {this.props.data}
            </div>
        )
    }
}

export default HomeContent
