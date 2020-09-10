function setup() {
    canvas = createCanvas(450, 450, WEBGL);
    background('silver');
    textSize(30);
    canvas.parent('processing');
}

function preload() {
    ryan = loadImage("images/ryan.png");
}


class Rood {
    constructor() {
        this.x = 300;
        this.y = 200;
        this.dia = 10;
        this.size = 1.0;
        this.rotation = 0.0;
    }

    beweeg() {
        if (keyIsDown(DOWN_ARROW)) {
            this.y += 5;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += 5;
        }
        if (keyIsDown(UP_ARROW)) {
            this.y -= 5;
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= 5;
        }
        this.size = sin(millis() * 0.01) + 1.0;
        this.rotation = sin(millis() * 0.01 * PI) + 1.0;
    }

    teken() {
        fill('red');
        noStroke();
        rectMode(CENTER);
        imageMode(CENTER);
        rotate(this.rotation);
        angleMode(DEGREES);
        image(ryan, this.x, this.y, ryan.width * this.size, this.size * ryan.height)
    }
}

var roods = [new Rood()];
var previousSecs = 0;

function draw() {

    background('#ff3399')
    var secs = parseInt(millis() / 1000);
    console.log(secs);
    if (secs > previousSecs) {
        roods.push(new Rood());
    }
    previousSecs = secs;
    roods.forEach(rood => {
        rood.beweeg()
    });
    roods.forEach(rood => {
        rood.teken()
    });

    noFill();
    stroke(255);
    push();
    translate(500, height * 0.35, -200);
    sphere(300);
    pop();
}