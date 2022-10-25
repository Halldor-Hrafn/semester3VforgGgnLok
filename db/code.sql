-- DO NOT TOUCH BELOW SHIT

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  email TEXT UNIQUE,
  username TEXT UNIQUE,
  password TEXT,
  admin INT DEFAULT 0
);

CREATE TABLE forums (
  id INTEGER PRIMARY KEY,
  title TEXT,
  content TEXT
);

CREATE TABLE mangas (
  id INTEGER PRIMARY KEY,
  name TEXT,
  publisher TEXT,
  description TEXT
);

CREATE TABLE genres (
  id INTEGER PRIMARY KEY,
  name TEXT,
  description TEXT
);

CREATE TABLE warnings (
  id INTEGER PRIMARY KEY,
  name TEXT,
  description TEXT
);

CREATE TABLE userForums (
  idUser INT,
  idForum INT,
  PRIMARY KEY (idUser, idForum)
);

CREATE TABLE mangaGenres (
  idManga INT,
  idGenres INT,
  PRIMARY KEY (idManga, idGenres)
);

CREATE TABLE mangaWarnings (
  idManga INT,
  idWarning INT,
  PRIMARY KEY (idManga, idWarning)
);

-- DO NOT TOUCH ABOVE SHIT
-- You can probably touch this stuff below, maybe

UPDATE users
SET admin = 1
WHERE id = 4;

INSERT INTO mangas(name, publisher, description)
VALUES('Osake wa Fuufu ni Natte Kara', 'Shogakukan', 'The "slightly sweet tipsy couple comedy"');
