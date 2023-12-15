const knexConfig = require("./../../database/knexfile");
const knex = require("knex")(knexConfig.development);
const request = require("supertest");
const app = require("./../../app");

describe("POST /games", () => {

  afterAll(async () => {
    await knex("games").where("game", "TestGame").del();
  });

  test("Gives a success message when game is added", async () => {
    const newGameData = {
      game: "TestGame",
      category: "testing",
    };
    const response = await request(app).post("/games").send(newGameData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Game successfully added" });
  });

  test("Gives an error message when inputs are empty", async () => {
    const newGameData = {
      game: "",
      category: "",
    };
    const response = await request(app).post("/games").send(newGameData);
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      message: "Please fill in the missing fields",
    });
  });
});
