import DomCreator from "./DomCreator.js"
import Data from "../Data.js"

let inputs = document.getElementById("inputs"),
	inputButtons = document.getElementById("input_buttons")

class Editor extends DomCreator {
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
		this.domCreator("input", inputs, this.inputs, 16),
		this.domCreator("button", inputButtons, this.buttons, 1),
		this.setButtons(Data.editor.text, Data.editor.func , this.buttons)
		this.hideButtons(this.inputs, inputButtons)
	}
	levelStarter() {
		alert("START BLYAD");
	}	
}

export { Editor, inputs as editorInputs, inputButtons}