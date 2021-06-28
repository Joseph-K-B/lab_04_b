// const num1 = document.getElementById('even-odd');

// export function isOddEven() => {
    
//     if (num % 2 === 0) {document.getElementById('answer').innerHTML = num + 'is even';}
//     else {
//         document.getElementById('answer').innerHTML = num + 'is odd';
//     }
// }
// const output = document.getElementById('answer');
const hidden = document.getElementsByClassName('hidden');
const output = document.getElementById('answer');
// const hidden2 = document.getElementsByClassName('hidden2');

export function evenOdd(num1) {
    if (num1 % 2 === 0){
        return (output.textContent = 'Even!', (hidden[0].style.display = 'block'));
    }
    else if (num1 % 2 !== 0){
        return (output.textContent = 'Odd!', (hidden[1].style.display = 'block'));
    }
}
// export function evenOdd2(num1) {
//     if (num1 % 2 === 0){
//         return (hidden);
//     }
//     else {
//         return (hidden2);
//     }
// }

// export function oddEven(num1){
//     if (num1 % 2 !== 0){
//         return ('Odd!');
//     }
// }

// export function thumbsUp(num1) {
//     if (num1 % 2 === 0){
//         return (hidden);
//     }
//     else {
//         return (hidden2);
//     }}
// const hidden = document.getElementsByClassName('hidden');
// const hidden2 = document.getElementsByClassName('hidden2');
