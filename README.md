# Game Search App

In this app you will be able to discover all the games I played. I created a whole gallery for those games.

## Endpoints

In this app you will be able to

- Search games
- Search a game based on the name of the game
- Add a game into the library
- Delete a game from the library
- Update the name of a game

## Endpoints

### GET /games

- Beschrijving: Haal alle beschikbare games op.
- Voorbeeld: `http://localhost:port/games`

### GET /games/:nameGame

- Beschrijving: Haal informatie op over een specifieke game op basis van de naam.
- Voorbeeld: `http://localhost:port/games/GameName`

### POST /games

- Beschrijving: Voeg een nieuwe game toe.
- Voorbeeld: `http://localhost:port/games`

### DELETE /games/:nameGame

- Beschrijving: Verwijder een specifieke game op basis van de naam.
- Voorbeeld: `http://localhost:port/games/GameName`

### PUT /games/:nameGame

- Beschrijving: Werk informatie van een specifieke game bij op basis van de naam.
- Voorbeeld: `http://localhost:port/games/GameName`

## Docker Deployment

Om deze app lokaal uit te voeren met Docker, voer je het volgende commando uit:

```bash
docker-compose up --build
```
