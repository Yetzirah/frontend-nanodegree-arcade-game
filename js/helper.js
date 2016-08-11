function replaceClass(elementID, classAdd, classRemove) {
    if (document.getElementById(elementID).className.match(classRemove)) {
        document.getElementById(elementID).classList.remove(classRemove);
    }
    document.getElementById(elementID).classList.add(classAdd);
};

function isPause(gameStatus) {
    if (gameStatus === START_STATUS) {
        return false;
    }
    return true;
};

function showScore(score) {
    document.getElementById('score').textContent = score;
};

function setStatusGame(status) {
    gameStatus = status;
};
