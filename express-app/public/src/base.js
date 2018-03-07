class base {
    constructor(owner) {
        this.owner = owner;
        this.pos = new createVector(width / 2, owner == name?height/2:0-height/2)
    }
    show() {
        fill(this.owner?255:0, !this.owner?255:0, 0);
        ellipse(this.pos.x, this.pos.y, 50, 50);
    }
    update() {
        if (dist(this.pos.x, this.pos.y, p.pos.x, p.pos.y) < p.health / 2 + 25)
            p.heal();
    }
}
