import React, { useState, useEffect } from "react";
import "../App.css";

require("dotenv").config({ path: "./config.env" });

const Article = (title) => {
  return (
    <div className="page page-article">
      <header className="page-header header-article">
        <h1>Article Page</h1>
      </header>
      <div className="articles">
        <h4>articles articles articles</h4>
      </div>
    </div>
  );
};

export default Article;
