import React, { Component } from 'react'

export class RenderList extends Component {

    render() {
        const body = this.props.textData.body
        const results = body.filter(item => item.type==="list")
        const listObjs = results.map(e => e.model.items)
        const lists = listObjs.map(e => <ul>{e.map(se => <li key={se}>{se}</li>)}</ul>)
        return (
            <div>
                {lists}
            </div>
        )
    }
}

export default RenderList