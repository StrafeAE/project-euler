// Author: Strafe AE
// https://github.com/StrafeAE/project-euler
// For more on p5.js
//  - p5js.org
//  - https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw
//  - shiffman.net


// Declare constants at the top of the program
const problem = 'Problem: Find the sum of all even Fibonacci numbers below 4 million.';
const fontSize = 30;

// Various things to set up the screen for writing text
function setup() {
  createCanvas(640, 360); //Create the canvas
  background(0); //Black background
  fill(255); //White writing
  textFont('Consolas'); //Monospace font
  textSize(fontSize); //Set the font size
  textLeading(fontSize); //Set the spacing
}

function draw() {
  // Write the problem statement
  text(problem, 10, 0, width-20, fontSize*2);
  
  // Calculate and write the Bruteforce answer
  var ansA = 'Bruteforce Solution: '+solutionA(4000000);
  text(ansA, 10, fontSize*3, width-20, fontSize);
  
  // Calculate and write the Even-only answer
  var ansB = 'Evens-only Solution: '+solutionB(4000000);
  text(ansB, 10, fontSize*4, width-20, fontSize);
  
  // Don't waste time calculating it again
  noLoop();
}

function solutionA(n) {
  var startTime = millis(); // Used for timing
  
  /* This problem is pretty straightforward in that
  ** all you have to do is generate fibonacci numbers
  ** and test if they are even. The following code is
  ** a bruteforce solution to this problem.       */
  
  var sum = 0;
  var fibA = 1; // Store the last two
  var fibB = 1; // fibonacci numbers
  while (fibB < n){
    if (fibB % 2 == 0){ // Check if the result is even
      sum += fibB;
    }
    var next = fibA + fibB; // Generate the next number
    fibA = fibB; // Change to the last two numbers used
    fibB = next;
  }
  return sum + '(' + floor(millis() - startTime) + 'ms)';
}

function solutionB(n) {
  var startTime = millis(); // Used for timing
  
  /* This solution is a little harder to figure out. You
  ** had to recognize a pattern between the odd fibonacci
  ** numbers and use this to your advantage. If you look
  ** at all the even fibonacci numbers, [2,8,34,136,...],
  ** you might derive the formula: F_n = 4 * F_n-1 + F_n-2
  ** This is the formula we will be using in the second
  ** solution, without needing to check if it is even.  */
  
  var sum = 0;
  var fibA = 0; // First two even fibonacci numbers
  var fibB = 2;
  while (fibB < n){
    sum += fibB;
    var next = 4*fibB + fibA; // Generate the next one
    fibA = fibB; //Change the last two numbers
    fibB = next;
  }
  return sum + '(' + floor(millis() - startTime) + 'ms)';
}
