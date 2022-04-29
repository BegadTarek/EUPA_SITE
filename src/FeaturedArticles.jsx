import React, { Component } from "react";
import ArticleCard from "./ArticleCard";

export default class FeaturedArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredArticles: [],
    };
  }

  componentDidMount = async () => {
    //fetch featured articles from db
    const response = await fetch(
      "https://eupa-api.000webhostapp.com/api/read_featured_articles.php",
      {
        method: "GET",
      }
    );
    const featArticles = await response.json();
    this.setState({ featuredArticles: featArticles });
  };

  getFeaturedArticles = () => {
    return this.state.featuredArticles.map((article) => {
      return (
        <ArticleCard
          key={article.id}
          title={article.title}
          paragraph={article.paragraph}
          src={article.src}
          longArticle={article.longArticle}
        />
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="container-fluid">
          <h2
            id="featuredTitle"
            className="display-2 row justify-content-center"
          >
            Featured Articles
          </h2>
          <div className="row p-3">{this.getFeaturedArticles()}</div>
        </section>
      </React.Fragment>
    );
  }
}
