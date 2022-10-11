const Database = require('better-sqlite3');

module.exports = function createUser(dbFile, email, username, password) {
  const db = new Database(dbFile);
  const stmt = db.prepare('INSERT INTO users(email, username, password) VALUES (?, ?, ?);');

  const user = stmt.run(email, username, password);
  const lastId = user.lastInsertRowid;
  db.close();

  return lastId;
};
