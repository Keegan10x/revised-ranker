import React from 'react';
import RenderTitle from './RenderTitle.js';
import RenderHeadding from './RenderHeadding.js';
import RenderParagraphs from './RenderParagraphs.js';
import RenderImages from './RenderImages.js';
import RenderList from './RenderList.js';
import RankArticles from './RankArticles.js';

const URLs = [
    'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json',
    'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-2.json',
    'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json',
    'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-4.json',
    'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-5.json',
]

export default class ParseArticleData extends React.Component {
    constructor(props) {
      super(props);
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
      this.toRank = this.toRank.bind(this)
      this.state = {
        index: -1,
        articleData:null,
        canShowRanker:false,
      };
    }

    toRank(){
      this.setState({
          canShowRanker:true
      })
    }

    async increment(){
      let data = null
      let response = null
      if (this.state.index < 5){
        response = await fetch(URLs[this.state.index+1])
        data = await response.json()

        this.setState((prevState) => {
          if(prevState.index < 5){
            return {
              index: prevState.index + 1,
              articleData: data
            }
          } else {
            return{
              index: prevState -1
            }
          }})

      } else {
        response = await fetch(URLs[this.state.index-1])
        data = await response.json()

        this.setState((prevState) => {
            return {
              index: prevState.index,
              articleData: prevState.articleData
            }
          })
      }
    }

    async decrement(){
      let data = null
      let response = null
      if (this.state.index > 0){
        response = await fetch(URLs[this.state.index-1])
        data = await response.json()

        this.setState((prevState) => {
          if(prevState.index > 0){
            return {
              index: prevState.index - 1,
              articleData: data
            }
          } else {
            //console.log(this.state.articleData)
          }})

      } else {
        response = await fetch(URLs[this.state.index])
        data = await response.json()

        this.setState((prevState) => {
            return {
              index: prevState.index,
              articleData: prevState.articleData
            }
          })
      }
    }

    render() {
      if(this.state.canShowRanker){
        return <RankArticles/>
      }
      return (
        <article>
        { this.state.articleData === null 
          ?<h3>You are at the Home screen, click next to read articles</h3> 
            :[<RenderTitle textData={this.state.articleData}/>,
              <RenderHeadding textData={this.state.articleData }/>,
              <RenderParagraphs textData={this.state.articleData}/>,
              <RenderImages textData={this.state.articleData}/>,
              <RenderList textData={this.state.articleData}/>,
              this.state.index > 0
                ?<button onClick={this.decrement}>Back</button>
                  :<div/>
            ]
        }

        { this.state.index < 4
          ?<button onClick={this.increment}>Next</button>
            :<button onClick={this.toRank}>Rank</button>
        }
        </article>
      );
    }
  }