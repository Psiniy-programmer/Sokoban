import Dom from "./Dom.js"
import Data from "../Data.js"

let inputs = document.getElementById("inputs"),
	inputButtons = document.getElementById("input_buttons")

class Editor extends Dom {
	constructor() {
		super(),
		this.field = [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		],
		this.inputs = [],
		this.buttons = [],
		this.domCreate("input", inputs, this.inputs, 16),
		this.domCreate("button", inputButtons, this.buttons, 2),
		this.setButtons(Data.editor.text, Data.editor.func, this.buttons)
		this.hideDomElem(this.inputs, inputButtons)
	}

	init(other) {
		other.forEach(element => {
			element.value = 6
		})
	}

	pushF() {
		let tempCounter = 0;
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				this.field[i][j] = this.inputs[tempCounter].value
				tempCounter++
			}
		}
	}
	helperSetter(key, data, x, y, counter, i, j) {
		if (this.field[i][j] == key) {
			for (let dataKey in data) {
				if (counter == dataKey) {
					data[dataKey].x = x
					data[dataKey].y = y
				}
			}
		}
	}
	// 0white = floor, 2green = finish, 1blue = wall, 4black = darkness, 5Player, 6Box
	setMapChords() {
		let x = 0,
			y = 0,
			counter = 1

		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				x = i * 60
				y = j * 60
				if (this.field[i][j] == 5) {
					Data.PlayerChords.x = x
					Data.PlayerChords.y = y
				}
				this.helperSetter(1, Data.WallsChords.fromEditor, x, y, counter, i, j)
				this.helperSetter(2, Data.finishChords.fromEditor, x, y, counter, i, j)
				this.helperSetter(6, Data.boxesChords.fromEditor, x, y, counter, i, j)
				counter++
			}
		}
		// Data.boxCount.fromEditor = boxCounter
	}
}

export {
	Editor,
	inputs as editorInputs,
	inputButtons
}
