var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const cookieParser = require("cookie-parser");
var path = require('path');
var serveAngular = require('./routes/serving');
var urlManager = require('./routes');
var installer = require('./routes/installer');

//initialize the app
var app = module.exports = express();
// app.use(cors({ credentials: true, origin: 'http://localhost:4200' }));
var allowlist = ["https://portal.medfestng.com/", "http://localhost:4200"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { credentials: true, origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { credentials: true, origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use(cors(corsOptionsDelegate));

var env = process.env.NODE_ENV;
app.set('env', env);

app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());



urlManager(app);
installer(app)
serveAngular(app);

// disallowMethods(app);

//set up http error handler
// app.use(errorHandler(app));

// process.on('uncaughtException', function (err, req, res) {
//     console.log(err.stack);
// });

// process.on('SIGINT', function () {
//     // calling shutdown allows your process to exit normally
//     process.exit();
// });


