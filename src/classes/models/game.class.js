const MAX_PLAYERS = 4;

class Game {
    constructor(id)
    {
        this.id = id;
        this.users = [];
        this.state = 'waiting'; // 'waiting', 'inProgress'
    }

    addUser() {
        if(this.users.length >= MAX_PLAYERS)
        {
            throw new Error('게임 세션이 가득 참')
        }

        if(this.users.length == MAX_PLAYERS)
        {
            setTimeout(() => {
                this.startGame();
            }, 3000);
        }
    }

    getUser(userid) {
        return this.users.find((user)=>user.id == userid);
    }

    removeUser(userid){
        this.users = this.users.filter((user)=>user.id !== userid);
        if(this.users.length < MAX_PLAYERS)
        {
            this.state = 'waiting';
        }
    }

    startGame(){
        this.state = 'inProgress';
    }
}

export default Game;