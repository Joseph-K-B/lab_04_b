// import functions
// import { evenOdd } from './is-even';

import { evenOdd } from "./is-even.js";

// import { isOddEven } from "./is-even.js";
const input = document.getElementById('even-odd');
const output = document.getElementById('answer');
const submitBtn = document.getElementById('input-btn');
// reference needed DOM elements

submitBtn.addEventListener('click', () =>{
    console.log(typeof(input.value));
    const even = Number(input.value);
    const answer1 = evenOdd(even);
    console.log(output);
    output.textContent = answer1;
});
// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
