let img = new Image();

img.src ="https://vignette.wikia.nocookie.net/terrariafanideas/images/8/8f/Tourist-1.png.png/revision/latest?cb=20181204072339"

export default class Player extends NPC {
    constructor(xPos,yPos) {
        super(xPos,yPos);
        this.sprite = img;
        this.count  = 0;
    }
    checkCount() {
        return (this.count == Data.boxCount) ? true : false;
    }
}

import NPC from './NPC.js'
