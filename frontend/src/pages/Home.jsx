import { useEffect, useState } from "react";
import UploadForm from "../components/UploadForm";
import FoodList from "../components/FoodList";
import { TrendingUp, Zap, Brain } from "lucide-react";
import "../styles/Home.css";

function Home() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFoods = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8080/api/food");
      const data = await response.json();
      setFoods(data.reverse());
    } catch (error) {
      console.error("Error fetching foods", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>AI-Powered Food Nutrition Estimator</h1>
          <p>
            Instantly analyze the nutritional content of any food with a single
            photo
          </p>
          <div className="features-preview">
            <div className="feature-item">
              <Zap size={24} />
              <span>Instant Analysis</span>
            </div>
            <div className="feature-item">
              <Brain size={24} />
              <span>AI Detection</span>
            </div>
            <div className="feature-item">
              <TrendingUp size={24} />
              <span>Track Progress</span>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="upload-section">
        <UploadForm refreshFoods={fetchFoods} />
      </section>

      {/* Recent Foods Section */}
      <section className="recent-foods-section">
        <div className="section-header">
          <h2>📊 Recently Detected Foods</h2>
          {foods.length > 0 && (
            <p className="foods-count">{foods.length} foods tracked</p>
          )}
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading your food history...</p>
          </div>
        ) : foods.length === 0 ? (
          <div className="empty-state">
            <p>No foods detected yet. Upload an image to get started!</p>
          </div>
        ) : (
          <FoodList foods={foods} />
        )}
      </section>
    </div>
  );
}

export default Home;
