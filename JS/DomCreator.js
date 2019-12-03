export default class DomCreator {
	domCreator(type, DOM, other, count) {
	for(let i = 0 ; i < count;i++) {
		other[i] = document.createElement(type)
		other[i].className = type + " " + type + i
	}
	other.forEach(element => {
		element.type = type
		DOM.appendChild(element)
	})
	}
	setButtons(dataText, dataFunc, other) {
		for (let key in dataText) {
			other[key].innerHTML = dataText[key]
		}
		for (let key in dataFunc) {
			other[key].onclick = dataFunc[key]
		}
	}
	hideButtons(other, domElem) {
		other.forEach(element => {
		element.style.display = 'none'
		})
		domElem.style.display = 'none'
	}
	showDom(other, domElem) {
		other.forEach(element => {
			element.style.display = 'block'
		})
		domElem.style.display = 'block'
	}
}