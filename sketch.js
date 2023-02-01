//define variables for starry background
var starx = [];
var stary = [];
var starr = [];

//define variables for the "second" stars 
var secondstarsx = [];
var secondstarsy = [];

//define a universal variable 
var index; 
//create array for color of the gigantic star
var ooocometcolor = ['#4a4a74', '#51744a', '#744a4a', '#6b4a74', '#4a7374'];
//create array for color of "second" stars
var ooostarcolor = ['#d2d8b3', '#bf98a0', '#aa6373', '#c19875', '#f2e3bc']; 

function setup() {
  //create the canvas to fit the screen
  createCanvas(windowWidth, windowHeight);
  //set the parameters for the stars in the starry background 
  for (var i = 0; i <= 300; i++) {
    //set the star's x-position to random x-coordinates along the canvas
    starx[i] = random(width);
    //set the star's y-position to random y-coordinates along the canvas
    stary[i] = random(height); 
    //the radii of the circles, aka stars, will range from 0 to 3
    starr[i] = random(3);
  }
  
  //set the parameters for the "second" stars 
  for (s = 0; s <= 23; s++) {
    //set the "second" stars' x-position to random x-coordinates along the canvas
    secondstarsx[s] = random(75, 3 * width - 25);
    //set the "second" stars' y-position to random y-coordinates along the canvas
    secondstarsy[s] = random(75, 3 * height - 25);
  } 
  //set the variable index to choose a random number from 0 to 4
  index = floor(random(0,4));
}

function draw() {
//STARRY MORNING/NIGHT BACKGROUND
  //define variables and set them equal to known p5 functions 
  var hr = hour();
  var min = minute();
  var sec = second();
  
  if (hour() < 12) {
    //if the known p5 function of hour() is less than 12, then set the background equal to the light blue color and call the function starrystarrystarry to create a starry background
    background('#17CBF3');
    starrystarrystarry();
  }else if (hour() == 12){
    //if the known p5 function of hour() is equal to 12, then set the background equal to the teal-ish color 
    background('#0E7B99');
  }else {
    //if the known p5 function of hour() is greater than 12, then set the background equal to the navy color and call the function starrystarrystarry to create a starry night background 
    background('#030C61');
    starrystarrystarry();
  }
  
//CLOCK DISPLAYING TIME
  //set the text color to white
  fill('white');
  //set the outline of the text to white
  stroke('white');
  //make the text bold
  textStyle(BOLD);
  //make the text size 30 
  textSize(30);
  //make the text written in the font family Georgia 
  textFont('Georgia');
  //using the defined variables of hr, min, and sec, which are equated to known p5 functions, display the time at the given position  
  text(hr + ':' + min + ':' + sec, width/2 - 15, 40);

  //calling functions 
  invisiblesunmoon();
  giganticstarstar();
  ministarshehe();
}

function giganticstarstar () {
//GIGANTIC STAR HOUR CLOCK
  //define variables and set them equal to values 
  var giganticstarfriendX = 0;
  var giganticstarfriendY = 60;
  var insidex = 0;
  
  push();
    //move the gigantic star once per hour 
	translate(map(hour(), 0, 23, -15, width + 10), giganticstarfriendY);
    //set the parameters for the gigantic star's rings 
    while (insidex <= width) {
      //fill the outer ring with a random color from the array ooocometcolor 
      fill(ooocometcolor[index]);
      //create an ellipse at this location and with a radius of 250
      ellipse(0, 400, 250, 250);
    
      //fill the middle ring with the color white
      fill('white');
      //create an ellipse at this location and with a radius of 200
      ellipse(0, 400, 200, 200);
    
      //fill the inner ring with the color brown 
      fill('#574A11');
      //create an ellipse at this location and with a radius of 150
      ellipse(0, 400, 150, 150);
      
      //add 100 to the variable insidex
      insidex = insidex + 100;
  }
  pop();
}

function ministarshehe () {
  //set the parameters for the "second" stars, ensuring that it aligns with seconds in real life 
  for (var s = 0; s < second(); s++){
    push();
    //outline color
    stroke('#EDF106'); 
    //how bold the outline is 
    strokeWeight(3); 
    //fill the "second" stars with a random color from the array ooostarcolor
    fill(ooostarcolor[index]);
    
    //begin drawing a "second" star, following the "directions" below
    beginShape();
      //multiply the star size by 0.4
      scale(0.4);
      //create one of the vertices for a "second" star at this location
      vertex(secondstarsx[s] + 35, secondstarsy[s] + 3);
      //create one of the vertices for a "second" star at this location
      vertex(secondstarsx[s] + 46, secondstarsy[s] + 22);
      //create one of the vertices for a "second" star at this location
      vertex(secondstarsx[s] + 68, secondstarsy[s] + 28);
      //create one of the vertices for a "second" star at this location
      vertex(secondstarsx[s] + 54, secondstarsy[s] + 45);
      //create one of the vertices for a "second" star at this location
      vertex(secondstarsx[s] + 56, secondstarsy[s] + 67);
      //create one of the vertices for a "second" star at this location
      vertex(secondstarsx[s] + 35, secondstarsy[s] + 58);
      //create one of the vertices for a "second" star at this location
      vertex(secondstarsx[s] + 14, secondstarsy[s] + 67);
      //create one of the vertices for a "second" star at this location
      vertex(secondstarsx[s] + 16, secondstarsy[s] + 45);
      //create one of the vertices for a "second" star at this location
      vertex(secondstarsx[s] + 2,  secondstarsy[s] + 28);
      //create one of the vertices for a "second" star at this location
      vertex(secondstarsx[s] + 24, secondstarsy[s] + 22);
    //finish drawing a "second" star 
    endShape(CLOSE);
    pop();
  }
}

function invisiblesunmoon () {
//SUN/MOON MINUTE CLOCK
  //define variable and set it to known p5 function
  var min = minute();
  
    //set the color of the circle
    fill('#EDF106'); 
    //no outline for the circle
    noStroke();
    //create the circle
    circle(140,130,200);
  
    if (hour() < 12) {
    //if the hour is less than 12, then...
      //set the background color of the circle to a light blue
      fill('#17CBF3');
      //no outline for the circle 
      noStroke();
      //create the circle at this location, which changes depending on the minute 
      circle(189 + min, 130, 203);
    }else if (hour() == 12) {
    //if the hour is equal to 12, then...
      //set the background color of the circle to white
      fill('#0E7B99');
      //no outline for the circle 
      noStroke();
      //create the circle at this location, which changes depending on the minute 
      circle(189 + min, 130, 203);
    }else{
    //if the hour is more than 12, then...
      //set the background color of the circle 
      fill('#030C61');
      //no outline for the circle
      noStroke();
      //create the circle at this location, which changes depending on the minute 
      circle(189 + min, 130, 203);
    }
}

function starrystarrystarry () {
  //color of the circles aka stars 
  fill(255, 252, 235);
  //no outline
  noStroke();
  //set the parameters for the stars in the starry background
  for (var i = 0; i <= 300; i++) {
  //set the location and radii of the circles, aka stars, to the  variables defined in function setup
    circle(starx[i], stary[i], starr[i]);
  }
}