import React, { Component } from "react";

class DisplayArticles extends Component {
  constructor() {
    super();
    this.renderCard = this.renderCard.bind(this);
  }

  renderCard(article,index) {
    return (
      <div className="card-body" key={index}>
        <h4 className="card-title">{article.headline.main}</h4>
        <p className="card-text">{article.snippet}</p>
        <a href={`${article.web_url}`} target="_blank" className="btn btn-primary">
          Visit Url
        </a>
        <button className="btn btn-primary" onClick={()=>this.props.saveArticle(article)}>Save Article</button>
      </div>
    );
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">Article List</div>
        {this.props.articles.map((article,index) => this.renderCard(article,index))}
      </div>
    );
  }
}

export default DisplayArticles;
