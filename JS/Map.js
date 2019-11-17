import Entity from "./Entity.js";
import Data from "../Data.js";
let test = new Image();
test.src = "https://vignette.wikia.nocookie.net/terrariafanideas/images/8/8f/Tourist-1.png.png/revision/latest?cb=20181204072339"

export default class Map extends Entity {
    constructor() {
        super();
        this.map = [
            [1, 1, 1, 1, 1, 1, 4, 4],// 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 1, 4, 4],// 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 1, 1, 1],// 0, 0, 0, 0],
            [1, 2, 0, 0, 0, 0, 2, 1],// 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],// 0, 0, 0, 0],
            // [0, 0, 0, 0, 0, 0, 0, 0],// 0, 0, 0, 0],
            // [0, 0, 0, 0, 0, 0, 0, 0],// 0, 0, 0, 0],
            // [0, 0, 0, 0, 0, 0, 0, 0],// 0, 0, 0, 0],
            // [0, 0, 0, 0, 0, 0, 0, 0],// 0, 0, 0, 0],
            // [0, 0, 0, 0, 0, 0, 0, 0],// 0, 0, 0, 0],
            // [0, 0, 0, 0, 0, 0, 0, 0],//0, 0, 0, 0],
            // [0, 0, 0, 0, 0, 0, 0, 0]// 0, 0, 0, 0]
        ],
        this.wals = Data.WallsChords;
    }

    drawMap(ctx) {
        for (let i = 0; i < this.map.length; i++) {
            for (let j = 0; j < this.map[i].length; j++) {
                if (this.map[i][j] == 0) {
                    ctx.fillStyle = "red";
                }
                if (this.map[i][j] == 1) {
                    ctx.fillStyle = "blue"
                }
                if (this.map[i][j] == 2) {
                    ctx.fillStyle = "green"
                }
                if (this.map[i][j] == 4) {
                    ctx.fillStyle = "black"
                }
                ctx.fillRect(i * 60, j * 60, 55, 50)
            }
        }
    }
}