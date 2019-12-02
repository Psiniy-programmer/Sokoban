import Enginge from './Engine.js'
import Entity from './Entity.js'
import Data from '../Data.js'

let	canv = document.getElementById('canvas'),
	buttons = document.getElementById('buttons')

export default class Menu extends Entity{
	constructor() {
		super(),
		this.btnArr = [],
		this.domCreator('button', buttons, this.btnArr, Data.menu.btnCount),
		this.setButtons()
	}

	defaultStart() {
		this.hideButtons()
		let kek = new Enginge();
		console.log(kek)
		canv.style.display="block"
		kek.start()
	   	alert("Press SPACE to start")
	}

	setButtons() {
		for (let key in Data.menu.text) {
			this.btnArr[key].innerHTML = Data.menu.text[key]
		}
		for (let key in Data.menu.func) {
			this.btnArr[key].onclick = Data.menu.func[key]
			console.error(Data.menu.func[key])
		}
	}

	hideButtons() {
		this.btnArr.forEach(element => {
		element.style.display = 'none'
		})
		buttons.style.display = 'none'
	}
}