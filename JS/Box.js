export default class Box extends NPC {
    constructor(xPos, yPos, img) {
        super(xPos, yPos, img);
        this.finish = false;
        this.checked = false;
    }
    // чекер для позиции коробки
    checkFinish(boxChords) {
        for (let key in boxChords) {
            if (this.x == boxChords[key].finishX &&
                this.y == boxChords[key].finishY) {
                this.finish = true;
            }
        }
    }
}

import NPC from './NPC.js';
import Data from '../Data.js'