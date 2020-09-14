function setup() {
    canvas = createCanvas(450, 450);
    background('silver');
    textSize(30);
    canvas.parent('processing');
}

function preload() {
    ryanImg = loadImage("images/ryan.png");
}


class Ryan {
    constructor() {
        this.x = 300;
        this.y = 200;
        this.dia = 10;
        this.size = 1.0;
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
        this.size = 1.5 + sin(millis() / 1000 * 10);
    }

    teken() {
        fill('red');
        noStroke();
        rectMode(CENTER);
        imageMode(CENTER);
        image(ryanImg, this.x, this.y, ryanImg.width * this.size, this.size * ryanImg.height)
    }
}

var ryan = new Ryan();
function draw() {
    background('#ff3399')
    ryan.beweeg()
    ryan.teken()
}