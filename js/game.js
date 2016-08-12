class Game {
    constructor (gameStatus) {
        this.gameStatus = gameStatus;
    }
    isPause() {
        return !(this.gameStatus === START_STATUS);
    };
}
