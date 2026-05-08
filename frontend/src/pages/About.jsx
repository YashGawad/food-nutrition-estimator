import { Heart, Zap, Brain, Shield } from "lucide-react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Our Food Nutrition Estimator</h1>
        <p>Making nutrition tracking simple and accessible to everyone</p>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <div className="section-content">
          <h2>Our Mission</h2>
          <p>
            We believe everyone deserves access to accurate nutritional
            information to make informed dietary choices. Our AI-powered food
            nutrition estimator uses advanced machine learning to instantly
            analyze food images and provide detailed nutritional data.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <Brain size={40} />
            <h3>AI-Powered</h3>
            <p>
              Advanced deep learning models trained on thousands of food images
              for accurate detection.
            </p>
          </div>
          <div className="feature-card">
            <Zap size={40} />
            <h3>Instant Results</h3>
            <p>
              Get nutritional information in seconds with our fast image
              recognition technology.
            </p>
          </div>
          <div className="feature-card">
            <Heart size={40} />
            <h3>Health Focused</h3>
            <p>
              Track your nutrition journey and make better dietary decisions
              with detailed insights.
            </p>
          </div>
          <div className="feature-card">
            <Shield size={40} />
            <h3>Secure & Private</h3>
            <p>
              Your data is secure and protected. We never share your personal
              nutrition information.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="about-section">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Upload Image</h3>
            <p>Take or upload a photo of your food</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>AI Analysis</h3>
            <p>Our AI identifies the food type and portion</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Get Results</h3>
            <p>View detailed nutritional information</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Track Progress</h3>
            <p>Monitor your nutrition over time</p>
          </div>
        </div>
      </section>

      {/* Food Categories Section */}
      <section className="about-section">
        <h2>Supported Food Categories</h2>
        <div className="food-categories">
          <div className="category-item">🍛 Indian Cuisine</div>
          <div className="category-item">🍚 Rice Dishes</div>
          <div className="category-item">🥘 Curries</div>
          <div className="category-item">🥗 Vegetables</div>
          <div className="category-item">🍝 Pasta</div>
          <div className="category-item">🍳 Breakfast Items</div>
          <div className="category-item">🍰 Desserts</div>
          <div className="category-item">🍲 Soups & Stews</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2>By The Numbers</h2>
        <div className="stats-grid">
          <div className="stat">
            <h3>10,000+</h3>
            <p>Foods Tracked</p>
          </div>
          <div className="stat">
            <h3>1000+</h3>
            <p>Users</p>
          </div>
          <div className="stat">
            <h3>95%</h3>
            <p>Accuracy Rate</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Available</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get In Touch</h2>
        <p>Have questions or feedback? We'd love to hear from you!</p>
        <div className="contact-links">
          <a href="mailto:support@foodnutrition.com" className="contact-btn">
            📧 Email Us
          </a>
          <a href="#" className="contact-btn">
            💬 Support Chat
          </a>
          <a href="#" className="contact-btn">
            🐦 Follow Us
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="about-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How accurate is the AI detection?</h3>
            <p>
              Our AI achieves 95% accuracy on common foods. Accuracy may vary
              based on image quality and food complexity.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can I use this for meal planning?</h3>
            <p>
              Yes! Use our calculator to plan meals, track daily intake, and
              download reports.
            </p>
          </div>
          <div className="faq-item">
            <h3>Is my data private?</h3>
            <p>
              Absolutely. We don't share or sell any of your personal nutrition
              data.
            </p>
          </div>
          <div className="faq-item">
            <h3>What image formats are supported?</h3>
            <p>
              We support JPG, PNG, WebP, and other common image formats. Keep
              image quality high for best results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
