import tensorflow as tf
from flask import Flask, request, render_template
from tensorflow.keras.preprocessing import image
import numpy as np

app = Flask(__name__)

labels_dict = {0: 'Black-grass',
        1: 'Charlock',
        2: 'Cleavers',
        3: 'Common Chickweed',
        4: 'Common wheat',
        5: 'Fat Hen',
        6: 'Loose Silky-bent',
        7: 'Maize',
        8: 'Scentless Mayweed',
        9: 'Shepherd’s Purse',
        10: 'Small-flowered Cranesbill',
        11: 'Sugar beet',
        12: 'broadleaf',
        13: 'grass',
        14: 'soil',
        15: 'soybean'}

model = tf.keras.models.load_model("model/kevin_mobilenet_1.h5")


model.make_predict_function()

def predict_label(img_path):
    i = image.load_img(img_path, target_size=(224, 224),
                       color_mode="rgb")
    i = image.img_to_array(i) / 255.0
    i = i.reshape(1, 224, 224, 3)
    prediction = labels_dict[np.argmax(model.predict(i))]
    return prediction

@app.route("/", methods=['GET', 'POST'])
def index():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    if request.method == 'POST':
        img = request.files['my_image']

        img_path = "static/" + img.filename
        img.save(img_path)

        p = predict_label(img_path)

    return render_template("index.html", prediction=p, img_path=img_path)


if __name__ == "__main__":
    app.run(debug=True)
