export default class Player extends NPC {
    constructor(xPos,yPos,img) {
        super(xPos,yPos,img);
        this.count  = 0;
    }
    checkCount() {
        return (this.count == Data.boxCount) ? true : false
    }
}

import NPC from './NPC.js'
