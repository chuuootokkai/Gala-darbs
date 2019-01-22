let gameField = document.querySelector('#gamefield'),
    interval = null,
    scoreContainer = document.getElementById("score"),
    timeContainer = document.getElementById("remTime"),
    hsContainer = document.getElementById("highScore"),
    score = 0,
    username = "",
    timerId = "",
    remTime = 29;


function startGame() {
    score = 0;
    remTime = 29;
    clearBubbles();
    renderScore();
    deleteInterval();
    createInterval();
    document.getElementById('cover').style.display = "none";
    document.getElementById('start').style.visibility = "hidden";
    document.getElementById('pause').style.display = "inline";
    document.getElementById('resume').style.display = "inline";
    document.getElementById('name').style.display = "none";
    document.getElementById('saveRes').style.display = "none";
    timerId = setInterval(countTime, 1000);

}

function addBubble() {
    let el = document.createElement('div');
    el.classList.add('bubble' + getRandomInt(3));
    el.style.top = getRandomInt(330) + 'px';
    el.style.left = getRandomInt(530) + 'px';
    el.onclick = removeBubble;
    gameField.append(el);
    deleteInterval();
    createInterval();
}

function removeBubble() {
    this.parentNode.removeChild(this);
    addScore();
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function addScore() {
    score++;
    renderScore();
}

function renderScore() {
    scoreContainer.innerText = score;
}

function deleteInterval() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}

function pauseGame() {
    deleteInterval();
    gameField.style.pointerEvents = 'none';
    document.getElementById('cover').style.display = "block";
    clearTimeout(timerId);
    remtime;

}

function continueGame() {
    gameField.style.pointerEvents = 'all';
    document.getElementById('cover').style.display = "none";
    if (interval == null) {
        interval = setInterval(addBubble, getRandomInt(1001));
    }
    timerId = setInterval(countTime, 1000);
}

function createInterval() {
    gameField.style.pointerEvents = 'all';
    if (!interval) {
        interval = setInterval(addBubble, getRandomInt(1001));
    }
}

function clearBubbles() {
    let bubbles = gameField.querySelectorAll(".bubble");

    for (let i = 0; i < bubbles.length; i++) {
        let bubble = bubbles[i];
        bubble.outerHTML = "";
    }
}







function countTime() {
    if (remTime == 0) {
        clearTimeout(timerId);
        renderTime();
        stopGame();
    } else {
        renderTime();
        remTime--;
    }
}

function renderTime() {
    timeContainer.innerText = remTime;
}

function stopGame() {
    deleteInterval();
    gameField.style.pointerEvents = 'none';
    document.getElementById('cover').style.display = "block";
    document.getElementById('start').style.visibility = "visible";
    document.getElementById('pause').style.display = "none";
    document.getElementById('resume').style.display = "none";
    document.getElementById('name').style.display = "inline";
    document.getElementById('saveRes').style.display = "inline";
}

function saveResult(){
    document.getElementById('name').style.display = "none";
    document.getElementById('saveRes').style.display = "none";}




