// server.js
// where your nod  var data = {'natural':'jan',e app starts

// init project
var express = require('express');
var exphbs  = require('express-handlebars');
var path    = require('path');

var app     = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'})); 
app.set('view engine', 'handlebars');


app.get('/', function(req, res){
  var data = {'natural':'jan','unix':'1234'};
  res.render('index', data);
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Youlistener.address().port');
});
