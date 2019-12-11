import Enginge from "../JS/Engine.js"

export default function Tests(){
    const assert = chai.assert
    mocha.setup('bdd')

    let addBoxer = (boxesCount) => {
        let game = new Enginge(undefined, undefined, undefined, boxesCount-1)
        game._addBox()
        return game.boxes.length
    }

    describe('adderBox', () => {
        function makeTest(x) {
            it("Добавляет " + x + " ящик", () => {
                assert.equal(addBoxer(x),x)
            })
        }
        for (let x = 1; x <= 3; x++) {
            makeTest(x)
        }
    })
    mocha.run()
}