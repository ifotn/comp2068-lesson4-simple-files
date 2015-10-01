// link to connect
var connect = require('connect');

// instantiate a new application using connect
var app = connect();

// helloworld
var helloworld = function(req, res, next) {
    res.writeHead({'Content-Type': 'text-plain'});
    res.end('Hello world');
};

// old style
/* function helloworld(res, res, next) {
    
}

var hello = helloworld(); */

// goodbye
var goodbyeworld = function(req, res, next) {
    res.writeHead({'Content-Type': 'text-plain'});
    res.end('Goodbye world');
}

app.use('/hello', helloworld);
app.use('/goodbye', goodbyeworld);

app.use(helloworld);
app.use(goodbyeworld);

// listen for events
app.listen(3000);

// show confirmation that this is running
console.log('Connect app running on port 3000');