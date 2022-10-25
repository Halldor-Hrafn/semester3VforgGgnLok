const Database = require('better-sqlite3');

module.exports = function readManga(dbFile) {
  const db = new Database(dbFile);
  const stmt = db.prepare('SELECT id, name, publisher, description FROM mangas ORDER BY name');
  const mangas = stmt.all();
  db.close();

  return mangas;
};
