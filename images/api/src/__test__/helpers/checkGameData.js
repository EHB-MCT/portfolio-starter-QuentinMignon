function checkGameData(game) {
  if (
    game.game == "" ||
    game.category == "" ||
    game.game == undefined ||
    game.category == undefined ||
    game.game == null ||
    game.category == null
  ) {
    return false;
  }
  return true;
}

module.exports = checkGameData;
