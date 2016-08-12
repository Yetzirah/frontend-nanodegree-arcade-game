class Enemy {
    constructor (x, y, dt) {
        this.sprite = "images/enemy-bug.png";
        this.dt = dt;
        this.x = x;
        this.y = y;
    }
    update() {
        if (this.x >= LIMIT_ENEMY) {
            this.x = POSINIT_ENEMY_X;
            this.dt = Math.floor((Math.random() * 10) + 1);
        }
        if (!game.isPause()) {
            this.x += this.dt;
            player.restart(this.x, this.y);
            player.render();
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
