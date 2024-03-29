var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
var stringifyFile;

app.use(bodyParser.json());


// GET

app.get('/getNote', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony głównej');

    fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        stringifyFile = data;
        res.send(data);
    });
});

app.post('/updateNote/:note', function (req, res) {
    console.log('Otrzymałem żądanie POST do strony głównej');

    stringifyFile = stringifyFile + req.params.note;

    fs.writeFile('./test.json', stringifyFile, function(err) {
        if (err) throw err; 
        console.log('file updated');
    });

    res.send('Hello POST!');
});

app.listen(3000);

