import { useEffect, useState } from "react";
import { Trash2, Download } from "lucide-react";
import "../styles/Dashboard.css";

function Dashboard() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [stats, setStats] = useState({
    totalFoods: 0,
    totalCalories: 0,
    totalProtein: 0,
    totalCarbs: 0,
    totalFat: 0,
  });

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8080/api/food");
      const data = await response.json();
      setFoods(data.reverse());
      calculateStats(data);
    } catch (error) {
      console.error("Error fetching foods", error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (foodList) => {
    const totals = foodList.reduce(
      (acc, food) => ({
        totalFoods: acc.totalFoods + 1,
        totalCalories: acc.totalCalories + (food.calories || 0),
        totalProtein: acc.totalProtein + (food.protein || 0),
        totalCarbs: acc.totalCarbs + (food.carbs || 0),
        totalFat: acc.totalFat + (food.fat || 0),
      }),
      {
        totalFoods: 0,
        totalCalories: 0,
        totalProtein: 0,
        totalCarbs: 0,
        totalFat: 0,
      },
    );
    setStats(totals);
  };

  const handleDelete = async (foodId) => {
    if (window.confirm("Are you sure you want to delete this food item?")) {
      try {
        const response = await fetch(
          `http://localhost:8080/api/food/${foodId}`,
          {
            method: "DELETE",
          },
        );
        if (response.ok) {
          setFoods(foods.filter((f) => f.id !== foodId));
          fetchFoods();
        }
      } catch (error) {
        console.error("Error deleting food", error);
      }
    }
  };

  const downloadReport = () => {
    const report = `
    Nutrition Report
    ================
    Total Foods: ${stats.totalFoods}
    Total Calories: ${stats.totalCalories.toFixed(2)} kcal
    Total Protein: ${stats.totalProtein.toFixed(2)}g
    Total Carbs: ${stats.totalCarbs.toFixed(2)}g
    Total Fat: ${stats.totalFat.toFixed(2)}g
    `;

    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(report),
    );
    element.setAttribute("download", "nutrition_report.txt");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>📊 Dashboard</h1>
        <button className="download-btn" onClick={downloadReport}>
          <Download size={18} /> Download Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Total Foods</span>
          <span className="stat-value">{stats.totalFoods}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Total Calories</span>
          <span className="stat-value">{stats.totalCalories.toFixed(0)}</span>
          <span className="stat-unit">kcal</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Total Protein</span>
          <span className="stat-value">{stats.totalProtein.toFixed(1)}</span>
          <span className="stat-unit">g</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Total Carbs</span>
          <span className="stat-value">{stats.totalCarbs.toFixed(1)}</span>
          <span className="stat-unit">g</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Total Fat</span>
          <span className="stat-value">{stats.totalFat.toFixed(1)}</span>
          <span className="stat-unit">g</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button
          className={`filter-tab ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Foods
        </button>
        <button
          className={`filter-tab ${filter === "high-cal" ? "active" : ""}`}
          onClick={() => setFilter("high-cal")}
        >
          High Calories
        </button>
        <button
          className={`filter-tab ${filter === "high-protein" ? "active" : ""}`}
          onClick={() => setFilter("high-protein")}
        >
          High Protein
        </button>
      </div>

      {/* Foods Table */}
      <div className="foods-table-container">
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
          </div>
        ) : foods.length === 0 ? (
          <div className="empty-state">
            <p>No foods in your history yet</p>
          </div>
        ) : (
          <table className="foods-table">
            <thead>
              <tr>
                <th>Food Name</th>
                <th>Calories</th>
                <th>Protein</th>
                <th>Carbs</th>
                <th>Fat</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food) => (
                <tr key={food.id}>
                  <td className="food-name">{food.name}</td>
                  <td>{food.calories} kcal</td>
                  <td>{food.protein}g</td>
                  <td>{food.carbs}g</td>
                  <td>{food.fat}g</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(food.id)}
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
