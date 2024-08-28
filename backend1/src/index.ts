
//ws library for web socket

//hello
import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';

const wss = new WebSocketServer({ port: 3000 });

const gameManager = new GameManager();

wss.on('connection', function connection(ws) {
  gameManager.addUser(ws);                                       //adding user with a specific socket

  ws.on("close",()=>{
    gameManager.removeUser(ws)
  })
  ws.send('something');
});