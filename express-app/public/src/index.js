var write = str => text(str, width - 100, 25)
var paused = false;

let p, b, p2, b2, name
score = 0;
function preload() {
    bullet = loadImage('../res/projectile.png');
    pgraphic = loadImage('../res/player.png');

    name = document.querySelector("#un").value;
}

function setup() {
    p = new player(width / 2, height / 2, name)
    b = new base(name)

    p2 = new player(width / 2, height / 2, name + "2")
    b2 = new base(name + "2")

    createCanvas(window.innerWidth, window.innerHeight);
    background(17);
}
function draw() {
    background(25, 255);
    push();

    b.show();
    b.update();

    p.show();
    p.update();

    // prevpos.push({x:p.pos.x, y:p.pos.y})
    // for (let i in prevpos) i!=prevpos.length?line(prevpos[i].x, prevpos[i].y, prevpos[i+1].x, prevpos[i+1].y):line(prevpos[i].x, prevpos[i].y, p.pos.x, p.pos.y)

    b2.show();
    b2.update();

    p2.show();
    p2.update();

    if (keyIsDown(68))
        p.angle-=0.125;
    else if (keyIsDown(65))
        p.angle+=0.125;

    if (keyIsDown(87)) {
        p.dir = 1;
    } else if (keyIsDown(83)) {
        p.dir = -1;
    } else if (!keyIsDown(87) && !keyIsDown(83))
        p.dir = 0;

    if (keyIsDown(32))
        p.shoot()

    pop();
}
function togglePause() {
    paused = !paused;
    paused?noLoop():loop();
}

window.addEventListener("keydown", e => { if (e.keyCode == 27) togglePause() } );

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function endGame() {
    document.querySelector("head").innerHTML += "<link rel='stylesheet' href='css/results.css'>"
    document.querySelector(".end").style.display = "block"
    togglePause();
    setValues();
}
