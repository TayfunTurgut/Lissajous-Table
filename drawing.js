class Drawing {

  constructor() {
    this.points = [];
  }

  render() {
    noFill();
    strokeWeight(1);
    stroke(255);
    beginShape();
    for (let p of this.points) {
      vertex(p.x, p.y);
    }
    endShape();
  }
}