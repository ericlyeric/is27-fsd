const server = require("../app");
const supertest = require("supertest");
const requestWithSupertest = supertest(server);

describe("Boat Endpoints", () => {
  it("GET /boat should show all boats", async () => {
    const res = await requestWithSupertest.get(
      `${process.env.BASE_API_URL}/boat/all`
    );
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
  });
});
