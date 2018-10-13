class Circle {

  constructor(posX, posY, circleSize, angleSpeed) {
    this.x = posX;
    this.y = posY;
    this.size = circleSize;
    this.state = 0;
    this.angle = 0;
    this.pointX;
    this.pointY;
    this.pointSpeed = angleSpeed;
  }

  render() {
    noFill();
    strokeWeight(2);
    stroke(255);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size);

    this.pointX = this.x + this.size / 2 * cos(this.angle - HALF_PI);
    this.pointY = this.y + this.size / 2 * sin(this.angle - HALF_PI);

    fill(255, 0, 0);
    noStroke();
    ellipse(this.pointX, this.pointY, this.size / 6);
    this.angle += 0.01 * this.pointSpeed;

    strokeWeight(0.5);
    stroke(255, 0, 0);
    switch (this.state) {
      case 1:
        line(this.pointX, this.pointY, this.pointX, this.pointY + height);
        break;
      case 2:
        line(this.pointX, this.pointY, this.pointX + width, this.pointY);
        break;
    }
  }
}