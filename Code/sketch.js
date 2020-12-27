let listPos = 0,
    points = [],
    totalPoints = [];

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  for (let i = 0; i < TWO_PI * 10; i += TWO_PI / 50) {
    totalPoints.push(sin(i) * 100);
  }
  stroke(255);
}

function draw() {
  if (listPos > totalPoints.length - 1) {
    noLoop();
  }
  background(0);
  points.push(totalPoints[listPos]);
  listPos++;

  for (let i = 0; i < points.length; i++) {
    line((width / points.length) * i, (height / 2) - points[i], (width / points.length) * (i - 1), (height / 2) - points[i - 1]);
  }
}
