export default class Player extends NPC {
    #power = null
    
    constructor(xPos,yPos,img) {
        super(xPos,yPos,img)
        this.count  = 0
        this.power = false
    }
    checkCount(boxCount) {
        return (this.count == boxCount) ? true : false
    }
    
    _powerChanger(e) {
        if (e == 71) {
            if (this.power == false) return this.power = true
            return this.power = false
        }
    }
    
    get ult() {
        return this.#power
    }

    set ult(val) {
        this.#power = val
    }
}

import NPC from './NPC.js'