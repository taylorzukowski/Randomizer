//cake flavors
let cake = [{
  name: "vanilla",
  frosting: "chocolate"
}, {
  name: "confetti",
  frosting: "nutella"
}, {
  name: "carrot",
  frosting: "cream cheese"
}, {
  name: "lemon",
  frosting: "vanilla"
}, {
  name: "chocolate",
  frosting: "peanut butter"
}, {
  name: "red velvet",
  frosting: "oreo"
}];

let randomIndex;
let animating = false;

let cakepic = [];
let imageCounter = 0;

function preload() {

  for (let i = 1; i <= 13; i++) {
    cakepic[i] = loadImage("assets/Cakepic_" + i + ".jpeg")
  }
}

function setup() {
  console.log("HEY");
  createCanvas(600, 600);
  background(200);
  textSize(32);
  imageMode(CENTER);
  frameRate(8);

  text("click to randomize", 175, 50);
  console.log(cakepic);

}

function draw() {

  if (animating == true) {
    clear();
    image(cakepic[imageCounter], width / 2, height / 2);

    if (imageCounter < cakepic.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }

  }

}

function randomizer() {
  animating = false
  if (cake[0]) {
    background(random(200, 255));
    randomIndex = int(random(cake.length));
    //text('${cake[randomIndex].name}'s frosting is
    // ${cake[randomIndex].frosting}', 50, 50);
    text(cake[randomIndex].name + "'s frosting is " + cake[randomIndex].frosting, 75, height - 15);
    image(random(cakepic), width / 2, height / 2);
    cake.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 100, 50);
  }

}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 1000);


}
