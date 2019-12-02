import Enginge from './Engine.js'
import Data from '../Data.js'
// let start = prompt("Do u want start?", "yes"),
let start = 'yes',
	canv = document.getElementById('canvas'),
	buttons = document.getElementById('buttons')

export default class Menu {
	constructor() {
		this.btnArr = [],
		this.createButtons()
	}
	
	defaultStart() {
		this.hideButtons()
		if (start == "yes") {
			let kek = new Enginge();
			console.log(kek)
			canv.style.display="block"
			kek.start()
	   		alert("Press SPACE to start")
		}
	}

	hideButtons() {
		this.btnArr.forEach(element => {
		element.style.display = 'none'
		})
	}

	createButtons() {
		for(let i = 0 ; i < Data.menu.btnCount;i++) {
			this.btnArr[i] = document.createElement('button')
		}
		for (let key in Data.menu.text) {
			this.btnArr[key].innerHTML = Data.menu.text[key]
		}
		for (let key in Data.menu.func) {
			this.btnArr[key].onclick = Data.menu.func[key]
			console.error(Data.menu.func[key])
		}
		this.btnArr.forEach(element => {
			element.type = "button"
			buttons.appendChild(element)
		})
	}

	levelDesign() {
		this.hideButtons()
		alert("LD WORDKS")
	}
}