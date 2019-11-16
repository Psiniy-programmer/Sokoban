export default class Entity {
    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y, 55, 50)
    }
    clear(ctx) {
        ctx.clearRect(0,0,1000,1000)
    }
}
