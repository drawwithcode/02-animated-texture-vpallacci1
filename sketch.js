let hasStarted = false;

function preload() {

}

var charList = ['daidaidai','smarmella', 'APRITUTTO', 'F4BASITO', 'STRAORDINARIDAPRILE', 'debotto', 'MOLTOITALIANO', 'coffeebreak', 'OCCHIDELCUORE', 'festadelgrazie', 'LIMORTANGUERIERI', 'schiavo', 'LIBECCIO', 'dottorcane','CAZZODECANE', 'buciodeculo', 'gioieiere']
var fontcharList = ['IBM plex mono', 'PIAZZOLLA', 'helvetica']
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  angleMode(DEGREES);
  frameRate(2);
  colorMode(HSL);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
}

function draw() {

  var cof = 5;

  fill('white');

  if (hasStarted) {
    background("black");
    for (var a = 0; a < windowWidth; a += 350) {
      for (var b = 0; b < windowHeight; b += 150) {
        var index = random(charList);
        let a = random(windowWidth);
        let b = random(windowHeight);
        let r = random(50);
        let font = random(fontcharList);
        textSize(r);
        textFont(font);
        text(index, a, b);
      }
    }
  }

  push();
  stroke(255, 0, 255)
  fill('black');
  rect(windowWidth / 2, windowHeight / 2, 380, 40,)
  pop();

  push();
  fill('white');
  textSize(26);
  textFont('IBMplexmono');
  text("press to start and stop", windowWidth / 2, windowHeight / 2);
  pop();

}

function mouseClicked() {
if (hasStarted == true) {
  hasStarted = false;
} else if(hasStarted == false){
  hasStarted = true;
}
}
