import {
	Menu,
	menuButtons
} from "./Menu.js"
import {
	Editor,
	editorInputs,
	inputButtons
} from "./Editor.js"
import Enginge from "./Engine.js"
import Data from "../Data.js"


const menu = new Menu()
const editor = new Editor()


function defaultLevel() {
	menu.defaultStart()
	let kek = new Enginge(Data.map.default, Data.WallsChords.default, Data.boxesChords.default, Data.boxCount.default, Data.finishChords.default)
	alert("Press SPACE to start")
}

function editorLevel() {
	menu.defaultStart()
	let kek2 = new Enginge(editor.field, Data.WallsChords.fromEditor, Data.boxesChords.fromEditor, Data.boxCount.fromEditor, Data.finishChords.fromEditor)
	editor.hideDomElem(editor.inputs, editorInputs)
	editor.hideDomElem(editor.buttons, inputButtons)
	alert("Press Space to start")
}

function levelCreator() {
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