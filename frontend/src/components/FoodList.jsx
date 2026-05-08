import { Flame, Zap, Wheat, Droplet, Copy, Trash2 } from "lucide-react";
import { useState } from "react";
import "../styles/FoodList.css";

function FoodList({ foods }) {
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (food) => {
    const text = `${food.name}\nCalories: ${food.calories} kcal\nProtein: ${food.protein}g\nCarbs: ${food.carbs}g\nFat: ${food.fat}g`;
    navigator.clipboard.writeText(text);
    setCopiedId(food.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = async (foodId) => {
    if (window.confirm("Delete this food item?")) {
      try {
        await fetch(`http://localhost:8080/api/food/${foodId}`, {
          method: "DELETE",
        });
        window.location.reload();
      } catch (error) {
        console.error("Error deleting food", error);
      }
    }
  };

  return (
    <div className="food-grid">
      {foods.map((food) => (
        <div className="food-card" key={food.id}>
          <div className="food-image-container">
            <img
              src={food.imageUrl}
              alt={food.name}
              className="food-image"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%23999'%3EImage Not Found%3C/text%3E%3C/svg%3E";
              }}
            />
            <div className="image-overlay">
              <button
                className="action-btn copy-btn"
                onClick={() => copyToClipboard(food)}
                title="Copy to clipboard"
              >
                <Copy size={18} />
                {copiedId === food.id && (
                  <span className="copied">Copied!</span>
                )}
              </button>
            </div>
          </div>

          <div className="food-content">
            <h3>{food.name}</h3>

            <div className="nutrition-grid">
              <div className="nutrition-box">
                <Flame size={20} />
                <span className="nutrition-value">{food.calories}</span>
                <span className="nutrition-label">Calories</span>
              </div>

              <div className="nutrition-box">
                <Zap size={20} />
                <span className="nutrition-value">{food.protein}g</span>
                <span className="nutrition-label">Protein</span>
              </div>

              <div className="nutrition-box">
                <Wheat size={20} />
                <span className="nutrition-value">{food.carbs}g</span>
                <span className="nutrition-label">Carbs</span>
              </div>

              <div className="nutrition-box">
                <Droplet size={20} />
                <span className="nutrition-value">{food.fat}g</span>
                <span className="nutrition-label">Fat</span>
              </div>
            </div>

            <div className="card-actions">
              <button
                className="delete-btn"
                onClick={() => handleDelete(food.id)}
                title="Delete item"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodList;
