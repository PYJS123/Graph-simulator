let listPos = 0,
    points = [],
    totalPoints = [];

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  for (let i = 0; i < TWO_PI; i += TWO_PI / 10) {
    totalPoints.push(sin(i));
  }
}

function draw() {
  background(0);
  points.push(totalPoints[listPos]);
  listPos++;
  listPos = constrain(listPos, 0, totalPoints.length - 1);
}
