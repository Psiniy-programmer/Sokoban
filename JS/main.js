import Menu from "./Menu.js"
import Editor from "./Editor.js"

const game = new Menu();
// game.hideButtons()

function defaultLevel() {
	game.defaultStart();
}

function levelCreator(){
	game.hideButtons()
	const editor = new Editor();
	console.log(editor)
	alert("Реализация появится на днях")
}

export {defaultLevel as level0, levelCreator as redactor}