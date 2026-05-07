from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from PIL import Image

app = Flask(__name__)

# Load pretrained model
model = tf.keras.models.load_model("food_model.h5")

class_names = [
    "Biryani",
    "Chapathi",
    "Chole_bature",
    "Dahl",
    "Dhokla",
    "Dosa",
    "Gulab_jamun",
    "Idli",
    "Jalebi",
    "Pav_bhaji",
    "Poha",
    "Samosa",
    "Vada_pav"
]

def predict(image):
    image = image.resize((224, 224))

    img_array = np.array(image)
    img_array = img_array / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    prediction = model.predict(img_array)

    predicted_index = np.argmax(prediction)

    return class_names[predicted_index]

@app.route('/predict', methods=['POST'])
def predict_api():
    file = request.files['file']
    image = Image.open(file.stream)

    result = predict(image)

    return jsonify({"food": result})

if __name__ == '__main__':
    app.run(port=5000)