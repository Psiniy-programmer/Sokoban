export default class Entity {
    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y, 55, 50)
    }
    clear(ctx) {
        ctx.clearRect(0,0,1000,1000)
    }
    domCreator(type, DOM, other, count) {
		for(let i = 0 ; i < count;i++) {
			other[i] = document.createElement(type)
			other[i].className = type + " " + type + i;
		}
		other.forEach(element => {
			element.type = type
			DOM.appendChild(element)
		})
	}
}
