song = "";

function preload()
{
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 400);
}
function play() 
{
    song.play();
}

function pause() 
{
    song.pause();
}

function stop() 
{
    song.stop();
}