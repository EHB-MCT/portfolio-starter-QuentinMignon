import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import { Searchbar } from "./components/Searchbar";
import { Card } from "./components/Card";

function App() {
  const [gameList, setGameList] = useState([]);
  const [input, setInput] = useState("");

  const filterGames = (input) => {
    setInput(input);
  };
  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((res) => res.json())
      .then((games) => {
        setGameList(games);
      });
  }, []);
  return (
    <>
      <Searchbar onChange={filterGames} />
      <div className="cardContainer">
        {gameList
          .filter((games) => games.game.includes(input))
          .map((games) => (
            <Card data={games} key={games.id} />
          ))}
      </div>
    </>
  );
}

export default App;
