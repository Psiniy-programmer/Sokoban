import Box from './Box.js'
import Data from './Data.js'
let boxCount = 4;


let canv = document.getElementById('canvas'),
    ctx = canv.getContext(`2d`);


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
        for (let key in Data.boxesChords) {
            for (let i = 0; i < boxCount; i++) {
                if (key == i + 1) {
                    this.boxes[i].x = Data.boxesChords[key].x;
                    this.boxes[i].y = Data.boxesChords[key].y
                }
            }
        }
    }
    // Тут будем рисовать всё это дело (Ящики, игрока и карту) //
    start() {
        // Рисуем ящики //
        this.boxes.forEach(element => {
            element.checkFinish();
            element.render(ctx);
        });
        
        //////////////////
    }
}
