import React, { Component } from 'react'
import ParseArticleData from './ParseArticleData.js';

export default class RankArticles extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.goHome = this.goHome.bind(this)
        this.state = {
          article1:0,
          article2:0,
          article3:0,
          article4:0,
          article5:0,
          shouldShowHome: false
        };
      }

    goHome(){
        this.setState({
            shouldShowHome: true,
        })
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        })
    } 
    
    handleSubmit(event){
        event.preventDefault()
        this.setState({
            submit: this.state
        });
        console.log(this.state)
    }

    render() {
        if(this.state.shouldShowHome){
            return <ParseArticleData/>
        }
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label for="article1">Article1 Rank: {this.state.article1}</label>
                <input type="range" name="article1" value={this.state.article1} min="0" max="5"
                onChange={this.handleChange}/>

                <label for="article2">Article2 Rank: {this.state.article2}</label>
                <input type="range" name="article2" value={this.state.article2} min="0" max="5"
                onChange={this.handleChange}/>

                <label for="article2">Article3 Rank: {this.state.article3}</label>
                <input type="range" name="article3" value={this.state.article3} min="0" max="5"
                onChange={this.handleChange}/>

                <label for="article4">Article4 Rank: {this.state.article4}</label>
                <input type="range" name="article4" value={this.state.article4} min="0" max="5"
                onChange={this.handleChange}/>

                <label for="article5">Article5 Rank: {this.state.article5}</label>
                <input type="range" name="article5" value={this.state.article5} min="0" max="5"
                onChange={this.handleChange}/>

                <button type="submit">Submit</button>
            </form>
            <section>
                <p>Output to database</p>
                { this.state.submit != null
                    ?<p>{JSON.stringify(this.state.submit, null, 2)}</p>
                    :<p>No data submitted</p>
                }
            </section>
            <button onClick={this.goHome}>Home</button>
            </div>
        )
    }
}