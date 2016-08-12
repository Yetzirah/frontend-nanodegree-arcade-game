class Game {
    constructor (gameStatus, score) {
        this.gameStatus = gameStatus;
        this.score = score;
    }
    isPause() {
        return !(this.gameStatus === START_STATUS);
    };
}
