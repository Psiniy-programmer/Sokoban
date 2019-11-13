let img = new Image();
    
img.src ="https://opengameart.org/sites/default/files/RTS_Crate.png"
// img.src = 'https://cactus-online.ru/upload/iblock/fa8/fa83ec5edf92fcd25c08ddfad647faed.jpg';

export default class Box extends NPC {
    constructor(xPos, yPos) {
        super();
        this.sprite = img;
        this.finish = false;
    }
    // чекер для позиции коробки
    checkFinish() {
        for (let key in Data.finishChords) {
            if (this.x == Data.finishChords[key].finishX 
                                    &&
                this.y == Data.finishChords[key].finishY) {
                    this.finish = true;
                }
        }
    }
}
import NPC from './NPC.js';import Data from '../Data.js'