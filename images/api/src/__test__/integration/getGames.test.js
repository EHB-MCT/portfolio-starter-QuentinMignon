const knexConfig = require("./../../database/knexfile");
const knex = require("knex")(knexConfig.development);
const request = require("supertest");
const app = require("./../../app");

describe("GET /games", () => {
  test("Returns an array with all the games", async () => {
    const response = await request(app).get("/games");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
