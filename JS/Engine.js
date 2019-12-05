import Box from './Box.js'
import Data from '../Data.js'
import Player from './Player.js'
import Map from './Map.js';

let canv = document.getElementById('canvas'),
    ctx = canv.getContext(`2d`);

let playerImg = new Image(),
    boxImg = new Image();

playerImg.src = "https://vignette.wikia.nocookie.net/terrariafanideas/images/8/8f/Tourist-1.png.png/revision/latest?cb=20181204072339"
boxImg.src = "https://opengameart.org/sites/default/files/RTS_Crate.png"

export default class Enginge {
    constructor(mapData, wallsChords, boxesChords, boxesCount) {
        this.player = new Player(Data.PlayerChords.x, Data.PlayerChords.y, playerImg)
        this.boxes = []
        this.setupBoxes(boxesCount, boxesChords)
        this.map = new Map(mapData, wallsChords)
    }
    // Создаём сами ящики //
    addBox() {
        let box = new Box(0, 0, boxImg)
        this.boxes.push(box)
    }
    // Устанавливаем координаты ящикам //
    setBoxChords(boxesCount, boxesChords) {
        for (let key in boxesChords) {
            for (let i = 0; i < boxesCount; i++) {
                if (key == i + 1) {
                    this.boxes[i].x = boxesChords[key].x
                    this.boxes[i].y = boxesChords[key].y
                }
            }
        }
    }
    // Заполняем поле ящиков у движка //
    setupBoxes(boxesCount, boxesChords) {
        for (let i = 0; i < boxesCount; i++) {
            this.addBox()
        }
        this.setBoxChords(boxesCount, boxesChords)
    }
    
     // чекер для позиции коробки
    checkFinish() {
        for (let key in Data.finishChords) {
            if (this.x == Data.finishChords[key].finishX &&
                this.y == Data.finishChords[key].finishY) {
                this.finish = true;
            }
        }
    }
    // Коллизия игрока и ящика
    collision(keyB) {
        // Коллизии для ящиков и стен
        this.boxes.forEach(element => {
            if (this.player.x == element.x && this.player.y == element.y) {
                element.move(keyB)
                for (let key in this.map.wals) {
                    if (element.x == this.map.wals[key].x && element.y == this.map.wals[key].y) {
                        this.collisionWalls(keyB, element);
                        break;
                    }
                }
            }
        })

        // Коллизии для игрока и стен
        for (let key in this.map.wals) {
            if (this.player.x == this.map.wals[key].x && this.player.y == this.map.wals[key].y) {
                this.collisionWalls(keyB, this.player)
            }
        }
    }
    // ну я думаю как бы понятно что тут происходит
    collisionWalls(keyB, element) {
        if (keyB == 65) {
            if (element == this.player) {
                this.player.move(68)
            } else {
                element.move(68);
                this.player.move(68);
            }
        }
        if (keyB == 68) {
            if (element == this.player) {
                this.player.move(65)
            } else {
                element.move(65);
                this.player.move(65);
            }
        }
        if (keyB == 87) {
            if (element == this.player) {
                this.player.move(83)
            } else {
                element.move(83);
                this.player.move(83);
            }
        }
        if (keyB == 83) {
            if (element == this.player) {
                this.player.move(87)
            } else {
                element.move(87);
                this.player.move(87);
            }
        }
        this.frame();
    }

    // кадр который постоянно будет отрисовываться
    frame(key) {
        if (this.player.checkCount() == true) alert("WIN")
        this.map.clear(ctx)
        this.map.drawMap(ctx)
        this.player.render(ctx)
        this.collision(key)
        this.boxes.forEach(element => {
            element.checkFinish()
            if (element.finish == true && element.checked == false) {
                this.player.count++;
                element.checked = true;
            }
            element.render(ctx)
        })
    }
    // Тут будем рисовать всё это дело (Ящики, игрока и карту) //
    start() {
        this.map.drawMap(ctx)
        this.player.render(ctx);
        this.boxes.forEach(element => {
            element.render(ctx);
        });

        // Регистрируем нажатие кнопочек //
        document.addEventListener('keydown', e => {
            let key = e.keyCode;
            // Если все коробочки на нужных местах то победа и все такое //
            switch (e.keyCode) {
                case 68:
                    this.player.move(e.keyCode);
                    break;
                case 65:
                    this.player.move(e.keyCode);
                    break;
                case 87:
                    this.player.move(e.keyCode);
                    break;
                case 83:
                    this.player.move(e.keyCode);
                    break;
            }
            this.frame(key)
        })
    }
}

// W = 87 // S = 83 // A = 65 // D = 68
