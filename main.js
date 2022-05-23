noseX=0;
noseY=0;


function preload() {
clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
    canvas= createCanvas(300, 300);
    canvas.center();
    vedio = createCapture(VIDEO);
    vedio.size(300, 300)
    vedio.hide();

    poseNet = ml5.poseNet(vedio, modelLoaded);
    poseNet.on("pose", gotPoses);
    }

function draw() {
image(vedio, 0, 0, 300, 300);
fill(255,0,0);
stroke(255,0,0);

image(clown_nose, noseX-15, noseY-15, 30, 30);
}

function take_snapshot() {
    save('clown_nose.png')
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    } 
}
