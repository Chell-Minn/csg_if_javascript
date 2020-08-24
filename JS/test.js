var x = -50;

function preload() {
    kever = loadImage("../images/sprites/kever.png");
}

function setup() {
    canvas = createCanvas(450,450);
    background('silver');
    textSize(30);
    canvas.parent('processing');
}

function draw() {
    for (var i = 0; i < 10; i++) {
         x+=50;
         image(kever,x,45,50,50);
    }
    text("breedte = "+ kever.width,150,40)
}