class player {
    constructor(x, y, player) {
        this.health = 50;
        this.angle = 0;
        this.pos = new createVector(x, player==name?y:0-y);
        this.name = player;
        this.projectiles = [];
        this.dir = 0;
    }
    show() {
        noStroke();
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.health / 2, this.health / 2)
        for (let i in this.projectiles) { this.projectiles[i].show() }
        write(this.projectiles.length);
    }
    update() {
        this.pos.x += ((this.health / 10) * sin(this.angle)) * this.dir;
        this.pos.y += ((this.health / 10) * cos(this.angle)) * this.dir;

        this.pos.x = constrain(this.pos.x, 0, width);
        this.pos.y = constrain(this.pos.y, 0, height);

        for (let i in this.projectiles) {
            this.projectiles[i].update()
            if ((this.projectiles[i].pos.x > width || this.projectiles[i].pos.x < 0) || (this.projectiles[i].pos.y > height || this.projectiles[i].pos.x < 0-height))
                this.projectiles.splice(i, 1);
        }
    }
    shoot() {
        this.projectiles.push(new projectile(this.pos.x, this.pos.y, this.angle));
    }
    heal() {
        if (frameCount % 30 == 0) this.health++;
        this.health = constrain(this.health, 0, 100);
    }
}
class projectile {
    constructor(x, y, angle, damage) {
        this.pos = createVector(x, y);
        this.angle = angle;
        this.damage = damage;
    }
    show() {
        ellipse(this.pos.x, this.pos.y, 2, 2);
    }
    update() {
        this.pos.x += 25 * sin(this.angle)
        this.pos.y += 25 * cos(this.angle)
    }
}
