prediction1 = "";
prediction2 = "";
Webcam.set({
    width: 345,
    height: 298,
    image_format: 'png',
    png_quality: 90
     
 });
camea = document.getElementById("camera");

 Webcam.attach(camea);
 function take_snapshot(){
     Webcam.snap(function(data_uri) {
         document.getElementById("result").innerHTML = "<img id='captured_img' src='" + data_uri +"' />";
         ;});
     }
     console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MlRrYc9DH//model.json');
function modelLoaded(){
    console.log("model loaded");
}
function check(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction1;
    speak_data_2 = "The second prediction is" + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}