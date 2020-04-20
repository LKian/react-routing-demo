import React, { useState, useEffect } from "react";
import "../App.css";

function ItemDetail() {
  useEffect(() => {
    fetchItem();
  }, []);

  const [items, setItem] = useState({});

  const fetchItem = async () => {};

  return (
    <div className="item-detail">
      <h1>Item</h1>
    </div>
  );
}

export default ItemDetail;
