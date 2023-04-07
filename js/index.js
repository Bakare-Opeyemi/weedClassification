import * as tf from '@tensorflow/tfjs';
let net;

async function app() {
  var res1 = document.getElementById('result1');
  var res2 = document.getElementById('result2');
  var res3 = document.getElementById('result3');
  var res4 = document.getElementById('result4');
  var res5 = document.getElementById('result5');
  var res6 = document.getElementById('result6');
  var res7 = document.getElementById('result7');
  var res8 = document.getElementById('result8');
  var res9 = document.getElementById('result9');
  var res10 = document.getElementById('result10');
  var res11 = document.getElementById('result11');
  var res12 = document.getElementById('result12');
  var res13 = document.getElementById('result13');
  var res14 = document.getElementById('result14');
  var res15 = document.getElementById('result15');
  var res16 = document.getElementById('result16');

  console.log('Loading mobilenet..');

  // Load the model.
  const MODEL_URL = "./model.json";
  net = await tf.loadLayersModel(MODEL_URL);
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);
  console.log(result);

  res1.innerHTML = "1. " + result[0].className + " predicted! With a probability of:" + result[0].probability;
  res2.innerHTML = "2. " + result[1].className + " predicted! With a probability of:" + result[1].probability;
  res3.innerHTML = "3. " + result[2].className + " predicted! With a probability of:" + result[2].probability;
  res1.innerHTML = "4. " + result[0].className + " predicted! With a probability of:" + result[3].probability;
  res2.innerHTML = "5. " + result[1].className + " predicted! With a probability of:" + result[4].probability;
  res3.innerHTML = "6. " + result[2].className + " predicted! With a probability of:" + result[5].probability;
  res1.innerHTML = "7. " + result[0].className + " predicted! With a probability of:" + result[6].probability;
  res2.innerHTML = "8. " + result[1].className + " predicted! With a probability of:" + result[7].probability;
  res3.innerHTML = "9. " + result[2].className + " predicted! With a probability of:" + result[8].probability;
  res1.innerHTML = "10. " + result[0].className + " predicted! With a probability of:" + result[9].probability;
  res2.innerHTML = "11. " + result[1].className + " predicted! With a probability of:" + result[10].probability;
  res3.innerHTML = "12. " + result[2].className + " predicted! With a probability of:" + result[11].probability;
  res1.innerHTML = "13. " + result[0].className + " predicted! With a probability of:" + result[12].probability;
  res2.innerHTML = "14. " + result[1].className + " predicted! With a probability of:" + result[13].probability;
  res3.innerHTML = "15. " + result[2].className + " predicted! With a probability of:" + result[14].probability;
  res3.innerHTML = "16. " + result[2].className + " predicted! With a probability of:" + result[15].probability;

  alert("Prediction successful!");

}
var loadFile = function(event) {
    var img = document.getElementById('img');
    img.src = URL.createObjectURL(event.target.files[0]);
    img.width = 224;
    img.height = 224;
  };