var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');


var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


app.use(methodOverride('_method'));


app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));
 

// parse application/json
app.use(bodyParser.json());

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log('Listening on http://localhost:' + PORT);
});

