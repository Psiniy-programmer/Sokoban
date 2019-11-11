import Box from './Box.js'

let boxCount = 4,
    boxesChords = {
        1: {
            x: 10,
            y: 10
        },
        2: {
            x: 60,
            y: 80
        },
        3: {
            x: 110,
            y: 150
        },
        4: {
            x: 160,
            y: 210
        }
    };


let canv = document.getElementById('canvas'),
    ctx = canv.getContext(`2d`);

canv.height = 1000;
canv.width = 1000;


export default class Enginge {
    constructor() {
        this.boxes = [];
        this.setupBoxes();
    }

    // Заполняем поле ящиков у движка //
    setupBoxes() {
        for (let i = 0; i < boxCount; i++) {
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
        for (let key in boxesChords) {
            for (let i = 0; i < boxCount; i++) {
                if (key == i + 1) {
                    this.boxes[i].x = boxesChords[key].x;
                    this.boxes[i].y = boxesChords[key].y
                }
            }
        }
    }
    // Тут будем рисовать всё это дело (Ящики, игрока и карту) //
    start() {
        // Рисуем ящики //
        this.boxes.forEach(element => {
            element.render(ctx);
        });
        //////////////////
    }
}
