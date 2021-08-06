import React, { Component } from 'react'

export class RenderTitle extends Component {

    render() {
        return (
            <h1>{this.props.textData.title}</h1>
        )
    }
}

export default RenderTitle