

const assert = require("chai").assert;

const getToken = require("../services/token.service");

describe("Spotifi services", function() {

    it("get track", async function() {


        const result = await getToken();


        console.log(result);
    });
}); 