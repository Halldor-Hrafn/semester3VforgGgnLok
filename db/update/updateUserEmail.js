const Database = require('better-sqlite3');

module.exports = function updateUser(dbFile, id, email) {
  const db = new Database(dbFile);
  const stmt = db.prepare('UPDATE users SET email = ? WHERE id = ?');
  stmt.run(email, id);
  db.close();
};
