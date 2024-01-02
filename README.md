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

### GET the games

```bash
GET /games
```

### GET a game by the name of the game

```bash
GET /games/GameName`
```

### Post a game

```bash
POST /games`
```

### Delete a game by the game of the name

```bash
DELETE /games/GameName
```

### Update a game by the name of the game

```bash
PUT /games/GameName
```

## Docker Deployment

Om deze app lokaal uit te voeren met Docker, voer je het volgende commando uit:

```bash
docker-compose up --build
```
