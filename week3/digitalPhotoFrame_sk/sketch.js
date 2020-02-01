let imageFileList=['images/orange.jpg','images/banana.jpg','images/apple.jpg'];
let imageList=[];
let nameList=['orange','banana','apple']; //display name rather than number
let currentImage=0;
let nextButton,prevButton;

function setup()
{
  createCanvas(600,400);
  prevButton=createButton('previous')
  prevButton.mousePressed(prev);
  
  nextButton=createButton('next')
  nextButton.mousePressed(next);
}

function preload()
{
  for(let filename of imageFileList)//can't use var here.
  {imageList.push(loadImage(filename));}
  
  print(imageList.length+" images are loaded into the list!")
}

function draw()
{
  show();
}

function show()
{
  image(imageList[currentImage],0,0);
}

function next()
{
  currentImage++;
  if(currentImage>imageList.length-1)
  { currentImage = 0;}
  
  print("next image is " + nameList[currentImage])
}

function prev()
{
  currentImage--;
  if(currentImage<0)
  { currentImage = imageList.length-1;}
  
  print("previous image is " + nameList[currentImage])
}