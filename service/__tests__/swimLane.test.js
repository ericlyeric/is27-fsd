const server = require("../app");
const supertest = require("supertest");
const requestWithSupertest = supertest(server);

describe("SwimLane Endpoints", () => {
  it("GET /swimlanes, gets all the swimlanes", async () => {
    const res = await requestWithSupertest.get(
      `${process.env.BASE_API_URL}/swimlane`
    );
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
  });
});
