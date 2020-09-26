

const assert = require("chai").assert;

const getTracks = require("../services/spotify/spotify.service.js");

describe("Spotifi services", function() {
    it("get token", async function() {
        const result = await getTracks("bad bunny");
        console.log(result);
    });
}); 