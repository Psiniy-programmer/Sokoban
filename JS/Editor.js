import Dom from "./Dom.js"
import Data from "../Data.js"

let inputs = document.getElementById("inputs"),
	inputButtons = document.getElementById("input_buttons")

class Editor extends Dom {
	constructor() {
		super(),
		this.field = [
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		this.inputs = [],
		this.buttons = [],
		this.domCreate("input", inputs, this.inputs, 16),
		this.domCreate("button", inputButtons, this.buttons, 2),
		this.setButtons(Data.editor.text, Data.editor.func , this.buttons)
		this.hideDomElem(this.inputs, inputButtons)
	}

	init(other) {
		other.forEach(element => {
			element.value = 1
		})
	}

	pushF() {
		let temp = 0;
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				this.field[i][j] = this.inputs[temp].value
				temp++
			}
		}
	}
}

export { Editor, inputs as editorInputs, inputButtons}