let img = new Image();

img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4fa34aa9-dbfb-41ed-949c-05b9a9d898ec/d4jwgzg-6837a002-c330-4705-9ba4-9c14c6996c00.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRmYTM0YWE5LWRiZmItNDFlZC05NDljLTA1YjlhOWQ4OThlY1wvZDRqd2d6Zy02ODM3YTAwMi1jMzMwLTQ3MDUtOWJhNC05YzE0YzY5OTZjMDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SoJQyqcdOgOnAmFXRH5ah6btC_Lc110mxT6EBF2DcXU"
// img.src ="https://opengameart.org/sites/default/files/RTS_Crate.png"

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
import Data from '../Data.js';
