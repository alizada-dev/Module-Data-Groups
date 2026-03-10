
// function calculateMean(arr) {
//     return arr.reduce((a, b) => a + b) / arr.length;
// }

// const items = [6, 11, 7];

// console.log(calculateMean(items));


function calculateMean(list) {
    let total = 0;

    for (const element of list) {
        total += element;
    }

    return total / list.length;
}

module.exports = calculateMean;



