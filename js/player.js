class Player {
    constructor (x, y, game){
    this.sprite = "images/char-boy.png";
    this.x = x;
    this.y = y;
    this.game = game;
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    update() {
    }
    restart(posX, posY) {
        if (Number.isInteger(posX) && Number.isInteger(posY)) {
            if ((this.x >= posX - RANGE_COLLISION && this.x <= posX + RANGE_COLLISION) && (this.y >= posY - RANGE_COLLISION && this.y <= posY + RANGE_COLLISION)) {
                showScore(this.game.score);
                replaceClass('game-over', 'visible', 'invisible');
                this.game.gameStatus = PAUSE_STATUS;
                this.game.score = 0;
            }
        }
        else {
            this.x = POSINIT_PLAYER_X;
            this.y = POSINIT_PLAYER_Y;
        }
    }
    handleInput(key) {
        switch (key) {
            case 'left': {
                if (this.x > LIMIT_PLAYER_RIGHT && !this.game.isPause()) {
                    this.x -= STEP_PLAYER;
                }
                break;
            }
            case 'up': {
                if (this.y > LIMIT_PLAYER_TOP && !this.game.isPause()) {
                    this.y -= STEP_PLAYER;
                    this.update_score();
                }
                break;
            }
            case 'right': {
                if (this.x < LIMIT_PLAYER_LEFT && !this.game.isPause()) {
                    this.x += STEP_PLAYER;
                }
                break;
            }
            case 'down': {
                if (this.y < LIMIT_PLAYER_BOTTON && !this.game.isPause()) {
                    this.y += STEP_PLAYER;
                    this.update_score();
                }
                break;
            }
            case 'space-bar': {
                if (this.game.isPause()) {
                  this.game.gameStatus = START_STATUS;
                  this.x = POSINIT_PLAYER_X;
                  this.y = POSINIT_PLAYER_Y;
                  replaceClass('game-over', 'invisible', 'visible');
                }
                break;
            }
        }
        this.render();
    }
    update_score(){
        if ((this.y >= LIMIT_TOP_SPACE_DAMAGE && this.y <= LIMIT_BOTTON_SPACE_DAMAGE)) {
            this.game.score += 1;
        }
    }
}
