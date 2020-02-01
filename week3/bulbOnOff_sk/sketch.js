
var bulbOn;
var bulbOff;
var status = 0;


x=event.clientX;
y=event.clientY;

function setup() {
  createCanvas(400, 400)
  bulbOn = loadImage("IMAGES/bulb_on.png");
  bulbOff = loadImage("IMAGES/bulb_off.png");
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
}



function draw() {
  let val = slider.value();
  background(val);
  val = slider.value();
  imageMode(CENTER);
  
  if(status)
  {
  image(bulbOn,width/2,height/2,300,300);
  tint(255, val);
  print("Lights On")
  }
  else
  {
  image(bulbOff,width/2,height/2,300,300);
  tint(255, val);
  print("Nighty Night!")
}
  
}


function mousePressed()
{
{
  if(status==0)
{status=1;}
 else{status=0;}}
}

