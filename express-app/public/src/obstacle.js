class obstacle {
    constructor(x, y, size) {
        this.pos = createVector(x, y);
        this.size = size;
    }
    show() {
        fill(255, 0, 0);
        ellipse(pos.x, pos.y, size, size);
    }
}
