// Create Web Server
// Create Web Server
const express = require('express');
const app = express();
const port = 3000;
// Create static file server
app.use(express.static('public'));
// Use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Create MongoDB Client
const MongoClient = require('mongodb').MongoClient;
// Create a DB object
let db;
// Connect to MongoDB Server
MongoClient.connect('mongodb://localhost:27017', function(err, client) {
    if (err) throw err;
    // Get a database object
    db = client.db('mydb');
    // Start Web Server
    app.listen(port, function() {
        console.log(`Listening on port ${port}`);
    });
});
// URL routing
// GET /comment/read
app.get('/comment/read', function(req, res) {
    // Get data from MongoDB
    db.collection('comment').find({}).toArray(function(err, result) {
        if (err) throw err;
        // Send data to client as JSON
        res.send(JSON.stringify(result));
    });
});
// POST /comment/insert
app.post('/comment/insert', function(req, res) {
    // Get data from client
    let name = req.body.name;
    let comment = req.body.comment;
    // Insert data into MongoDB
    db.collection('comment').insertOne({
        'name': name,
        'comment': comment
    }, function(err, result) {
        if (err) throw err;
        // Send result to client
        res.send(result);
    });
});
