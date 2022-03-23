lefteye_x =0;
lefteye_y = 0;

function preload() {
filter = loadImage('https://i.postimg.cc/nzL1HVSw/beach-sg-removebg-preview.png');
}

function setup() {
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300)
video.hide();
poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initialised");
}

function gotPoses(results) {
    if (results.length > 0) {

        lefteye_x = results[0].pose.leftEye.x;
        lefteye_y = results[0].pose.leftEye.y;

    console.log(results);
    console.log(results[0].pose.leftEye.x);
    console.log(results[0].pose.leftEye.y);
    }
}

function draw() {
image(video, 0, 0, 300, 300);
image(filter, lefteye_x - 65, lefteye_y - 40, 90, 80)
}

function take_snapshot() {
save('MyTrendyGlares.jpeg');

}
