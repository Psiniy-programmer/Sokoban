import Entity from "./Entity.js";
export default class NPC extends Entity {
    constructor(xPos, yPos) {
        super();
        this.x = xPos;
        this.y = yPos;
    }
    move(ctx,dir) {
        this.clear(ctx);
        if (dir == 68) {
            this.x += 10
        }
        if (dir == 65) {
            this.x -= 10
        }
        if (dir == 87) {
            this.y -= 10
        }
        if (dir == 83) {
            this.y += 10
        }
        //this.render(ctx);
        // console.log(this.checkCount());
        // code...
    }
}



// W = 87 // S = 83 // A = 65 // D = 68