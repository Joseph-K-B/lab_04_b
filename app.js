// import functions
// import { evenOdd } from './is-even';
import { oddEven } from './is-even.js';
import { evenOdd } from './is-even.js';
//import { thumbsUp} from './is-even.js';
// import { isOddEven } from "./is-even.js";
const input = document.getElementById('even-odd');
const output = document.getElementById('answer');
const submitBtn = document.getElementById('input-btn');
const hidden = document.getElementsByClassName('hidden');
const hidden2 = document.getElementsByClassName('hidden2');
// reference needed DOM elements

submitBtn.addEventListener('click', () =>{
    console.log(typeof(input.value));
    const even = Number(input.value);
    const answer1 = evenOdd(even);
    console.log(output);
    output.textContent = answer1;
//     if (even) {
//         return output.getElementsByClassName = hidden};
//     else {
//       return output.getElementsByClassName = hidden2};
});

submitBtn.addEventListener('click', () => {
    hidden[0].style.display = 'block';
});
 

submitBtn.addEventListener('click', () =>{
    hidden2[0].style.display = 'block';
});

// submitBtn.addEventListener('click', () => {
//     thumbsUp[0].style.display = 'block';
// });







// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
