const Database = require('better-sqlite3');

module.exports = function findUser(dbFile, email) {
  const db = new Database(dbFile);
  const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
  const user = stmt.get(email);
  db.close();

  return user;
};
