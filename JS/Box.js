let img = new Image();
    
img.src = 'https://cactus-online.ru/upload/iblock/fa8/fa83ec5edf92fcd25c08ddfad647faed.jpg';

export default class Box extends Entity {
    constructor(xPos, yPos) {
        super();
        this.x = xPos;
        this.y = yPos;
        this.sprite = img;
        this.finish = false;
    }
}

import Entity from './Entity.js'