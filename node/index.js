var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (request, response) {
    debugger;

    response.end(
        fs.read('index.js', {
            flags: 'r'
        })
    );
});

server.listen(8888);
