# Game Search App

In this app you will be able to discover all the games I played. I created a whole gallery for those games.

## Author

Quentin Mignon

## Start

To run my container you will need to use this command

```bash
docker-compose up --build
```

## Utility of my endpoints

In this app you will be able to

- Search games
- Search a game based on the name of the game
- Add a game into the library
- Delete a game from the library
- Update the name of a game

## Packages

### Here are all the packages I used for my project

-
-
-
-

## Endpoints

### GET the games

```bash
GET /games
```

### GET a game by the name of the game

```bash
GET /games/GameName
```

### POST a game

```bash
POST /games
```

### DELETE a game by the game of the name

```bash
DELETE /games/GameName
```

### UPDATE a game by the name of the game

```bash
PUT /games/GameName
```

## Docker Deployment

Om deze app lokaal uit te voeren met Docker, voer je het volgende commando uit:

```bash
docker-compose up --build
```

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the `LICENSE` file for more details.
