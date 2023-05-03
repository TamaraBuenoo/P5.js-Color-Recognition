// https://teachablemachine.withgoogle.com/models/FYKEt_FiH/
//
let vid;
// For displaying the label
let conf;
let label = "waiting...";
let classifier;
let FROG, Cat, OCTO, SUPERCAT;
let pepe, pika, shark, yogacat, dancecat;

let modelURL = "https://teachablemachine.withgoogle.com/models/FYKEt_FiH/";

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + "model.json");

  Cat = loadAnimation("Cat/transparent cat.gif");
  OCTO = loadAnimation("OCTO/OCTO.gif");
  SUPERCAT = loadAnimation("S/SUPERCAT.gif");
  FROG = loadAnimation("F/FROG.gif");
  pepe = loadAnimation("pepe/pepe.gif");
  pika = loadAnimation("pika/pika.gif");
  shark = loadAnimation("shark/shark.gif");
  yogacat = loadAnimation("yogacat/yogacat.gif");
  dancecat = loadAnimation("dancecat/dancecat.gif");
}

function setup() {
  // mode = 0;
  createCanvas(640, 520);
  // Create the video
  vid = createCapture(VIDEO);
  vid.hide();
  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(vid, gotResults);
}

function draw() {
  background(255, 192, 203);

  // Draw the video
  image(vid, 0, 0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  //text(label);
  text(label + conf, width / 2, height - 16);

  // Pick an emoji, the "default" is train
  //let emoji = "🌎";
  if (label == "waiting") {
    text("hi");
  }
  if (label == "Pink") {
    OCTO.draw(250, 250);
    fill(255, 192, 203);
    text('Pink often can represent softness and ', 350 ,150);
    text('femininity, and a deep need to be a', 350, 300);
    text('ccepted and loved unconditionally.', 350, 350);
    
  } else if (label == "LightBlue") {
    Cat.draw(250, 250);
    fill(173, 216, 230);
    text('LightBlue is said to represent your sensitive', 350 ,150);
    text(' and reliable side,', 350, 300);
    text('with a consistent effort to think of others.', 350, 350);
    
    //LightBlue is said to represent your sensitive and reliable side, with a consistent effort to think of others.
  } else if (label == "Yellow") {
    SUPERCAT.draw(250, 250);
    fill(240,230,140);
    text('Yellow is the color of sunshine,', 350 ,150);
    text('and will instantly invite feelings of warmth,', 350, 300);
    text('happiness, and love into your home.', 350, 350);
    
    //Yellow is the color of sunshine, and will instantly invite feelings of warmth, happiness, and love into your home.
  } else if (label == "Red") {
    dancecat.draw(250,250);
    fill(210, 43, 43);
    text("Red is the color choice to let the ", 330, 150);
    text("world know you choose to live life", 330, 300);
    text("to the fullest.", 330, 350);
    
  } else if (label == "LightYellow") {
    //FROG.draw(250,250);
    pika.draw(250, 250);
    fill(240,230,140);
    text('You probably love to express your individualit', 350 ,150);
    text('by creating new ideas and sharing your ', 350, 300);
    text('collected knowledge with others. ', 350, 350);
    //You probably love to express your individuality by creating new ideas and sharing your collected knowledge with others, and might have a deep need for logical order in your everyday life.
    
  } else if (label == "Green") {
    FROG.draw(250, 250);
    fill(154,205,50);
    text("A good reputation is very important to you,", 330, 150);
    text("you might feel a deep need to feel safe &", 330, 300);
    text("secure, with a deep longing to love & be loved.", 330, 350);
    // A good reputation is very important to you, and you might feel a deep need to feel safe and secure, with a deep longing to love and be loved.
    
  } else if (label == "Purple") {
    shark.draw(250, 250);
    fill(230,230,250);
    text("A little moody sometimes?", 330, 150);
    text("Maybe, but that's only because you", 330, 300);
    text("experience and feel everything so deeply", 330, 350);
    //A little moody sometimes? Maybe, but that's only because you experience and feel everything so deeply.
    
  } else if (label == "Orange") {
    pepe.draw(250, 250);
   fill(255,165,0);
    text("A popular color scheme for kitchens &", 330, 150);
    text(" homes of the 1960s and 70s,represents a", 330, 300);
    text("positive change in society", 330, 350);
    //A popular color scheme for kitchens and homes of the 1960s and 70s, the color orange represented a positive change in society and an embrace of bold color schemes and accessories in fashion and décor.
    
  } else if (label == "DeepBlue") {
    yogacat.draw(250, 250);
    fill(100,149,237);
    text("Blue is the most popular choice among ", 330, 150);
    text("favorite colors, said to represent a deep ", 330, 300);
    text("need for personal inner peace and truth.", 330, 350);
    //Blue is the most popular choice among favorite colors, said to represent a deep need for personal inner peace and truth.

  }
  textSize(256);
  
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  conf = results[0].confidence.toFixed(2);
  // console.log(p);
  classifyVideo();
}
