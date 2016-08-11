class Player {
    constructor (x, y){
    this.sprite = "images/char-boy.png";
    this.x = x;
    this.y = y;
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    update() {
    }
    restart(posX, posY) {
        if (Number.isInteger(posX) && Number.isInteger(posY)) {
            if ((this.x >= posX - RANGE_COLLISION && this.x <= posX + RANGE_COLLISION) && (this.y >= posY - RANGE_COLLISION && this.y <= posY + RANGE_COLLISION)) {
                showScore(score);
                replaceClass('game-over', 'visible', 'invisible');
                setStatusGame(PAUSE_STATUS);
                score = 0;
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
                if (this.x > LIMIT_PLAYER_RIGHT && !isPause(gameStatus)) {
                    this.x -= STEP_PLAYER;
                }
                break;
            }
            case 'up': {
                if (this.y > LIMIT_PLAYER_TOP && !isPause(gameStatus)) {
                    this.y -= STEP_PLAYER;
                    player.update_score();
                }
                break;
            }
            case 'right': {
                if (this.x < LIMIT_PLAYER_LEFT && !isPause(gameStatus)) {
                    this.x += STEP_PLAYER;
                }
                break;
            }
            case 'down': {
                if (this.y < LIMIT_PLAYER_BOTTON && !isPause(gameStatus)) {
                    this.y += STEP_PLAYER;
                    player.update_score();
                }
                break;
            }
            case 'space-bar': {
                setStatusGame(START_STATUS);
                this.x = POSINIT_PLAYER_X;
                this.y = POSINIT_PLAYER_Y;
                replaceClass('game-over', 'invisible', 'visible');
            }
        }
        player.render();
    }
    update_score(){
        if ((this.y >= LIMIT_TOP_SPACE_DAMAGE && this.y <= LIMIT_BOTTON_SPACE_DAMAGE)) {
            score += 1;
        }
    }
}
