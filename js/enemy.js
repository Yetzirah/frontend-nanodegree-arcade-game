class Enemy {
    constructor (x, y, dt, player) {
        this.sprite = "images/enemy-bug.png";
        this.dt = dt;
        this.x = x;
        this.y = y;
        this.player = player;
    }
    update() {
        if (this.x >= LIMIT_ENEMY) {
            this.x = POSINIT_ENEMY_X;
            this.dt = Math.floor((Math.random() * 10) + 1);
        }
        if (!this.player.game.isPause()) {
            this.x += this.dt;
            this.player.restart(this.x, this.y);
            this.player.render();
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
