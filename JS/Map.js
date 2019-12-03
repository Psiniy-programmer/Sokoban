import Entity from "./Entity.js";
import Data from "../Data.js";
let test = new Image();
test.src = "https://vignette.wikia.nocookie.net/terrariafanideas/images/8/8f/Tourist-1.png.png/revision/latest?cb=20181204072339"

export default class Map extends Entity {
    constructor(map) {
        super();
        this.map = map,
        this.wals = Data.WallsChords;
    }

    drawMap(ctx) {
        for (let i = 0; i < this.map.length; i++) {
            for (let j = 0; j < this.map[i].length; j++) {
                if (this.map[i][j] == 0) {
                    ctx.fillStyle = "white";
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