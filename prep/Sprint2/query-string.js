function parseQueryString(queryString) {
    const obj = {};

    if (queryString === "") {
        return obj;

    } else if (!queryString.includes("&")) {

        // const [key, value] = queryString.split("=");

        const keyValuePair = queryString.split("=");    // ["colour", "blue"]
        const key = keyValuePair[0];
        const value = keyValuePair[1];
        obj[key] = value;

    } else {

        let keyValuePairs = queryString.split("&"); // ["color=blue", "sort=newest"]

        for (let i = 0; i < keyValuePairs.length; i++) {
            let split = keyValuePairs[i].split("=");      // ["color", "blue"]         ["sort", "newest"]
            obj[split[0].trim()] = split[1].trim();
        }
    }

    return obj;
}

module.exports = parseQueryString;


// function parseQueryString(queryString) {
//   const queryParams = {};
//   if (queryString.length === 0) {
//     return queryParams;
//   }

//   const keyValuePairs = queryString.split("&");

//   for (const pair of keyValuePairs) {
//     const [key, value] = pair.split("=");
//     queryParams[key] = value;
//   }

//   return queryParams;
// }