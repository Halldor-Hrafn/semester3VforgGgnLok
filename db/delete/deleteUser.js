const Database = require('better-sqlite3');

module.exports = function deleteUser(dbFile, idUser) {
  const db = new Database(dbFile);
  const stmt = db.prepare('DELETE FROM users WHERE id = ?');
  stmt.run(idUser);
  db.close();
};
