// In JavaScript, arrays and objects are reference types: everything else is a value type.

// function doublesNumbers(nums) {
//     return nums.map(a => a * 2);
// }


// Write a function which takes an array as a parameter
// and swaps the first element with the last element

function swapFirstAndLast(arr) {
    const firsElement = arr.shift();
    const lastElement = arr.pop();

    arr.unshift(lastElement);
    arr.push(firsElement);

    return arr;


    // [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

    // return arr;
}

const myArray = [5, 2, 3, 4, 1];

console.log(swapFirstAndLast(myArray));







