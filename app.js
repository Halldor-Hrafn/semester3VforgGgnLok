const express = require('express');
const session = require('express-session');
const path = require('path');
require('dotenv/config');

const frontPage = require('./routes');
const loginPage = require('./routes/login');
const registerPage = require('./routes/register');
const userPage = require('./routes/user');
const aboutPage = require('./routes/about');

const mangaPage = require('./routes/manga');
const createMangaPage = require('./routes/create/manga/manga');
const searchMangaPage = require('./routes/read/manga');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));

app.use('/', frontPage);
app.use('/login', loginPage);
app.use('/register', registerPage);
app.use('/user', userPage);
app.use('/about', aboutPage);
app.use('/manga', mangaPage);
app.use('/createManga', createMangaPage);
app.use('/manga/search', searchMangaPage);

app.use((req, res) => {
  res.status(404);
  res.render('error', { title: 'Error', status: 404, msg: 'Site not found!' });
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', { title: 'Error', status: res.status || 500, msg: 'Whoops, someone is a dumbass and fucked the server!' });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3000');
});
