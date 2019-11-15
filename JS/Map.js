import Entity from "./Entity.js";
let test = new Image();
test.src = "https://vignette.wikia.nocookie.net/terrariafanideas/images/8/8f/Tourist-1.png.png/revision/latest?cb=20181204072339"

export default class Map extends Entity {
    constructor() {
        super();
        this.map = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }

    drawMap(ctx) {
        this.clear(ctx);
        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 9; j++) {
                // if (this.map[i][j] == 0) {
                    // ctx.drawImage(test,i*34,j*34)
                //}
                ctx.fillStyle = "red";
                ctx.fillRect(i * 64, j * 64, 50, 50)
            }
        }
    }
}