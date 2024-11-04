let font;
let points = [];
let r = 5;
let angle = 0;

function preload() {
    font = loadFont("fonts/Quicksand-VariableFont_wght.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    points = font.textToPoints("TKUET", 0, 200, 200, {
        sampleFactor: 0.06
    });
    angleMode(DEGREES);
}

function draw() {
    background("#ffe5d9");

    // 繪製圓和方形
    noFill();
    stroke("#fefae0");
    strokeWeight(1);
    for (let j = 0; j < 17; j++) {
        for (let x = 0; x < width; x += 50) {
            ellipse(x, 25 + 50 * j, 50); // 大圓
            rect(x, 25 + 50 * j, 50); // 方形
            ellipse(25 + x + 50, 50 + 50 * j, 25); // 小圓
        }
    }

    // 繪製文字的顆粒
    translate(mouseX, mouseY);
    rotate((frameCount / 2) % 360);
    for (let i = 0; i < points.length - 1; i++) {
        fill("#d62828");
        noStroke();
        ellipse(points[i].x + r * sin(angle), points[i].y + r * sin(angle), 10);
        strokeWeight(3);
        stroke("#ffcad4");
        line(points[i].x + r * sin(angle), points[i].y + r * sin(angle), points[i + 1].x + r * sin(angle), points[i + 1].y + r * sin(angle));
    }
    angle += 10;
}

