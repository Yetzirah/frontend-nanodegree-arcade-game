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
                document.getElementById('score').textContent = score;
                if (document.getElementById('game-over').className.match('invisible')) {
                    document.getElementById('game-over').classList.remove('invisible');
                }
                document.getElementById('game-over').classList.add('visible');
                gameStatus = PAUSE_STATUS;
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
                if (this.x > LIMIT_PLAYER_RIGHT && gameStatus === START_STATUS) {
                    this.x -= STEP_PLAYER;
                }
                break;
            }
            case 'up': {
                if (this.y > LIMIT_PLAYER_TOP && gameStatus === START_STATUS) {
                    this.y -= STEP_PLAYER;
                    player.update_score();
                }
                break;
            }
            case 'right': {
                if (this.x < LIMIT_PLAYER_LEFT && gameStatus === START_STATUS) {
                    this.x += STEP_PLAYER;
                }
                break;
            }
            case 'down': {
                if (this.y < LIMIT_PLAYER_BOTTON && gameStatus === START_STATUS) {
                    this.y += STEP_PLAYER;
                    player.update_score();
                }
                break;
            }
            case 'space-bar': {
                gameStatus = START_STATUS;
                this.x = POSINIT_PLAYER_X;
                this.y = POSINIT_PLAYER_Y;
                if (document.getElementById('game-over').className.match('visible')) {
                    document.getElementById('game-over').classList.remove('visible');
                }
                document.getElementById('game-over').classList.add('invisible');
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
