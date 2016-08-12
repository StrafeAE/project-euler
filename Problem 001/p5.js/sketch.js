// Author: Strafe AE
// https://github.com/StrafeAE/project-euler
// For more on p5.js
//  - p5js.org
//  - https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw
//  - shiffman.net


// Declare constants at the top of the program
const problem = 'Problem: Find the sum of all multiples of 3 and 5 below 1000.';
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
  
  // Calculate and write the O(1) answer
  var ansA = 'O(1) Solution: '+solutionA(1000);
  text(ansA, 10, fontSize*3, width-20, fontSize);
  
  // Calculate and write the O(N) answer
  var ansB = 'O(N) Solution: '+solutionB(1000);
  text(ansB, 10, fontSize*4, width-20, fontSize);
  
  // Don't waste time calculating it again
  noLoop();
}

function solutionA(n){
  var startTime = millis(); // Used for timing
  
  /* The O(1) algorithm can be explained using high
  ** school algebra. If we look at all multiples of
  ** 3, it creates an arithmetic sequence. This also
  ** happens if we look at the multiples of 5. To 
  ** find the sum of an arithmetic sequence, we use
  ** the formula: n*(a_1 + a_n)/2 -- where a is the
  ** sequence and n is the length of the sequence.
  ** Using this we can calculate the sum of all
  ** multiples of 3 AND all multiples of 5. But the
  ** problem asks us for the sum of all multiples of
  ** 3 OR 5, so if we look at the numbers that are
  ** multiples of 3 and 5, we get another arithmetic
  ** sequence of multiples of 15. If we subtract the
  ** sum of that sequence from the previous answer, 
  ** we will have our final answer.               */
  
  var sum = 0;
  sum += floor((n-1)/ 3)*( 3+floor((n-1)/ 3)* 3)/2; // Sum of multiples of 3
  sum += floor((n-1)/ 5)*( 5+floor((n-1)/ 5)* 5)/2; // Sum of multiples of 5
  sum -= floor((n-1)/15)*(15+floor((n-1)/15)*15)/2; // Sum of multiples of 15
  return sum + '(' + floor(millis() - startTime) + 'ms)';
}

function solutionB(n){
  var startTime = millis(); // Used for timing
  
  /* The O(N) algorithm is much easier to understand
  ** than the previous algorithm. We check every
  ** single number from 1 to 999, to see if it is
  ** divisible by 3 OR 5. If the number is, then we
  ** add it to our sum.                           */
  
  var sum = 0;
  for (var i = 0; i < n; i++){ // Check every number
    if (i % 3 == 0 || i % 5 == 0){ // Check for divisibility
      sum += i; // Add to the sum
    }
  }
  return sum + '(' + floor(millis()-startTime) + 'ms)';
}