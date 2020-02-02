let gui;
let play;
let nextButton;
let prevButton;
let trackLoop;
let like;
let love=[false,false,false];
let randomPlay;
let loopOrNot=false;
let current_image = 2;
let image_filelist =
['images/remini.jpg','images/futile.jpg', 'images/rewrite.jpg'];
//album cover
let namelist=["ReminiscenceーHaneda Kentarou","Futile Devices-Sufjan Stevens","Raised Bed-Key Sounds Label"]
let music_filelist =
['playlist/remini.mp3','playlist/futiledevices.mp3', 'playlist/raisedbed.mp3'];
let vol;
let imagelist = [];
let musiclist = [];
let nowPlaying;
let status=0;

 function preload() {
  soundFormats('mp3', 'ogg');
  

  for(let filename of image_filelist){
    imagelist.push( loadImage(filename) ); 
  }
   for(let filename of music_filelist){
    musiclist.push( loadSound(filename) ); 
  }

 }



function setup() {
  createCanvas(400, 400);
  gui = createGui();
  vol = createSliderV("volume",25,20,20);

  play = createButton("⏯", 180, 310,29,29);
  nextButton = createButton("⏭", 320, 310,29,29);
  prevButton = createButton("⏮",40,310,29,29);
  randomPlay= createButton("❓", 180, 350,29,29);
  like= createButton("💔", 320, 350,29,29);
  trackLoop= createButton("🔁",40,350,29,29);
  
  nowPlaying=musiclist[current_image];
  
  

}
  
function draw() {
  

  stroke('#000000');
  fill(0);
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
  if(play.isPressed) {
    playorpause();
  }
  if (vol.isChanged) {
    
    print(vol.label + " = " + int(100*vol.val)+"%");
    nowPlaying.setVolume(2*vol.val);

  }
  
   if (like.isPressed) {
     
    if(!love[current_image]){
  like= createButton("❤️", 320, 350,29,29);
      love[current_image]=true;
    }
   else{like= createButton("💔", 320, 350,29,29);
       love[current_image]=false;}
     
  }
  
  if (randomPlay.isPressed) {
  current_image = int(random(0,100))%3;
  nowPlaying.stop();
  nowPlaying=musiclist[current_image];
  nowPlaying.play();  
  status=1;
  print("Now playing "+namelist[current_image]);
   
    if(love[current_image]){
  like= createButton("❤️", 320, 350,29,29);
    }
   else{like= createButton("💔", 320, 350,29,29);}
    
  }
  if(trackLoop.isPressed) {
    if(!loopOrNot){
    trackLoop= createButton("🔂",40,350,29,29);
    loopOrNot = true;
    loop();
    }
    else{
      trackLoop= createButton("🔁",40,350,29,29);
      loopOrNot = false;
      setLoop=false;
    }
    
  }
  fill(255);
  textAlign(CENTER);
  textFont("avenir-black");
  textSize(14);
  text(namelist[current_image],190,293);
 

}


function next(){
 current_image = current_image + 1;
 if(current_image > imagelist.length - 1){
   current_image = 0;
 }
  //update the nowPlaying info
 nowPlaying.stop();
 nowPlaying=musiclist[current_image];
 nowPlaying.play();
 status=1;
  if(love[current_image])
  {
  like= createButton("❤️", 320, 350,29,29);
    }
   else{like= createButton("💔", 320, 350,29,29);}
 print("Next song is " + namelist[current_image]);
}


function prev(){
 current_image = current_image - 1;
 if(current_image < 0){
   current_image = imagelist.length - 1;
 }
 nowPlaying.stop();
 nowPlaying=musiclist[current_image];
 nowPlaying.play();
 status=1;
  
  if(love[current_image])
  {
  like= createButton("❤️", 320, 350,29,29);
    }
   else{like= createButton("💔", 320, 350,29,29);}
  
 print("Previous song is " + namelist[current_image]);
}


function playorpause()
{ if(status==0)
{
  nowPlaying.play();
  status=1;
}
 else
 {
   status=0;
   nowPlaying.pause(); 
     }
  
  }


  
function tsuzuki(){
  if(onended())
    {next();
    }
}



