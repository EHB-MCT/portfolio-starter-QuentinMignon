const express = require("express");
const app = express();
const knex = require("./database.js");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

app.get("/players", async (req, res) => {
  const players = await knex("players").select();
  res.json(players);
});

app.get("/players/:namePlayer", async (req, res) => {
  const nameOfPlayer = req.params.namePlayer;
  const players = await knex("players").where("name", nameOfPlayer);
  res.json(players);
});

app.post("/players", async (req, res) => {
  if (!req.body.name || !req.body.position) {
    return res.status(400).send("Please fill in the missing fields");
  }
  const newPlayer = {
    name: req.body.name,
    position: req.body.position,
  };
  await knex("players").insert(newPlayer);

  res.status(200).send("Player successfully added");
});

app.delete("/players/:namePlayer", async (req, res) => {
  const nameOfPlayer = req.params.namePlayer;
  console.log(nameOfPlayer);
  await knex("players").where("name", nameOfPlayer).del();
  res.status(200).send("Player successfully deleted");
});
