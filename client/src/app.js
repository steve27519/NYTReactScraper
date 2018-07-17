import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import SearchForm from "./components/SearchForm";
import DisplayArticles from "./components/DisplayArticles";

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
    this.getNewArticles = this.getNewArticles.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
  }

  getNewArticles(query) {
    console.log("Query: ", query);
    fetch(`/api/articles/${query}`)
      .then(response => response.json())
      .then(data => this.setState({ articles: data }));
  }
  saveArticle(article) {
    console.log("saving article...");
    const data = { title: article.headline.main, url: article.web_url };
    const fetchOptions = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    };
    console.log("fetch options: ", fetchOptions);
    fetch("/api/saved", fetchOptions)
      .then(response => response.json())
      .then(data => {
        console.log("added: ", data);
      })
      .catch(err => {
        console.log("error", err);
      });
  }

  render() {
    return (
      <div className="container">
        <Jumbotron />
        <SearchForm getNewArticles={this.getNewArticles} />
        <DisplayArticles
          articles={this.state.articles}
          saveArticle={this.saveArticle}
        />
      </div>
    );
  }
}

export default App;