class User {
    constructor(id, socket) {
        this.id = id;
        this.socket = socket;
        let x = 0;
        let y = 0;
        this.sequence = 0;
        this.lastUpdateTime = Date.now();
    }

    updatePosition(x,y) {
        this.x = x;
        this.y = y;
        this.lastUpdateTime = Date.now();
    }

    getNextSequence()
    {
        return ++this.sequence;
    }
}

export default User