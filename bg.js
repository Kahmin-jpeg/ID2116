const barWidth = 50;
let lastBar = -10;

function setup() {
  bg = createGraphics(400, 250);
  createCanvas(2100, 1050);
  colorMode(HSB, width, height, 20);
  noStroke();
}

function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(barX, mouseY, 50);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}