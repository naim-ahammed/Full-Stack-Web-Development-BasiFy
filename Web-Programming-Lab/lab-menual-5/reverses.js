// 12 Lab Task (Please implement yourself and show the output to the
//     instructor)
//     Write a JavaScript function that reverses a number.
//     • Example x = 32243


function reverseNumber(num) {
    let reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed);
}

let x = 32243;
let result = reverseNumber(x);

console.log(`Original Number: ${x}`);
console.log(`Reversed Number: ${result}`);
