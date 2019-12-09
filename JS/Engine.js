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
    #player = null
    #boxes = null
    #map = null
    constructor(mapData, wallsChords, boxesChords, boxesCount) {
        this.player = new Player(Data.PlayerChords.x, Data.PlayerChords.y, playerImg)
        this.boxes = []
        this._setupBoxes(boxesCount, boxesChords)
        this.map = new Map(mapData, wallsChords)
    }
    // Удаляем пустые ящики //
    _deleteBox() {
        for(let j = 0; j<5;j++) {
            let i = 0
            this.boxes.forEach(element => {
                if (element.x == undefined) this.boxes.splice(i,1)
                i++
            })
        }
    }
    // Создаём сами ящики //
    _addBox() {
        let box = new Box(0, 0, boxImg)
        this.boxes.push(box)
    }
    // Устанавливаем координаты ящикам //
    _setBoxChords(boxesCount, boxesChords) {
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
    _setupBoxes(boxesCount, boxesChords) {
        for (let i = 0; i < boxesCount; i++) {
            this._addBox()
        }
        this._setBoxChords(boxesCount, boxesChords)
        this._deleteBox()
    }
     // чекер для позиции коробки
     _checkFinish() {
        for (let key in Data.finishChords) {
            if (this.x == Data.finishChords[key].x &&
                this.y == Data.finishChords[key].y) {
                this.finish = true;
            }
        }
    }
    // Коллизия игрока и ящика
    _collision(keyB) {
        // Коллизии для ящиков и стен
        this.boxes.forEach(element => {
            if (this.player.x == element.x && this.player.y == element.y) {
                element._move(keyB)
                for (let key in this.map.wals) {
                    if (element.x == this.map.wals[key].x && element.y == this.map.wals[key].y) {
                        this._collisionWalls(keyB, element);
                        break;
                    }
                }
            }
        })
        // Коллизии для игрока и стен
        for (let key in this.map.wals) {
            if (this.player.x == this.map.wals[key].x && this.player.y == this.map.wals[key].y) {
                this._collisionWalls(keyB, this.player)
            }
        }
    }
    _collisionWallsHelper(keyB, element, move1, move2) {
        if (keyB == move1) {
            if (element == this.player) {
                this.player._move(move2)
            } else {
                if (this.player.power == true) {
                    element._move(move2)
                    this.player._move(move2)
                }
                element._move(move2)
                this.player._move(move2)
            }
        }
    }
    // ну я думаю как бы понятно что тут происходит
    _collisionWalls(keyB, element) {
        this._collisionWallsHelper(keyB, element, 65, 68)
        this._collisionWallsHelper(keyB, element, 68, 65)
        this._collisionWallsHelper(keyB, element, 87, 83)
        this._collisionWallsHelper(keyB, element, 83, 87)
        this._frame();
    }
    _counterInc(other, boxChords) {
        other.forEach(element => {
            element._checkFinish(boxChords)
            if (element.finish == true && element.checked == false) {
                this.player.count++
                element.checked = true
            }
            element.render(ctx)
        })
    }
    // кадр который постоянно будет отрисовываться
    _frame(key,boxChords) {
        this.player._powerChanger(key)
        if (this.player.checkCount(this.boxes.length) == true) alert("WIN")
        this.map.clear(ctx)
        this.map.drawMap(ctx)
        this.player.render(ctx)
        this._collision(key)
        this._counterInc(this.boxes, boxChords)
    }
    // Тут будем рисовать всё это дело (Ящики, игрока и карту) //
    start(boxChords) {
        this.map.drawMap(ctx)
        this.player.render(ctx);
        this.boxes.forEach(element => {
            element.render(ctx);
        })
        // Регистрируем нажатие кнопочек //
        document.addEventListener('keydown', e => {
            let key = e.keyCode
            this.player._move(e.keyCode)
            this._frame(key,boxChords)
        })
    }
}

// W = 87 // S = 83 // A = 65 // D = 68 // SPACE = 32 // G = 71