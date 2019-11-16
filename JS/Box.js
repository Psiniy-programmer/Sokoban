export default class Box extends NPC {
    constructor(xPos, yPos, img) {
        super(xPos, yPos, img);
        this.finish = false;
    }
    // чекер для позиции коробки
    checkFinish() {
        for (let key in Data.finishChords) {
            if (this.x == Data.finishChords[key].finishX &&
                this.y == Data.finishChords[key].finishY) {
                this.finish = true;
            }
        }
    }
}

import NPC from './NPC.js';
import Data from '../Data.js'