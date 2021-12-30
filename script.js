let order = [];
let clickedOrder = [];
let score = 0;

//0 - blue
//1 - green
//2 - yellow
//3 - red

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');

//random colors
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//turn on the light
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//the color's order
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//the player's click
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//the color's return
let createColorElement = (color) => {
    if(color == 0) {
        return blue;
    } else if(color == 1) {
        return green;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return red;
    }
}

//next level
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//welcome to the game
let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//color's click
blue.onclick = () => click(0);
green.onclick = () => click(1);
yellow.onclick = () => click(2);
red.onclick = () => click(3);


//start
playGame();