import { useState } from "react";
import { RotateCcw } from "lucide-react";
import "../styles/Calculator.css";

function Calculator() {
  const [inputs, setInputs] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    servings: 1,
  });

  const [result, setResult] = useState(null);
  const [meals, setMeals] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: parseFloat(value) || 0,
    });
  };

  const calculateTotal = () => {
    const total = {
      calories: inputs.calories * inputs.servings,
      protein: inputs.protein * inputs.servings,
      carbs: inputs.carbs * inputs.servings,
      fat: inputs.fat * inputs.servings,
    };
    setResult(total);
  };

  const addToPlanner = () => {
    if (result) {
      setMeals([
        ...meals,
        {
          id: Date.now(),
          ...inputs,
          total: result,
          timestamp: new Date().toLocaleString(),
        },
      ]);
      resetForm();
    }
  };

  const resetForm = () => {
    setInputs({
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      servings: 1,
    });
    setResult(null);
  };

  const removeMeal = (id) => {
    setMeals(meals.filter((meal) => meal.id !== id));
  };

  const calculateDailyTotal = () => {
    return meals.reduce(
      (acc, meal) => ({
        calories: acc.calories + meal.total.calories,
        protein: acc.protein + meal.total.protein,
        carbs: acc.carbs + meal.total.carbs,
        fat: acc.fat + meal.total.fat,
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0 },
    );
  };

  const dailyTotal = calculateDailyTotal();

  return (
    <div className="calculator-page">
      <h1>📐 Nutrition Calculator</h1>
      <p className="subtitle">Plan your daily nutrition intake</p>

      <div className="calculator-grid">
        {/* Calculator Section */}
        <div className="calculator-card">
          <h2>Add Nutrition Values</h2>

          <div className="input-group">
            <label>Calories (kcal)</label>
            <input
              type="number"
              name="calories"
              value={inputs.calories}
              onChange={handleInputChange}
              placeholder="0"
            />
          </div>

          <div className="input-group">
            <label>Protein (g)</label>
            <input
              type="number"
              name="protein"
              value={inputs.protein}
              onChange={handleInputChange}
              placeholder="0"
            />
          </div>

          <div className="input-group">
            <label>Carbs (g)</label>
            <input
              type="number"
              name="carbs"
              value={inputs.carbs}
              onChange={handleInputChange}
              placeholder="0"
            />
          </div>

          <div className="input-group">
            <label>Fat (g)</label>
            <input
              type="number"
              name="fat"
              value={inputs.fat}
              onChange={handleInputChange}
              placeholder="0"
            />
          </div>

          <div className="input-group">
            <label>Servings</label>
            <input
              type="number"
              name="servings"
              value={inputs.servings}
              onChange={handleInputChange}
              min="1"
              placeholder="1"
            />
          </div>

          <button className="calculate-btn" onClick={calculateTotal}>
            Calculate
          </button>
        </div>

        {/* Results Section */}
        {result && (
          <div className="result-card">
            <h2>Per Serving</h2>
            <div className="result-grid">
              <div className="result-item">
                <span className="label">Calories</span>
                <span className="value">{result.calories.toFixed(1)} kcal</span>
              </div>
              <div className="result-item">
                <span className="label">Protein</span>
                <span className="value">{result.protein.toFixed(1)}g</span>
              </div>
              <div className="result-item">
                <span className="label">Carbs</span>
                <span className="value">{result.carbs.toFixed(1)}g</span>
              </div>
              <div className="result-item">
                <span className="label">Fat</span>
                <span className="value">{result.fat.toFixed(1)}g</span>
              </div>
            </div>
            <button className="add-btn" onClick={addToPlanner}>
              Add to Planner
            </button>
            <button className="reset-btn" onClick={resetForm}>
              <RotateCcw size={16} /> Reset
            </button>
          </div>
        )}
      </div>

      {/* Daily Planner */}
      <div className="planner-section">
        <div className="planner-header">
          <h2>Daily Planner</h2>
          {meals.length > 0 && (
            <span className="meals-count">{meals.length} meals</span>
          )}
        </div>

        {meals.length === 0 ? (
          <div className="empty-state">
            <p>No meals added yet. Add some nutrition values to get started!</p>
          </div>
        ) : (
          <>
            <div className="meals-list">
              {meals.map((meal) => (
                <div key={meal.id} className="meal-card">
                  <div className="meal-info">
                    <span className="meal-time">{meal.timestamp}</span>
                    <div className="meal-nutrition">
                      <span>{meal.total.calories.toFixed(0)} kcal</span>
                      <span>{meal.total.protein.toFixed(1)}g protein</span>
                      <span>{meal.total.carbs.toFixed(1)}g carbs</span>
                      <span>{meal.total.fat.toFixed(1)}g fat</span>
                    </div>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeMeal(meal.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Daily Total */}
            <div className="daily-total">
              <h3>Daily Total</h3>
              <div className="total-nutrition">
                <div className="total-item">
                  <span className="label">Calories</span>
                  <span className="value">
                    {dailyTotal.calories.toFixed(0)} kcal
                  </span>
                </div>
                <div className="total-item">
                  <span className="label">Protein</span>
                  <span className="value">
                    {dailyTotal.protein.toFixed(1)}g
                  </span>
                </div>
                <div className="total-item">
                  <span className="label">Carbs</span>
                  <span className="value">{dailyTotal.carbs.toFixed(1)}g</span>
                </div>
                <div className="total-item">
                  <span className="label">Fat</span>
                  <span className="value">{dailyTotal.fat.toFixed(1)}g</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Calculator;
