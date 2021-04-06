//cake flavors
let cake = [];

let randomIndex;
let animating = false;

let Cakepic = [];
let imageCounter = 1;
let startRandomizerbutton;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;

function preload() {

  for (let i = 1; i <= 13; i++) {
  Cakepic[i] = loadImage("assets/Cakepic_" + i + ".jpeg")

  }
}

function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");
  background(300);
  textSize(32);
  imageMode(CENTER);
  frameRate(8);

  text("Type in Cake Flavors", 175, 50);
  text("& Click to Randomize!", 175, 100);

//  button = createButton("click to randomize");
  startRandomizerbutton = select("#randButton")
  startRandomizerbutton.mousePressed(buttonPressed);
  startRandomizerbutton.style("padding", "20px");
  startRandomizerbutton.style("background-color", "#fab9ef");

  addMoreButton = select("#addMoreButton")
  addMoreButton.mousePressed(addAnotherInput);
  addMoreButton.style("padding", "20px");
  addMoreButton.style("background-color", "#fab9ef");

for (let i = 0; i < 3; i++){
nameInputs.push(createInput());
nameInputs[nameInputs.length - 1].parent("#inputFields");

}
}

function draw() {

  if (animating == true) {
    clear();
    image(Cakepic[imageCounter], width/2, height/2);

    if (imageCounter < Cakepic.length - 1) {
      imageCounter++;
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
    //text(cake[randomIndex] + "'s frosting is " + cake[randomIndex].frosting, 75, height - 15);
    image(random(Cakepic), width / 2, height / 2);
    text(cake[randomIndex], width / 2, height - 15);
    cake.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("Refresh Page", 175, 200);
    text("to Play Again!", 175, 250);
  }

}

function addAnotherInput(){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");

}

function buttonPressed() {

  if (firstTime == true){
for (let i = 1; i < nameInputs.length; i++){
  cake.push(nameInputs[i].value());
}
firstTime = false
}

  animating = true;
  setTimeout(randomizer, 1000);


}
