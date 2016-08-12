function replaceClass(elementID, classAdd, classRemove) {
    if (document.getElementById(elementID).className.match(classRemove)) {
        document.getElementById(elementID).classList.remove(classRemove);
    }
    document.getElementById(elementID).classList.add(classAdd);
};

function showScore(score) {
    document.getElementById('score').textContent = score;
};

