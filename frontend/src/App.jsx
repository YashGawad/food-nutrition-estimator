import { useEffect, useState } from "react";
import UploadForm from "./components/UploadForm";
import FoodList from "./components/FoodList";
import "./App.css";

function App() {
  const [foods, setFoods] = useState([]);

  const fetchFoods = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/food");
      const data = await response.json();

      setFoods(data.reverse());
    } catch (error) {
      console.error("Error fetching foods", error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div className="app-container">
      <UploadForm refreshFoods={fetchFoods} />

      <FoodList foods={foods} />
    </div>
  );
}

export default App;
