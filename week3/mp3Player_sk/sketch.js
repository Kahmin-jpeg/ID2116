let gui;
let play;
let nextButton;
let prevButton;
let trackLoop;
let listLoop;
let randomPlay;
let current_image = 0;
let image_filelist =
['images/remini.jpg','images/futile.jpg', 'images/rewrite.jpg'];
//album cover
let vol;
let imagelist = [];
let nowplaying;

 function preload() {

  soundFormats('mp3');
  loadSound
  

  for(let filename of image_filelist){
    imagelist.push( loadImage(filename) ); 
  }}



function setup() {
  createCanvas(400, 400);
  gui = createGui();
  vol = createSlider("volume", 40, 280,310);
  play = createButton("⏯", 180, 320,29,29);
  nextButton = createButton("⏭", 320, 320,29,29);
  prevButton = createButton("⏮",40,320,29,29);
  randomPlay= createButton("🔀", 180, 360,29,29);
  listLoop= createButton("🔁", 320, 360,29,29);
  trackLoop= createButton("🔂",40,360,29,29);}

function draw() {

  stroke('#000000');
  fill(70);
  strokeWeight(10);
  rect(0, 0, 400, 400,15);
  drawGui();
  image(imagelist[current_image], 75, 20,250,250);
  if(prevButton.isPressed) {
    prev();
  }
  if(nextButton.isPressed) {
    next();
  }

  if (vol.isChanged) {
    // Print a message when Slider is changed
    // that displays its value.
    print(vol.label + " = " + vol.val);
  }
  
  

}

function next(){
 current_image = current_image + 1;
 
 if(current_image > imagelist.length - 1){
   current_image = 0;
 }
 print("next song is " + current_image);
}


function prev(){
 current_image = current_image - 1;
 
 if(current_image < 0){
   current_image = imagelist.length - 1;
 }

 print("previous song is " + current_image);
}
