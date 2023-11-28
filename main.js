var noseX = 0;
var noseY = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	coin_sound = loadSound("coin.wav");
	gameover_sound = loadSound("gameover.wav");
	jump_sound = loadSound("jump.wav");
	mariodeath = loadSound("mariodie.wav");
	enemy_death = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("gameConsole");
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log("model loaded")
}

function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log(noseX + ", " + noseY);
	}
}

function draw() {
	game()
}






