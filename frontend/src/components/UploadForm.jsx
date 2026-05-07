import { useState } from "react";

function UploadForm({ refreshFoods }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        "http://localhost:8080/api/food/auto-detect",
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      setFile(null);
      refreshFoods();

      alert("Food detected successfully!");
    } catch (error) {
      console.error(error);
      alert("Error detecting food");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <h2>🍽️ AI Food Nutrition Estimator</h2>

      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Analyzing Food..." : "Upload & Detect"}
        </button>
      </form>
    </div>
  );
}

export default UploadForm;
