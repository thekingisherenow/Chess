"use strict";
//ws library for web socket
Object.defineProperty(exports, "__esModule", { value: true });
//hello
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 3000 });
wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });
    ws.send('e4');
});
