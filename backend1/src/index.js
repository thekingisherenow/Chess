"use strict";
//ws library for web socket

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(3000,(err)=> {
    if (err){
        console.log("error")
    }
    else {
        console.log("no error")
    }
}); //the server object listens on port 8080

