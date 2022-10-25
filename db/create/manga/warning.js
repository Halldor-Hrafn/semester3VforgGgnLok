const Database = require('better-sqlite3');

module.exports = function createWarning(dbFile, name, description) {
  const db = new Database(dbFile);
  const stmt = db.prepare('INSERT INTO warnings(name, description) VALUES (?, ?);');
  stmt.run(name, description);
  db.close();
};
