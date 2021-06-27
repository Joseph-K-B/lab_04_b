// IMPORT MODULES under test here:
import { evenOdd } from '../is-even.js';
import { oddEven } from '../is-even.js';
const test = QUnit.test;

// // name your test by what it is testing
test ('test-Odd-Even', (expect) => {
    const expected = 'Even!' ;
    const actual = evenOdd(10);
    expect.equal(actual, expected);
});

test ('test-Even-Odd', (expect) => {
    const expected = 'Odd!' ;
    const actual = oddEven(9);
    expect.equal(actual, expected);
});


// test ('test-pics', (expect) => {
//     const expected = document.getElementById('thumbs-up');
//     const actual = thumbsUp(10);
//     expect.equal = (actual, expected);
// });


// test('time to test a function', (expect) => {

//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = true; // use your function here

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });
