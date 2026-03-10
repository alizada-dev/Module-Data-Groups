// function oddOrEven(array) {
//     return (array.reduce((a, b) => a + b, 0) % 2 === 0) ? "even" : "odd";
// }


// function arrayPlusArray(arr1, arr2) {
//     return [...arr1, ...arr2].reduce((a, b) => a + b);
// }


// function flattenAndSort(array) {
//     return array.flat().sort((a, b) => a - b);
// }

// filter() creates a new array containing elements that pass a condition
// indexOf() returns the first index where that value appears in the array.

function uniqueSum(list) {
    let uniqueArr = list.filter((item, index) => {
        return list.indexOf(item) == index;
    })

    return (uniqueArr.length > 0) ? uniqueArr.reduce((a, b) => a + b) : null;
    // return uniqueArr.reduce((a, b) => a + b, null);
}

// function uniqueSum(list) {
//     return [... new Set(list)].reduce((a, b) => a + b, null);
// }