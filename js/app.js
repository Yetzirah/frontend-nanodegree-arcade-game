const player = new Player(POSINIT_PLAYER_X, POSINIT_PLAYER_Y);
let allEnemies = [];
const numEnemies = 3;
for (let i = 0; i < numEnemies; i++) {
    const vel = Math.floor((Math.random() * 10) + 1);
    const enemy = new Enemy(POSINIT_ENEMY_X, 100 * i, vel);
    allEnemies.push(enemy);
}

let score = 0;
let gameStatus = START_STATUS;

document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'space-bar'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
