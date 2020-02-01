let gui;
let play;
let nextButton;
let prevButton;
let trackLoop;
let listLoop;
let randomPlay;
let current_image = 0;
let image_filelist =['images/remini.jpg','images/futile.jpg', 'images/rewrite.jpg'];
//album cover
let imagelist = [];

function preload() {


  for(let filename of image_filelist){
    imagelist.push( loadImage(filename) ); 
  }}



function setup() {
  createCanvas(400, 400);
  
  gui = createGui();
  play = createButton("⏯", 180, 320,29,29);
  prevButton = createButton("⏭", 320, 320,29,29);
  nextButton = createButton("⏮",40,320,29,29);
  randomPlay= createButton("🔀", 180, 360,29,29);
  listLoop= createButton("🔁", 320, 360,29,29);
  trackLoop= createButton("🔂",40,360,29,29);}

function draw() {
  background(220);
  drawGui();
  image(imagelist[current_image], 75, 30,250,250);
  if(prevButton.isPressed) {
    prev();
  }
  if(nextButton.isPressed) {
    next();
  }
  
}

function next(){
 current_image = current_image + 1;
 
 if(current_image > imagelist.length - 1){
   current_image = 0;
 }
 print("next image is " + current_image);
}


function prev(){
 current_image = current_image - 1;
 
 if(current_image < 0){
   current_image = imagelist.length - 1;
 }

 print("prev image is " + current_image);
}
