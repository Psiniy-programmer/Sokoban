import Menu from "./Menu.js"

const game = new Menu();

function defaultLevel() {
	game.defaultStart();
}

function levelCreator(){
	game.levelDesign()
}

export {defaultLevel as level0, levelCreator as redactor}