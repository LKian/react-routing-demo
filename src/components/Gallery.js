import React, { useState, useEffect } from "react";
import "../App.css";

function Gallery() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const items = await data.json();
    setItems(items);
  };

  return (
    <div className="page page-gallery">
      <header className="page-header gallery-header">
        <h1>Gallery Page</h1>
      </header>
      <div className="grid">
        {items.map((item) => (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            key={item.title}
          >
            <div className="card-title-container">
              <h2 className="card-title">{item.title}</h2>
            </div>
            <img
              className="card-body"
              src={item.thumbnailUrl}
              alt={item.title}
            ></img>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
