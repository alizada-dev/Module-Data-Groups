// You’ll be writing in a “test driven development” style.
// This means you will write a test for the problem first, then write the code to make the test pass.

const calculateMean = require('./mean.js');

test("calculate the mean", () => {
    const list = [3, 50, 7];
    const currentOutput = calculateMean(list);
    const targetOutput = 20;

    expect(currentOutput).toEqual(targetOutput);
});


test("calculate the mean", () => {
    expect(calculateMean([1, 2, 3])).toEqual(2);
})