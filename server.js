const express        = require('express');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session')
const app            = express();

//BCRYPT
require('./db/db');


// require our controller, Which is the router object
// const authorsController = require('./controllers/authors');
// const articlesController = require('./controllers/articles.js');
// const usersController = require('./controllers/users');

//INCLUDE ROUTES
app.use(session({
  secret: 'THIS IS A RANDOM SECRET STRING',
  resave: false,
  saveUninitialized: false
}));


app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('index.ejs', {
    //message: req.session.message
  });
});

app.listen(3000, () => {
  console.log('listening..... on port 3000');
});
