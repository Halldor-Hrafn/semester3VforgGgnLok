const Database = require('better-sqlite3');

module.exports = function createManga(dbFile, name, publisher, description) {
  const db = new Database(dbFile);
  const stmt = db.prepare('INSERT INTO mangas(name, publisher, description) VALUES (?, ?, ?);');
  stmt.run(name, publisher, description);
  db.close();
};
