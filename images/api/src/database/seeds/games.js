/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const checkGamesTable = await knex("games").select();
  if (checkGamesTable == 0) {
    await knex("games").insert([
      { game: "GTA 5", category: "Story" },
      { game: "Call of duty MW3", category: "War" },
      { game: "EA FC 24", category: "Sport" },
      { game: "Need for speed heat", category: "Cars" },
      { game: "The crew motorfest", category: "Cars" },
      { game: "F1 2024", category: "Cars" },
      { game: "Battlefield", category: "War" },
      { game: "Fall guys", category: "Arcade" },
      { game: "UFC 5", category: "Sport" },
      { game: "Rocket Leage", category: "Arcade" },
      { game: "NBA 2K24", category: "Sport" },
    ]);
  }
};
