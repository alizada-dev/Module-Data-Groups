const calculateMedian = require('./median.js');

test("calculates the median of a list of odd length", () => {
    const list = [10, 20, 30, 50, 60];
    const currentOutput = calculateMedian(list);
    const targetOutput = 30;

    expect(currentOutput).toEqual(targetOutput);
});

test("calculates the median of a list of odd length", () => {
    expect(calculateMedian([3, 1, 6])).toEqual(1);
})

test("doesn't modify the input", () => {
    const list = [1, 2, 3];
    calculateMedian(list);

    expect(list).toEqual([1, 2, 3]);
})


test("median", () => {
    expect(calculateMedian([1, 2, 3, 4])).toEqual(2.5);
    expect(calculateMedian([1, 2, 3, 4, 5, 6])).toEqual(3.5);
    expect(calculateMedian([1, 2, 3, 4, 5, 6, 1, 2])).toEqual(4.5);
    expect(calculateMedian([1, 5, 3, 9])).toEqual(4);
})