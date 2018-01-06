// server.js
// where your node app starts

// init project
var express = require('express');
var exphbs     = require('express-handlebars');
var path    = require('path');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'})); 
app.set('view engine', 'handlebars');
var options = { dotfiles: 'ignore', etag: false,
extensions: ['htm', 'html'],
index: false
};
app.use(express.static(path.join(__dirname, 'public') , options  ));
app.get('/', function(req, res)
{
res.render('hello');   // this is the important part
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
