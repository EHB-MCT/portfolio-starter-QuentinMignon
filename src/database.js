const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "playerdb",
  },
});

async function main() {
  try {
    const exists = await knex.schema.hasTable("players");
    if (!exists) {
      console.log("inside");
      await knex.schema.createTable("players", (table) => {
        table.increments("id").primary();
        table.string("name");
        table.string("position");
      });
      await knex("users").insert([
        { name: "Mbappé", position: "Forward" },
        { name: "Ronaldo", position: "Forward" },
        { name: "Messi", position: "Forward" },
        { name: "Bellingham", position: "Midfielder" },
        { name: "De Bruyne", position: "Midfielder" },
        { name: "Camavinga", position: "Midfielder" },
        { name: "Mendy", position: "Defender" },
        { name: "Ramos", position: "Defender" },
        { name: "Gvardiol", position: "Defender" },
        { name: "Walker", position: "Defender" },
        { name: "Mignolet", position: "Keeper" },
      ]);
    }
  } catch (error) {
    console.error("Error", error);
  }
}

main();

module.exports = knex;
