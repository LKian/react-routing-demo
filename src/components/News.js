import React, { useState, useEffect } from "react";
import "../App.css";
// import { Link } from "react-router-dom";

require("dotenv").config({ path: "./config.env" });

const News = () => {
  useEffect(() => {
    fetchItems();
  }, []);
  const [articles, setArticles] = useState([]);

  const fetchItems = async () => {
    const APP_ID = process.env.REACT_APP_API_KEY;
    const data = await fetch(
      `http://newsapi.org/v2/everything?q=corona&from=2020-04-10&language=en&sortBy=publishedAt&apiKey=${APP_ID}`
    );
    const articlesAll = await data.json();
    const articles = articlesAll.articles;
    console.log("articles ", articles);
    setArticles(articles);
  };

  return (
    <div className="page page-news">
      <header className="page-header header-news">
        <h1>News Page</h1>
      </header>
      <div className="articles">
        {articles.map((article) => (
          <div className="article" key={article.title}>
            <div className="article-thumbnail">
              <img src={article.urlToImage}></img>
            </div>
            <div className="article-text">
              <a target="_blank" rel="noopener noreferrer" href={article.url}>
                <h3 className="article-title">{article.title}</h3>
              </a>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
