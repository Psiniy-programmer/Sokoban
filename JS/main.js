import { Menu, menuButtons } from "./Menu.js"
import { Editor, editorInputs, inputButtons} from "./Editor.js"

const menu = new Menu()
const editor = new Editor()

function defaultLevel() {
	menu.defaultStart()
}

function levelCreator(){
	menu.hideButtons(menu.btnArr, buttons)
	editor.showDom(editor.inputs, editorInputs)
	editor.showDom(editor.buttons, inputButtons)
	console.log(editor)
	// alert("Реализация появится на днях")
}

function syka() {
	editor.levelStarter()
}


export {defaultLevel as level0, levelCreator as redactor, syka}