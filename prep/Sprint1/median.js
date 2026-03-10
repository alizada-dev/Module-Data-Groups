// Method 1 for array of even length
// function calculateMedian(list) {
//     const middle = list[Math.round((list.length - 1) / 2)];
//     return middle;
// }

// for array of even and odd lengths
function calculateMedian(list) {
    const middleIndex = Math.floor(list.length / 2);

    if (list.length % 2 === 0) {
        return (list[middleIndex - 1] + list[middleIndex]) / 2;
    } else {
        return list[middleIndex];
    }
}

module.exports = calculateMedian;