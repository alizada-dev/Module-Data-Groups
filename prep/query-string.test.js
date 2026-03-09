const parseQueryString = require("./query-string")

describe("parseQueryString", () => {
    test("given a query string with no query parameters, returns an empty object", () => {
        const input = "";
        const currentOutput = parseQueryString(input);
        const targetOutput = {};
        expect(currentOutput).toStrictEqual(targetOutput);
    });

    test("given a query string with one pair of query params, returns them in object form", () => {
        const input = "sort=newest";
        const currentOutput = parseQueryString(input);
        const targetOutput = { sort: "newest" };
        expect(currentOutput).toEqual(targetOutput);
    });

    test("given a query string with multiple key-value pairs, returns them in object form", () => {
        const input = "colour=blue&sort=newest";
        const currentOutput = parseQueryString(input);
        const targetOutput = { colour: "blue", sort: "newest"};
        expect(currentOutput).toStrictEqual(targetOutput);
    });

    test("given a query string with multiple key-value pairs, returns them in object form", () => {
        const input = "colour=blue&sort=newest&size=xlarge";
        const currentOutput = parseQueryString(input);
        const targetOutput = { colour: "blue", sort: "newest", size: "xlarge"};
        expect(currentOutput).toEqual(targetOutput);
    });

})