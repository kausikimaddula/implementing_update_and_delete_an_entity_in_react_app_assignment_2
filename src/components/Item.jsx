import React from "react";
import axios from "axios";

const API_URI = `http://localhost:8000/doors`;

const Item = ({ item, onDelete }) => {
  const handleDelete = async () => {
    const confirmDelete = confirm(`Are you sure you want to delete "${item.name}"?`);
    if (confirmDelete) {
      try {
        await axios.delete(`${API_URI}/${item.id}`);
        alert("Item deleted successfully!");
        onDelete(item.id); // Call onDelete to update UI
      } catch (error) {
        console.error("Error deleting item:", error);
        alert("Failed to delete item.");
      }
    }
  };

  return (
    <li>
      {item.name} - Status: {item.status}
      <button onClick={handleDelete} style={{ marginLeft: "10px", color: "red" }}>Delete</button>
    </li>
  );
};

export default Item;