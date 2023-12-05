const express = require("express");
const app = express();
const knexConfig = require("./database/knexfile.js");
const knex = require("knex")(knexConfig.development);
const cors = require("cors");
const checkGameData = require("./__test__/helpers/checkGameData.js");

app.use(express.json());
app.use(cors());

app.get("/games", async (req, res) => {
  const games = await knex("games").select();
  res.status(200).json(games);
});

app.get("/games/:nameGame", async (req, res) => {
  const nameOfGame = req.params.nameGame;
  const checkExistGame = await knex("games").where("game", nameOfGame);
  if (checkExistGame == 0) {
    return res.status(404).json({ message: "Game doesn't exists" });
  }
  return res.status(200).json(checkExistGame);
});

app.post("/games", async (req, res) => {
  if (!checkGameData(req.body)) {
    return res
      .status(404)
      .json({ message: "Please fill in the missing fields" });
  }
  const newGame = {
    game: req.body.game,
    category: req.body.category,
  };
  await knex("games").insert(newGame);

  res.status(200).send({ message: "Game successfully added" });
});

app.delete("/games/:nameGame", async (req, res) => {
  const nameOfGame = req.params.nameGame;
  const checkGame = await knex("games").where("game", nameOfGame);
  if (checkGame.length != 0) {
    await knex("games").where("game", nameOfGame).del();
    return res.status(200).json({ message: "Game successfully deleted" });
  }
  return res.status(404).json({ message: "Game doesn't exists" });
});

app.put("/games/:nameGame", async (req, res) => {
  if (!req.body.game) {
    return res.status(400).send("Please fill in the missing fields");
  }
  const gameName = req.params.nameGame;
  const checkExistGame = await knex("games").where("game", gameName);
  if (checkExistGame.length == 0) {
    return res.status(404).json({ message: "Game not found" });
  }
  await knex("games").where("game", gameName).update({ game: req.body.game });
  res.status(200).json({ message: "Game successfully updated" });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

module.exports = app;
