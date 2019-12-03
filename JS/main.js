import { Menu, menuButtons } from "./Menu.js"
import { Editor, editorInputs, inputButtons} from "./Editor.js"
import Enginge from "./Engine.js"
import Data from "../Data.js"


const menu = new Menu()
const editor = new Editor()


function defaultLevel() {
	menu.defaultStart()
	let kek = new Enginge(Data.map.default)
	kek.start()
   	alert("Press SPACE to start")

}

function editorLevel() {
	menu.defaultStart();
	let kek2 = new Enginge(Data.map.fromEditor)
	kek2.start()
	alert("Press Space to start")
}

function levelCreator(){
	menu.hideDomElem(menu.btnArr, buttons)
	editor.showDom(editor.inputs, editorInputs)
	editor.showDom(editor.buttons, inputButtons)
	editor.init(editor.inputs)
}

function setMap() {
	editor.pushF()
	Data.map.fromEditor = editor.field
}



export {defaultLevel as level0, levelCreator as redactor, editorLevel, setMap}