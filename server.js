const express        = require('express');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');
const app            = express();

//BCRYPT
require('./db/db');


// require our controller, Which is the router object
// const authorsController = require('./controllers/authors');
// const articlesController = require('./controllers/articles.js');
// const usersController = require('./controllers/users');

// before our controllers we set up the session

app.use(session({
  secret: 'THIS IS A RANDOM SECRET STRING',
  resave: false, // only save the cookie when, we
  // add something or delete something from it
  // mutate it
  saveUninitialized: false // don't save the cookie
  // until the user has "logged in" legal reasons
  // as well, you're not supposed to track user data
  // until the user has logged in to an app
}));

// set up the router at the end of the middleware chain,
// Final Destination
// I set up bodYParser before my routes because
// we want to parse the request before it actually gets
// to the route (be able to read req.body)
app.use(bodyParser.urlencoded({extended:false}));
// ?something=something
// ?_method=PUT OR DELETE
app.use(methodOverride('_method'));

// app.use('/authors', authorsController);
// app.use('/articles', articlesController);
// app.use('/auth', usersController);

// landing page we don't need a controller
app.get('/', (req, res) => {
  res.render('index.ejs', {
    //message: req.session.message
  });
});

app.listen(3000, () => {
  console.log('listening..... on port 3000');
});
