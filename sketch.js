let circles = [];
let drawings = [];
let circleDimension = 2;
let circleCount;
let circleSize;

function setup() {
  createCanvas(600, 600);
  circleCount = circleDimension * 2;
  circleSize = width / circleDimension / 4;
  initCircles();
  for (let i = 0; i < circleDimension * circleDimension; i++) {
    drawings.push(new Drawing());
  }
}

function draw() {
  background(0);
  for (let i = 0; i < circleCount; i++) {
    circles[i].render();
  }

  for (let d of drawings) {
    d.render();
  }

  drawDrawings();
}

function drawDrawings() {
  let counter = 0;
  for (let i = 0; i < circleDimension; i++) {
    for (let j = circleDimension; j < circleDimension * 2; j++) {
      let point = createVector(circles[i].pointX, circles[j].pointY);
      drawings[counter].points.push(point);
      clearCompletedDrawing();
      counter++;
    }
  }
}

function clearCompletedDrawing() {
  if (floor(circles[0].pointX) == floor(circles[0].x) && circles[0].pointY - circles[0].y < 0) {
    for (let d of drawings) {
      d.points = [];
    }
  }
  // if (circles[i].pointSpeed < circles[j].pointSpeed) {
  //   if (floor(circles[i].pointX) == floor(circles[i].x) && circles[i].pointY - circles[i].y < 0) {
  //     drawings[counter].points = [];
  //   }
  // } else if (circles[i].pointSpeed > circles[j].pointSpeed) {
  //   if (floor(circles[j].pointX) == floor(circles[j].x) && circles[j].pointY - circles[j].y < 0) {
  //     drawings[counter].points = [];
  //   }
  // } else if (circles[i].pointSpeed == circles[j].pointSpeed) {
  //   if (floor(circles[i].pointX) == floor(circles[i].x) && circles[i].pointY - circles[i].y < 0) {
  //     drawings[counter].points = [];
  //   }
  // }
}

function initCircles() {
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < circleCount / 2; i++) {
      switch (j) {
        case 0:
          circles[i] = new Circle((width - circleSize) / (circleCount / 2 + 1) * (i + 1) + circleSize, circleSize, circleSize, i + 1);
          circles[i].state = 1;
          break;
        case 1:
          circles[circleCount / 2 + i] = new Circle(circleSize, (height - circleSize) / (circleCount / 2 + 1) * (i + 1) + circles[0].y, circleSize, i + 1);
          circles[circleCount / 2 + i].state = 2;
          break;
      }
    }
  }
}