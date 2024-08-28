import { WebSocket } from "ws";
import { Game } from "./Game";

export class GameManager {

    private games: Game[];
    private pendingUser : WebSocket | null;
    private users : WebSocket[];

    constructor(){
        this.games = [];
        this.users = [];
        this.pendingUser = null;
    }

    addUser(socket:WebSocket){
        this.users.push(socket);
    }

    removeUser(socket:WebSocket){
        this.users = this.users.filter(user=> socket !== user);
        //Stop the game here because the user left
        //reconnect logic is the better approach here.
    }

    private addHandler(socket:WebSocket){

        socket.on("message",(data)=>{
            const message = JSON.parse(data.toString());

            if (message.type === INIT_GAME){
                if (this.pendingUser){
                    //paila dekhi pending user cha bhane game suru garne
                    const game = new Game(this.pendingUser, socket);
                    this.games.push(game);
                    this.pendingUser = null;
                }
                else {
                    //paila dekhi pending user chaina bhane aba pending user ma yo socket lai add garni
                    this.pendingUser = socket;
                }
            }
        })


    }

}