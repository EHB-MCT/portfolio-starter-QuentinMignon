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
    await knex("games").where("game", "Newgame").del();
  });
  test("Returns 200 and success message when gamename is updated", async () => {
    const updatedGameData = {
      game: "Newgame",
    };

    const response = await request(app)
      .put(`/games/testGame`)
      .send(updatedGameData);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Game successfully updated");
  });

  test("Returns 404 if the game doesn't exists", async () => {
    const updatedGameData = {
      game: "Newgame",
    };
    const response = await request(app)
      .put(`/games/testGame`)
      .send(updatedGameData);
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Game not found");
  });
});
