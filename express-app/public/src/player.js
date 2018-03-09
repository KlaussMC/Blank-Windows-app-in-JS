class player {
    constructor(x, y, player) {
        this.health = 100;
        this.angle = PI;
        this.pos = new createVector(x, player==name?y:0-y);
        this.name = player;
        this.projectiles = [];
        this.dir = 0;
        this.dead = false;
    }
    show() {
        noStroke();
        fill(255);

        for (let i in this.projectiles) { this.projectiles[i].show() }

        if (this.name == name) {
            push();
            translate(this.pos.x, this.pos.y);
            rotate(PI - this.angle);
            imageMode(CENTER);
            image(pgraphic, 0, 0, this.health / 2, this.health / 2);
            pop();
        } else
            rect(this.pos.x, 0, 5, 5);
    }
    update() {
        this.pos.x += ((this.health / 10) * sin(this.angle)) * this.dir;
        this.pos.y += ((this.health / 10) * cos(this.angle)) * this.dir;

        this.pos.x = constrain(this.pos.x, 0, width);
        if (name == this.name)
            this.pos.y = constrain(this.pos.y, 0, height);
        else
            this.pos.y = constrain(this.pos.y, 0-height, 0);

        for (let i in this.projectiles) {
            this.projectiles[i].update()
            if ((this.projectiles[i].pos.x > width || this.projectiles[i].pos.x < 0) || (this.projectiles[i].pos.y > height || this.projectiles[i].pos.x < 0-height))
                this.projectiles.splice(i, 1);
        }
    }
    shoot() {
        if (frameCount % 5 == 0) this.projectiles.push(new projectile(this.pos.x, this.pos.y, this.angle, this.health / 4, this.name));
    }
    heal() {
        if (frameCount % 30 == 0) this.health++;
        this.health = constrain(this.health, 0, 100);
    }
    damage(amnt) {
        console.log("Hit");
        this.health -= amnt;

        if (this.health <= 0) {
            console.log(p2.name + " Killed you");
            this.dead = true;

            endGame();
        }

        this.health = constrain(this.health, 0, 100);
        score--;
    }
}
class projectile {
    constructor(x, y, angle, damage, owner) {
        this.pos = createVector(x, y);
        this.angle = angle;
        this.angle += random(-0.03, 0.03);
        this.damage = damage;
        this.name = owner;

        console.log("Pew Pew");
    }
    show() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(PI - this.angle);
        imageMode(CENTER);
        image(bullet, 0, 0, 10, 10);
        pop();

    }
    update() {
        this.pos.x += 25 * sin(this.angle)
        this.pos.y += 25 * cos(this.angle)

        if (this.name != name) {
            if (!p.dead) {
                if (dist(this.pos.x, this.pos.y, p.pos.x, p.pos.y) < 1 + (p.health / 2))
                    p.damage(this.damage)
                    score++;
            }
        } else {
            if (!p2.dead) {
                if (dist(this.pos.x, this.pos.y, p2.pos.x, p2.pos.y) < 1 + (p2.health / 2)) {
                    p2.damage(this.damage)
                    score++;
                }
            }
        }
    }
}
