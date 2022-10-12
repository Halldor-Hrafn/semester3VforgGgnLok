const Database = require('better-sqlite3');

module.exports = function readUsers(dbFile) {
  const db = new Database(dbFile);
  const stmt = db.prepare('SELECT id, email, username, password FROM users ORDER BY username');
  const users = stmt.all();
  db.close();

  return users;
};
