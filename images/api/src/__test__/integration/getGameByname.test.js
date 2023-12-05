const knexConfig = require("./../../database/knexfile");
const knex = require("knex")(knexConfig.development);
const request = require("supertest");
const app = require("./../../index");

describe("PUT /games/:nameGame", () => {
  beforeAll(async () => {
    await knex("games").insert({
      game: "testGame",
      category: "test",
    });
  });

  afterAll(async () => {
    await knex("games").where("game", "testGame").del();
  });

  test("Returns with 200 and retrieves a single game by name", async () => {
    const response = await request(app).get(`/games/testGame`);
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  test("Returns with 404 if the game is not found", async () => {
    const response = await request(app).get(`/games/randomName`);
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: "Game doesn't exists" });
  });
});
