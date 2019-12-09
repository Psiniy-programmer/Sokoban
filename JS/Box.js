import NPC from './NPC.js'

export default class Box extends NPC {
    #finish = null
    #checked = null
    constructor(xPos, yPos, img) {
        super(xPos, yPos, img)
        this.finish = false
        this.checked = false
    }
    get finish() {
        return this.#finish
    }

    set finish(val) {
        this.#finish = val
    }

    get checked() {
        return this.#checked
    }

    set checked(val) {
        this.#checked = val
    }
    // чекер для позиции коробки
    _checkFinish(boxChords) {
        for (let key in boxChords) {
            if (this.x == boxChords[key].x &&
                this.y == boxChords[key].y) {
                this.finish = true
            }

        }
    }
}
