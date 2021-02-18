/************************************************
MoodStates
  by Fiona Young
Overview – This project displays an array of images

------------------------------------------------
Notes: 
(1) The functions drawn are all seperate features.
************************************************/


//Global variables
var images = [];
var drawFunction;
var gTextOffset = 20;
var strings = [];
var midX
var startY;
var lineHeight = 32;

//Preload code
function preload() {
  images[0] = loadImage('assets/one.png');
  images[1] = loadImage('assets/two.png');
  images[2] = loadImage('assets/three.png');
  images[3] = loadImage('assets/four.png');
  images[4] = loadImage('assets/five.png');
  images[5] = loadImage('assets/splash.png');
}


//Setup code
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);
    
  midX = width/2;
  startY = 40;

  // set to one for startup
  drawFunction = drawSplash;
}


//Draw code
function draw() {
  background(192);

  // will call your state machine function
  drawFunction();
    
  loadInstructions();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

drawSplash = function() {
   image(images[5],width/2, height/2);
    
   fill(98, 168, 140);
   text("Click to see instrustions", width/2, height - gTextOffset);
}

drawInstructions = function() {
   fill(98, 168, 140);
   for( let i = 0 ; i < strings.length; i++ ) {
    text( strings[i], midX, startY + (i * lineHeight) )
  }
}

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
   image(images[0],width/2, height/2);

   fill(98, 168, 140);
   text("Stressed", width/2, height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
   image(images[1],width/2, height/2);

   fill(98, 168, 140);
   text("ZonedOut", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
   image(images[2],width/2, height/2);

   fill(98, 168, 140);
   text("Anxious", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawFour = function() {
   image(images[3],width/2, height/2);

   fill(98, 168, 140);
   text("Dying", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
drawFive = function() {
   image(images[4],width/2, height/2);

   fill(98, 168, 140);
   text("Annoyed", width/2, height - gTextOffset);
}



//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
      if( drawFunction === drawSplash ) {
        return;
      }
    
      if( key === '1' ) {
        drawFunction = drawOne;
      }
      else if( key === '2' ) {
        drawFunction = drawTwo;
      }
      else if( key === '3' ) {
        drawFunction = drawThree;
      }
      else if( key === '4' ) {
        drawFunction = drawFour;
      }
      else if( key === '5' ) {
        drawFunction = drawFive;
      }
      else if( key === 's' ) {
        drawFunction = drawSplash;
      }
    }

function loadInstructions() {
    fill(98, 168, 140);
	strings[0] = "Start your horses, folks!";
	strings[1] = "Press S to go to the starting page";
	strings[2] = "Press keys 1 – 5 to view each page";
}

function mousePressed() {
  if( drawFunction === drawSplash ) {
    drawFunction = drawInstructions;
  }
}