prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function Take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'>"
    });
    speak();
}
console.log("ML5 Version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sGjQeC3Wk/modal.json", modal_loaded);

function modal_loaded() {
    console.log("Modal Loaded!!")
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediction is " + prediction_1;
    speak_data2 = "And the second prediction is " + prediction_2;
    var Utterthis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(Utterthis);
}