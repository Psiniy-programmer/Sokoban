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
			element.value = 0
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
// 0white = floor, 2green = finish, 1blue = wall, 4black = darkness, 5Player, 6Box
	setMapChords() {
		let x = 0,
			y = 0,
			counter = 0

		for (let i = 0; i < 4; i++) {
			for (let j = 0 ; j < 4; j++) {
				x = i * 60
				y = j * 60
				if (this.field[i][j] == 5) {
					Data.PlayerChords.x = x
					Data.PlayerChords.y = y
				}
				if (this.field[i][j] == 1) {
					for (let key in Data.WallsChords.fromEditor){
						if (counter == key) {
							Data.WallsChords.fromEditor[key].x = x 
							Data.WallsChords.fromEditor[key].y = y
						}
					}
				}
				if (this.field[i][j] == 2) {
					for (let key in Data.finishChords) {
						if (counter == key) {
							Data.finishChords[key].finishX = x 
							Data.finishChords[key].finishY = y
						}
					}
				}
				if (this.field[i][j] == 6) {
					for (let key in Data.boxesChords.fromEditor) {
						if (counter == key) {
							Data.boxesChords.fromEditor[key].x = x
							Data.boxesChords.fromEditor[key].y = y
						}
					}
				}
				counter++
			}
		}
		// this.field.forEach(element => {
		// 	x = tempCounter * 60
		// 	y = tempCounter * 60
		// 	if (element == 5) {
		// 		Data.PlayerChords.x = x
		// 		Data.PlayerChords.y = y
		// 	}
		// 	tempCounter++
		// })
	}
}

export { Editor, inputs as editorInputs, inputButtons}