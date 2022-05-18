'use strict'
let winners = 3; //если 0-Победитель O. если 1 Победитель X. если 2 Ничья. если 3 пусто
let array = [2, 2, 2, 2, 2, 2, 2, 2, 2]; //содержимое ячеек 2 = пустая ячейка
let player; // 0 или 1
let bot;
let play = 0; //0-игра остановлена, 1-игра работает
let text = document.getElementById("winnerRow"); //строка победителя

//заполняет ячейки содержимым масива
function render() {
    array.forEach((el, i) => {
        let box = document.getElementById(`box${i}`);
        if (el == 0) {
            box.textContent = "O";
        } else if (el == 1) {
            box.textContent = "X";
        } else {
            box.textContent = "";
        }
    });
}

//противник
function enemy() {
    if (play == 1) {
        for (; ;) {
            let rnd = Math.floor(Math.random() * 9); //случайное число 0-8
            if (array[rnd] == 2) {
                array[rnd] = bot;
                winner();
                break;
            }
        }
    }
}

//определяет победителя
function winner() {
    //проверка на пустые ячейки
    if (array[0] !== 2 & array[1] !== 2 & array[2] !== 2 & array[3] !== 2 & array[4] !== 2 & array[5] !== 2 & array[6] !== 2 & array[7] !== 2 & array[8] !== 2) {
        winners = 2;
    }
    if (array[0] == array[1] & array[0] == array[2] & array[0] !== 2) {
        winners = array[0];
    }
    if (array[3] == array[4] & array[3] == array[5] & array[3] !== 2) {
        winners = array[3];
    }
    if (array[6] == array[7] & array[6] == array[8] & array[6] !== 2) {
        winners = array[6];
    }
    if (array[0] == array[3] & array[0] == array[6] & array[0] !== 2) {
        winners = array[0];
    }
    if (array[1] == array[4] & array[1] == array[7] & array[1] !== 2) {
        winners = array[1];
    }
    if (array[2] == array[5] & array[2] == array[8] & array[2] !== 2) {
        winners = array[2];
    }
    if (array[0] == array[4] & array[0] == array[8] & array[0] !== 2) {
        winners = array[0];
    }
    if (array[2] == array[4] & array[2] == array[6] & array[2] !== 2) {
        winners = array[2];
    }
    renderWinner();
}

//выводит строку победителя, останавливает игру
function renderWinner() {
    if (winners == 0) {
        text.textContent = `Победитель O`;
        play = 0;
    }
    if (winners == 1) {
        text.textContent = `Победитель X`;
        play = 0;
    }
    if (winners == 2) {
        text.textContent = `Ничья`;
        play = 0;
    }
}

//выбор за кого играть, обнуление игрового поля, начинает игру
startX.addEventListener("click", () => {
    play = 1;
    array = [2, 2, 2, 2, 2, 2, 2, 2, 2];
    text.textContent = ``;
    player = 1;
    bot = 0;
    winners = 3;
    render();
});
startO.addEventListener("click", () => {
    play = 1;
    array = [2, 2, 2, 2, 2, 2, 2, 2, 2];
    text.textContent = ``;
    player = 0;
    bot = 1;
    winners = 3;
    enemy();
    render();
});

//заполняет массив при нажатии на ячейки
box0.addEventListener("click", () => {
    if (array[0] == 2 & play == 1) {
        array[0] = player;
        winner();
        enemy();
        render();
    }
});
box1.addEventListener("click", () => {
    if (array[1] == 2 & play == 1) {
        array[1] = player;
        winner();
        enemy();
        render();
    }
});
box2.addEventListener("click", () => {
    if (array[2] == 2 & play == 1) {
        array[2] = player;
        winner();
        enemy();
        render();
    }
});
box3.addEventListener("click", () => {
    if (array[3] == 2 & play == 1) {
        array[3] = player;
        winner();
        enemy();
        render();
    }
});
box4.addEventListener("click", () => {
    if (array[4] == 2 & play == 1) {
        array[4] = player;
        winner();
        enemy();
        render();
    }
});
box5.addEventListener("click", () => {
    if (array[5] == 2 & play == 1) {
        array[5] = player;
        winner();
        enemy();
        render();
    }
});
box6.addEventListener("click", () => {
    if (array[6] == 2 & play == 1) {
        array[6] = player;
        winner();
        enemy();
        render();
    }
});
box7.addEventListener("click", () => {
    if (array[7] == 2 & play == 1) {
        array[7] = player;
        winner();
        enemy();
        render();
    }
});
box8.addEventListener("click", () => {
    if (array[8] == 2 & play == 1) {
        array[8] = player;
        winner();
        enemy();
        render();
    }
});

