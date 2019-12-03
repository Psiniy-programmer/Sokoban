import Enginge from './Engine.js'
import DomCreator from './DomCreator.js'
import Data from '../Data.js'

let	canv = document.getElementById('canvas'),
	buttons = document.getElementById('buttons')

class Menu extends DomCreator{
	constructor() {
		super(),
		this.btnArr = [],
		this.domCreator('button', buttons, this.btnArr, Data.menu.btnCount),
		this.setButtons(Data.menu.text, Data.menu.func, this.btnArr)
	}
	defaultStart() {
		this.hideButtons(this.btnArr, buttons)
		let kek = new Enginge()
		console.log(kek)
		canv.style.display="block"
		kek.start()
	   	alert("Press SPACE to start")
	}
}
export { Menu, buttons as menuButtons}