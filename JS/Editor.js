import Entity from "./Entity.js"

let inputs = document.getElementById("inputs")

export default class Editor extends Entity {
	constructor() {
		super(),
		this.field = [
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		this.inputs = [],
		this.domCreator("input", inputs, this.inputs, 16)
	}
}