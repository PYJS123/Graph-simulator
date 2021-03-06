let listPos = 0,
    points = [],
    totalPoints = [];
let minm, maxm;

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

  minm = small(points);
  maxm = big(points);

  background(0);
  points.push(totalPoints[listPos]);
  listPos++;

  for (let i = 0; i < points.length; i++) {
    line((width / points.length) * i, (height) - map(points[i], minm, maxm, 0, height), (width / points.length) * (i - 1), (height) - map(points[i - 1], minm, maxm, 0, height));
  }
}

function small(list) {
  smal = Infinity;
  for (let i = 0; i < list.length; i++) {
    smal = min(smal, list[i]);
  }

  return smal;
}

function big(list) {
  bigg = -Infinity;
  for (let i = 0; i < list.length; i++) {
    bigg = max(bigg, list[i]);
  }

  return bigg;
}
