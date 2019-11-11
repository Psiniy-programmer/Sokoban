import Entity from './Entity.js'

let canv = document.getElementById('canvas'),
    ctx = canv.getContext(`2d`),
    img = new Image(),
    boxCount = 4,
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

img.src = 'https://cactus-online.ru/upload/iblock/fa8/fa83ec5edf92fcd25c08ddfad647faed.jpg';
canv.height = 1000;
canv.width = 1000;

class Box extends Entity {
    constructor(xPos, yPos) {
        super();
        this.x = xPos;
        this.y = yPos;
        this.sprite = img;
        this.finish = false;
    }
}

class Enginge {
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

const boxTest = () => {
    let kek = new Enginge();
    console.log(kek);
    kek.start();
}

boxTest()
