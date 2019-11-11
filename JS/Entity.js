export default class Entity {
    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y, 50, 50)
    }
}
