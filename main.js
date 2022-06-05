noseX=0;
noseY=0;

function preload() {
  lipstick = loadImage('https://i.postimg.cc/sxJdgfsn/pngtree-red-lips-pattern-illustration-image-1412787-removebg-preview.png');
  sunglasses = loadImage('https://i.postimg.cc/1R0ZHBwp/sunglasses-pnh.png')
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(lipstick, noseX-15, noseY+8 ,80, 80);
  image(sunglasses,noseX-80 , noseY-100, 200,150);
}

function take_snapshot(){    
  save('myFilterImage.png');
}