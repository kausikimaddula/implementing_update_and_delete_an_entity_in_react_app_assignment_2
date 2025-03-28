import React from "react";
import Item from "./Item";

const ItemList = ({ items, onDelete }) => {
  if (!items || items.length === 0) {
    return <p>No items available.</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ItemList;