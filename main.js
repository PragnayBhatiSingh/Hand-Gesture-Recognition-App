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

}

console.log("ML5 Version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sGjQeC3Wk/model.json", modal_loaded);

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

function check() {
    image = document.getElementById("captured_image");
    classifier.classify(image, got_result);
}

function got_result(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();

        
        if (prediction_1 == "Fist") {
            document.getElementById("update_emoji").innerHTML = "&#9994";
        }
        if (prediction_1 == "Hand") {
            document.getElementById("update_emoji").innerHTML = "&#9995";
        }
        if (prediction_1 == "Thumb's Up") {
            document.getElementById("update_emoji").innerHTML = "&#128077";
        }
        if (prediction_1 == "Thumb's Down") {
            document.getElementById("update_emoji").innerHTML = "&#128078";
        }
        if (prediction_1 == "Amazing") {
            document.getElementById("update_emoji").innerHTML = "&#128076";
        }

        if (prediction_2 == "Fist") {
            document.getElementById("update_emoji2").innerHTML = "&#9994";
        }
        if (prediction_2 == "Hand") {
            document.getElementById("update_emoji2").innerHTML = "&#9995";
        }
        if (prediction_2 == "Thumb's Up") {
            document.getElementById("update_emoji2").innerHTML = "&#128077";
        }
        if (prediction_2 == "Thumb's Down") {
            document.getElementById("update_emoji2").innerHTML = "&#128078";
        }
        if (prediction_2 == "Amazing") {
            document.getElementById("update_emoji2").innerHTML = "&#128076";
        }

        

    }


}