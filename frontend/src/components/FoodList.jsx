function FoodList({ foods }) {
  return (
    <div className="food-grid">
      {foods.map((food) => (
        <div className="food-card" key={food.id}>
          <img src={food.imageUrl} alt={food.name} className="food-image" />

          <div className="food-content">
            <h2>{food.name}</h2>

            <div className="nutrition-grid">
              <div className="nutrition-box">
                <span>🔥</span>
                <p>{food.calories} kcal</p>
              </div>

              <div className="nutrition-box">
                <span>💪</span>
                <p>{food.protein}g Protein</p>
              </div>

              <div className="nutrition-box">
                <span>🍚</span>
                <p>{food.carbs}g Carbs</p>
              </div>

              <div className="nutrition-box">
                <span>🥑</span>
                <p>{food.fat}g Fat</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodList;
