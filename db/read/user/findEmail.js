const Database = require('better-sqlite3');

module.exports = function findUser(dbFile, email) {
  const db = new Database(dbFile);
  const stmt = db.prepare('SELECT id, email, username, password FROM users WHERE email = ?');
  const user = stmt.run(email);
  db.close();

  return user;
};
