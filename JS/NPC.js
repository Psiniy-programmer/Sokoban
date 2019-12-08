import Entity from "./Entity.js";
export default class NPC extends Entity {
    constructor(xPos, yPos,img) {
        super();
        this.x = xPos;
        this.y = yPos;
        this.sprite = img;
    }
    _move(dir) {
        if (dir == 68) {
            this.x += 60
        }
        if (dir == 65) {
            this.x -= 60
        }
        if (dir == 87) {
            this.y -= 60
        }
        if (dir == 83) {
            this.y += 60
        }
    }
}

// W = 87 // S = 83 // A = 65 // D = 68