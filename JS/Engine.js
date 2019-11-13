import Box from './Box.js'
import Data from '../Data.js'
import Player from './Player.js'

let canv = document.getElementById('canvas'),
    ctx = canv.getContext(`2d`);


export default class Enginge {
    constructor() {
        this.player = new Player(Data.PlayerChords.x, Data.PlayerChords.y);
        this.boxes = [];
        this.setupBoxes();
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
    // Тут будем рисовать всё это дело (Ящики, игрока и карту) //
    start() {
        this.player.render(ctx);
        // Рисуем ящики и чекаем их на финиш//
        this.boxes.forEach(element => {
            element.checkFinish();
            element.render(ctx);
        });
        //////////////////
        document.addEventListener('keydown', e => {
            if (this.checkCount == true) alert("YOU WIN")

            switch (e.keyCode) {
                case 68:
                    this.player.move(ctx, e.keyCode)
                    break;
                case 65:
                    this.player.move(ctx, e.keyCode)
                    break;
                case 87:
                    this.player.move(ctx, e.keyCode)
                    break;
                case 83:
                    this.player.move(ctx, e.keyCode)
                    break;
            }
            this.boxes.forEach(element => {
                if (element.checkFinish() == true) this.player.count++;
                element.render(ctx)
            })
        })
    }
}

// W = 87 // S = 83 // A = 65 // D = 68