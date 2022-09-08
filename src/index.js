
const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars')

var morgan = require('morgan');
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'))

//template engine

app.engine('hbs', handlebars.engine(
  {
    extname:'.hbs'
  }
));
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources/views'));

// console.log(path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
    
})
app.get('/news', (req, res) => {
  res.render('news');
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})