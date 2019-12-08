import Dom from './Dom.js'
import Data from '../Data.js'

let	canv = document.getElementById('canvas'),
	buttons = document.getElementById('buttons')

class Menu extends Dom{
	#btnArr = null
	constructor() {
		super(),
		this.btnArr = [],
		this.domCreate('button', buttons, this.btnArr, Data.menu.btnCount),
		this.setButtons(Data.menu.text, Data.menu.func, this.btnArr)
	}
	
	get btnArr() {
		return this.#btnArr
	}

	set btnArr(val) {
		this.#btnArr = val
	}

	defaultStart() {
		this.hideDomElem(this.btnArr, buttons)
		canv.style.display="block"
	}
}
export { Menu, buttons as menuButtons}