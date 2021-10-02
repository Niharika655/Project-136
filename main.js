status1 = "";

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    objectName = document.getElementById("objectName").value;
}

function modelLoaded() {
    console.log("Model Loaded");
    status1 = true;
}

function draw() {
    image(video, 0, 0, 380, 380);
}