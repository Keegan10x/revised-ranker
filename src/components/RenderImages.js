import React, { Component } from 'react'

export class RenderImages extends Component {

    render() {
        const body = this.props.textData.body
        const results = body.filter(item => item.type==="image")
        const images = results.map(e => <img src={e.model.url} alt={e.model.altText}
            height={e.model.height} width={e.model.width}/>)
        return (
            <figure>
                {images}
            </figure>       
        )
    }
}

export default RenderImages