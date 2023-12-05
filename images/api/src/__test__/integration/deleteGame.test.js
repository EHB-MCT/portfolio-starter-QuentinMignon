const knexConfig = require("./../../database/knexfile");
const knex = require("knex")(knexConfig.development);
const request = require("supertest");
const app = require("./../../index");

describe("DELETE /games/:nameGame", () => {
  beforeAll(async () => {
    await knex("games").insert({
      game: "testGame",
      category: "test",
    });
  });

  //   afterAll(async () => {
  //     await knex("games").where("game", "testGame").del();
  //   });
  test("Get game by gameName", async () => {
    const response = await request(app).delete("/games/testGame");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Game successfully deleted");
  });

  test("Returns 404 if the game doesn't exists", async () => {
    const response = await request(app).delete("/games/randomName");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Game doesn't exists");
  });
});
