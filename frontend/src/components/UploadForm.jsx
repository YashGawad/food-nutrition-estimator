import { useState, useRef } from "react";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";
import "../styles/UploadForm.css";

function UploadForm({ refreshFoods }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type.startsWith("image/")) {
        setFile(selectedFile);
        const reader = new FileReader();
        reader.onload = (event) => {
          setPreview(event.target.result);
        };
        reader.readAsDataURL(selectedFile);
        setMessage(null);
      } else {
        setMessage({
          type: "error",
          text: "Please select a valid image file",
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage({
        type: "error",
        text: "Please select an image first",
      });
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

      setMessage({
        type: "success",
        text: "✓ Food detected successfully! Check dashboard for results.",
      });

      setFile(null);
      setPreview(null);
      fileInputRef.current.value = "";

      setTimeout(() => {
        refreshFoods();
      }, 500);
    } catch (error) {
      console.error(error);
      setMessage({
        type: "error",
        text: "Error detecting food. Please try again with a clearer image.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("image/")) {
      setFile(droppedFile);
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target.result);
      };
      reader.readAsDataURL(droppedFile);
      setMessage(null);
    }
  };

  return (
    <div className="upload-form-container">
      <h2>📸 Upload & Analyze Food</h2>
      <p className="upload-subtitle">
        Take a photo of your food and our AI will instantly analyze its
        nutrition
      </p>

      <form onSubmit={handleSubmit} className="upload-form">
        <div
          className="upload-area"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {preview ? (
            <div className="preview-container">
              <img src={preview} alt="Preview" className="preview-image" />
              <button
                type="button"
                className="change-image-btn"
                onClick={() => fileInputRef.current?.click()}
              >
                Change Image
              </button>
            </div>
          ) : (
            <div className="upload-placeholder">
              <Upload size={48} />
              <p>Drag and drop your food image here</p>
              <p className="or-text">or</p>
              <button
                type="button"
                className="select-btn"
                onClick={() => fileInputRef.current?.click()}
              >
                Select from device
              </button>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden-input"
          />
        </div>

        {message && (
          <div className={`message ${message.type}`}>
            {message.type === "success" ? (
              <CheckCircle size={20} />
            ) : (
              <AlertCircle size={20} />
            )}
            <span>{message.text}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={!file || loading}
          className="submit-btn"
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Analyzing...
            </>
          ) : (
            "Analyze Food 🔍"
          )}
        </button>
      </form>

      <div className="upload-tips">
        <h3>📝 Tips for best results:</h3>
        <ul>
          <li>Use clear, well-lit images</li>
          <li>Capture the food from a top-down angle</li>
          <li>Avoid shadows and reflections</li>
          <li>Include the entire food item in the frame</li>
        </ul>
      </div>
    </div>
  );
}

export default UploadForm;
