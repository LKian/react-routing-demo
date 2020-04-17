import React, { useState, useEffect } from "react";
import "../App.css";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("THIS IS DAATTTTAAAAA", data);
    const items = await data.json();
    console.log("THIS IS ITEMS", items);
    setItems(items);
  };

  return (
    <div className="shop">
      <header className="page-header shop-header">
        <h1>Shop Page</h1>
      </header>
      <div className="grid">
        {items.map((item) => (
          <div className="card" key={item.title}>
            <div className="card-title-container">
              <h2 className="card-title">{item.title}</h2>
            </div>
            <p className="card-body">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
