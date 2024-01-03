const checkGameData = require("../helpers/checkGameData");

describe("Shoe input validation", () => {
  test("Should validate the inputs", () => {
    expect(checkGameData({ category: "Action", game: "Left 4 Dead 2" })).toBe(
      true
    );
    expect(checkGameData({ category: "", game: "" })).toBe(false);
    expect(checkGameData({ category: null, game: null })).toBe(false);
    expect(checkGameData({ category: undefined, game: undefined })).toBe(
      false
    );
  });
});
