import Entity from "./Entity.js";

export default class NPC extends Entity {
    constructor(xPos, yPos) {
        super();
        this.x = xPos;
        this.y = yPos;
    }
    move() {
        // code...
    }
}