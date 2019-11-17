import Box from './Box.js'
import Data from '../Data.js'
import Player from './Player.js'
import Map from './Map.js';
import NPC from './NPC.js'

let canv = document.getElementById('canvas'),
    ctx = canv.getContext(`2d`);

let playerImg = new Image(),
    boxImg = new Image();

playerImg.src = "https://vignette.wikia.nocookie.net/terrariafanideas/images/8/8f/Tourist-1.png.png/revision/latest?cb=20181204072339"
boxImg.src = "https://opengameart.org/sites/default/files/RTS_Crate.png"

export default class Enginge {
    constructor() {
        this.player = new Player(Data.PlayerChords.x, Data.PlayerChords.y, playerImg);
        this.boxes = [];
        this.setupBoxes();
        this.map = new Map();
    }
    // Заполняем поле ящиков у движка //
    setupBoxes() {
        for (let i = 0; i < Data.boxCount; i++) {
            this.addBox();
        }
        this.setBoxChords();
    }
    // Создаём сами ящики //
    addBox() {
        let box = new Box(0, 0, boxImg);
        this.boxes.push(box);
    }
    // Устанавливаем координаты ящикам //
    setBoxChords() {
        for (let key in Data.boxesChords) {
            for (let i = 0; i < Data.boxCount; i++) {
                if (key == i + 1) {
                    this.boxes[i].x = Data.boxesChords[key].x;
                    this.boxes[i].y = Data.boxesChords[key].y
                }
            }
        }
    }
    // Коллизия игрока и ящика
    collision(key) {
        this.boxes.forEach(element => {
            if (this.player.x == element.x && this.player.y == element.y) {
                element.move(key)
            }
        })
    }
    // кадр который постоянно будет отрисовываться
    frame(key) {
        this.map.clear(ctx)
        this.map.drawMap(ctx)
        this.player.render(ctx)
        this.collision(key)
        this.boxes.forEach(element => {
            if (element.checkFinish() == true) this.player.count++;
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
            if (this.checkCount == true) alert("YOU WIN")
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