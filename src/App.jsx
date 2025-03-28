import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "./components/ItemList";

const API_URI = `http://localhost:8000/doors`;

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  // Fetch data from the API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(API_URI);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch items. Please try again later.");
      }
    };

    fetchItems();
  }, []);

  // Handle deletion
  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Door Management System</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ItemList items={items} onDelete={handleDelete} />
    </div>
  );
}

export default App;