//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);



// var express = require('express'),
//   app = express(),
//   port = process.env.PORT || 3000;

// app.use(express.json());
// app.use(express.urlencoded( { extended: false }));

// var routes = require('./api/routes/udeliverRoutes'); //importing route
// routes(app); //register the route

// app.listen(port);

// console.log('todo list RESTful API server started on: ' + port);