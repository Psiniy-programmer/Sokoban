let img = new Image();
    
img.src = 'https://cactus-online.ru/upload/iblock/fa8/fa83ec5edf92fcd25c08ddfad647faed.jpg';

export default class Box extends NPC {
    constructor(xPos, yPos) {
        super();
        this.sprite = img;
        this.finish = false;
    }
    checkFinish() {
        // чекер для позиции коробки
            // code...
    }
}

import NPC from './NPC.js';
