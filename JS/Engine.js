import Box from './Box.js'
import Data from '../Data.js'
import Player from './Player.js'
import Map from './Map.js';

let canv = document.getElementById('canvas'),
    ctx = canv.getContext(`2d`);

export default class Enginge {
    constructor() {
        this.player = new Player(Data.PlayerChords.x, Data.PlayerChords.y);
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
        let box = new Box();
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
    collision() {
        this.boxes.forEach(element => {
            if ((Math.abs(element.x - this.player.x) == 40 && element.y == this.player.y) ||
                (Math.abs(element.y - this.player.y) == 40 && element.x == this.player.x)) {
                    
                        if (element.x - this.player.x == 40 && element.y == this.player.y) element.move(68);
                        if (element.x - this.player.x == (-40) && element.y == this.player.y) element.move(65);
                        if (element.y - this.player.y == 40 && element.x == this.player.x) element.move(83);
                        if (element.y - this.player.y == (-40) && element.x == this.player.x) element.move(87);
                    
            }
        })
    }

    frame() {
        this.map.clear(ctx);
        this.map.drawMap(ctx);
        this.player.render(ctx)
        this.boxes.forEach(element => {
            if (element.checkFinish() == true) this.player.count++;
            this.collision()
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
            // Если все коробочки на нужных местах то победа и все такое //
            if (this.checkCount == true) alert("YOU WIN")

            switch (e.keyCode) {
                case 68:
                    this.player.move(e.keyCode);
                    this.frame()
                    break;
                case 65:
                    this.player.move(e.keyCode);
                    this.frame()
                    break;
                case 87:
                    this.player.move(e.keyCode);
                    this.frame()
                    break;
                case 83:
                    this.player.move(e.keyCode);
                    this.frame()
                    break;
            }
        })
    }
}

// W = 87 // S = 83 // A = 65 // D = 68