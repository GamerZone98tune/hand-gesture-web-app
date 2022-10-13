Webcam.set({
    width:350,
height:300,
image_format : 'png' ,
png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(  '#camera'  );

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pub16QYoI/model.json', modelLoaded);

function  modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_hand_gesture_name").innerHTML = results[0].label;
  
      if(results[0].label == "swag")
      {
          document.getElementById("update_hand_gesture").innerHTML = "🤘 ;";
      }
      if(results[0].label == "thumps_up")
      {
          document.getElementById("update_hand_gesture").innerHTML = "👍 ;";
      }
      if(results[0].label == "thumps_down")
      {
          document.getElementById("update_hand_gesture").innerHTML = "👎 ;";
      }
      if(results[0].label == "hello")
      {
          document.getElementById("update_hand_gesture").innerHTML = "🖐 ;";
      }
      if(results[0].label == "there")
      {
          document.getElementById("update_hand_gesture").innerHTML = "👉 ;";
      }
      if(results[0].label == "peace")
      {
          document.getElementById("update_hand_gesture").innerHTML = "✌ ;";
      }
  
    }
  }
