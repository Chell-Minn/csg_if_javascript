function setup() {
    canvas = createCanvas(450, 450);
    background('silver');
    textSize(30);
    canvas.parent('processing');
}

function preload() {
    ryanImg = loadImage("images/ryan.png");
}

var ryan = {
    x: 300,
    y: 200,
    dia: 10,
    size: 1.0,
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
        this.size = 1.5 + 0.1 * sin(millis() / 1000 * 10);
    },
    teken() {
        noStroke();
        rectMode(CENTER);
        imageMode(CENTER);
        image(ryanImg, this.x, this.y, ryanImg.width * this.size, this.size * ryanImg.height)
    }
}

var eiland = {
    x: 450,
    y: 0,
    dia: 250,
    color: 'purple',
    teken() {
        fill(this.color)
        ellipse(this.x, this.y, this.dia)
    },
    wordtBereikt(ryan) {
        var deltaX = abs(ryan.x - eiland.x);
        var deltaY = abs(ryan.y - ryan.y);
        var dist = sqrt(deltaX * deltaX, deltaY * deltaY);

        if (dist <= eiland.dia + ryan.dia) {
            this.color = "yellow";
        }
        else {
            this.color = "purple";
        }
    }
}

function draw() {
    background('#ff3399')
    ryan.beweeg()
    eiland.wordtBereikt(ryan);
    eiland.teken()
    ryan.teken()
}