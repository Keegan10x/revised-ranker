import React, { Component } from 'react'

export class RenderHeadding extends Component {

    render() {
        const body = this.props.textData.body
        const result = body.filter(item => item.type==="heading")
        const headding = result[0].model.text
        return (
            <h3>
                {headding}
            </h3>          
        )
    }
}

export default RenderHeadding


