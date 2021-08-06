import React, { Component } from 'react'

export class RenderParagraphs extends Component {

    render() {
        const body = this.props.textData.body
        const results = body.filter(item => item.type==="paragraph")
        const paragraphs = results.map(e => <p>{e.model.text}</p>)
        return (
            <p>
            {paragraphs}
            </p>  
        )
    }
}

export default RenderParagraphs