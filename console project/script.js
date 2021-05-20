console.log(1 + 2);


// //he console.time() method starts a timer in the console view.
// This method allows you to time certain operations in your code for testing purposes.
// Use the console.timeEnd() method to end the timer and display the result in the console.view.
// Use the label parameter to name the timer, then you are able to have many timers on the same page.
// Tip: When testing console methods, be sure to have the console view visible (press F12 to view the console).

console.time();
for (i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd();
