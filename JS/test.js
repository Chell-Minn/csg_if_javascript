function setup() {
    canvas = createCanvas(450, 450);
    background('silver');
    textSize(30);
    canvas.parent('processing');
}

function preload() {
 ryan = loadImage("images/ryan.png");
}


var rood = {
    x: 300,
    y: 200,
    dia: 10,


    beweeg() {
        if (keyIsDown(DOWN_ARROW)) {
            this.y +=5;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x +=5;
        }
        if (keyIsDown(UP_ARROW)) {
            this.y -=5;
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.x -=5;
        }
    },
    teken() {
        fill('red');
        noStroke();
        background('purple')
        image(ryan, this.x, this.y)
        
    }
}

function draw() { 
    rood.teken()
    rood.beweeg()
}