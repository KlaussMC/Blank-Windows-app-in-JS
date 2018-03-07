var write = str => text(str, width - 100, 25)

let p, b, name = "Jacob", p2, b2;
function setup() {
    p = new player(width / 2, height / 2, name)
    b = new base(name)

    p2 = new player(width / 2, height / 2, name + "2")
    b2 = new base(name + "2")

    createCanvas(window.innerWidth, window.innerHeight);
    background(17);
}
function draw() {
    background(25);

    b.show();
    b.update();

    p.show();
    p.update();

    b2.show();
    b2.update();

    p2.show();
    p2.update();

    if (keyIsDown(68))
        p.angle-=0.125;
    else if (keyIsDown(65))
        p.angle+=0.125;
    else if (keyIsDown(87))
        p.dir = 1;
    else if (keyIsDown(83))
        p.dir = -1;
    else if (!keyIsDown(87) && !keyIsDown(83))
        p.dir = 0;

    if (keyIsDown(32))
        p.shoot()
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
