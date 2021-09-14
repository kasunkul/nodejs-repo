const { assert } = require("chai");
const axios = require("axios");
let api_token = "";

describe("task/getAll GET", () => {
    before(async() => {
        let response = await axios.post("http://localhost:5000/auth/login", {
            email: "u1@luckyshine.xyz",
            password: "luckyshine001",
        });
        let response_data = response.data;
        api_token = response_data.access_token;
    });

    it("should successfully get a list of tasks", async() => {
        let response = await axios.get(
            "http://localhost:5000/task/getAll", {}, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${api_token}`,
                },
            }
        );

        let response_status = response.status;
        let response_data = response.data;

        //verify the reposonse status is correct
        assert.strictEqual(response_status, 200, "status code incorrect");

        //verify the reposonse data is correct
        assert.isArray(response_data, "Data format is incorrect");
    });
});