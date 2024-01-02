# Game Search App

In this app you will be able to discover all the games I played. I created a whole gallery for those games.

## Author

Quentin Mignon

## Start

### To run my app you will need to use this command

```bash
docker-compose up --build
```

### Environment Variables

- NODE_ENV - Determines the operating environment mode for Node.js, aiding in specifying the environment as either development or production.
- POSTGRES_DB - Specifies the designated database for interaction by applications and services.
- POSTGRES_USER - Sets the user account utilized by applications and services when establishing connections with the PostgreSQL server.
- POSTGRES_PASSWORD - Establishes the authentication password for accessing a PostgreSQL database server.
- POSTGRES_HOST_AUTH_METHOD - Determines the authentication method employed for PostgreSQL host access.

## Utility of my endpoints

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
GET /games/:GameName
```

### POST a game

```bash
POST /games
```

### DELETE a game by the game of the name

```bash
DELETE /games/:GameName
```

### UPDATE a game by the name of the game

```bash
PUT /games/:GameName
```

## Docker Deployment

Om deze app lokaal uit te voeren met Docker, voer je het volgende commando uit:

```bash
docker-compose up --build
```

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the `LICENSE` file for more details.

## Sources

- Courses (Jan Everaert)
- https://chat.openai.com/share/5c2ed57e-b7ca-4cc1-a34a-7e2d0add70dc
- https://youtu.be/gAkwW2tuIqE?si=wkZxEY_7FUgxqn9q
- https://www.geeksforgeeks.org/how-to-use-a-dockerignore-file/
- https://youtu.be/9MqpBlEPS5A?si=kgyxWD2DNEiHymFR
- https://www.w3schools.com/react/react_getstarted.asp
