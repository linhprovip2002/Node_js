
const path = require('path');
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const handlebars = require('express-handlebars');
const db = require('./config/db');
//connect to db
db.connect();

var morgan = require('morgan');
const port = 3000;
const route = require('./routes');


app.use(express.static(path.join(__dirname, 'public')));


app.use(methodOverride('_method'))
app.use(morgan('combined'))

app.use(express.urlencoded(
  {
    extended:true
    
  }
));
app.use(express.json());

//template engine

app.engine('hbs', handlebars.engine(
  {
    extname:'.hbs',
    helpers: {
     sum: (a,b) => a+b,

  }
  }
));
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources/views'));

// console.log(path.join(__dirname, 'resources/views'));


route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})