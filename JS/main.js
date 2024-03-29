import { Menu } from "./Menu.js"
import { Editor, editorInputs, inputButtons } from "./Editor.js"
import Enginge from "./Engine.js"
import Data from "../Data.js"
import Tests from "../Tests/test.js"

let menu = new Menu()
let editor = new Editor()

Tests()

let unit = document.getElementById("mocha")
function defaultLevel() {
	menu.defaultStart()
	
	let kek = new Enginge(Data.map.default, Data.WallsChords.default, Data.boxesChords.default, Data.boxCount.default, Data.finishChords.default)
	kek.start(Data.finishChords.default)

	unit.style.display="none"
	alert("Press SPACE to start")
}

function editorLevel() {
	menu.defaultStart()
	
	let kek2 = new Enginge(editor.field, Data.WallsChords.fromEditor, Data.boxesChords.fromEditor, Data.boxCount.fromEditor)
	kek2.start(Data.finishChords.fromEditor)
	
	editor.hideDomElem(editor.inputs, editorInputs)
	editor.hideDomElem(editor.buttons, inputButtons)

	menu = null
	editor = null

	alert("Press Space to start")
}

function levelCreator() {
	unit.style.display="none"

	menu.hideDomElem(menu.btnArr, buttons)
	editor.showDom(editor.inputs, editorInputs)
	editor.showDom(editor.buttons, inputButtons)
	editor.init(editor.inputs)
}

function setMap() {
	editor.pushF()
	editor.setMapChords()
}

export {
	defaultLevel as level0, levelCreator as redactor, editorLevel, setMap
}
