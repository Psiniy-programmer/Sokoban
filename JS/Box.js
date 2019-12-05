export default class Box extends NPC {
    constructor(xPos, yPos, img, boxCount) {
        super(xPos, yPos, img);
        this.finish = false;
        this.checked = false;
    }
    // чекер для позиции коробки
    checkFinish() {
        for (let key in Data.finishChords.default) {
            if (this.x == Data.finishChords.default[key].finishX &&
                this.y == Data.finishChords.default[key].finishY) {
                this.finish = true;
            }
        }
    }
}

import NPC from './NPC.js';
import Data from '../Data.js'