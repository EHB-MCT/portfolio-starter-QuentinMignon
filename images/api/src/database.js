const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.POSTGRES_HOST,
    port: 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  },
});

async function main() {
  try {
    const exists = await knex.schema.hasTable("players");
    console.log(exists)
    if (!exists) {
      console.log("inside");
      await knex.schema.createTable("players", (table) => {
        table.increments("id").primary();
        table.string("name");
        table.string("position");
      });
      await knex("players").insert([
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
