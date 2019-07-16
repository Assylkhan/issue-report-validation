// server.js

const mongoose = require('mongoose');
const express = require('express');
const helmet = require('helmet'); // creates headers that protect from attacks (security)
const bodyParser = require('body-parser'); // turns response into usable format
const PORT = 4000;
const cors = require('cors'); // allows/disallows cross-site communication
const morgan = require('morgan'); // logs requests
global.visitsAmount;

// Controllers - aka, the db queries
const main = require('./controllers/main');

// App
const app = express();

// App Middleware
// const whitelist = ['http://localhost:3001']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }


app.use(cors()); // app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('combined')); // use 'tiny' or 'combined'


const dbRoute =
  'mongodb+srv://Assylkhan:torvalds1994@issuevalidationcluster-xz3hj.mongodb.net/test?retryWrites=true&w=majority';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// db Connection w/ Heroku
// const db = require('knex')({
//   client: 'pg',
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: true,
//   }
// });

// db Connection w/ localhost
// var db = require('knex')({
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     user : '',
//     password : '',
//     database : 'issue-report-validation'
//   }
// });


// App Routes - Auth
// app.get('/', (req, res) => res.send('hello world'));
app.get('/api', (req, res) => main.getMainData(req, res));
// app.get('/crud', (req, res) => main.getTableData(req, res, db))
// app.post('/crud', (req, res) => main.postTableData(req, res, db))
// app.put('/crud', (req, res) => main.putTableData(req, res, db))
// app.delete('/crud', (req, res) => main.deleteTableData(req, res, db))

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});