const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  it("should generate triangle SVG", () => {
    const triangle = new Triangle();
    triangle.setColor("orange");
    expect(triangle.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="orange" />'
    );
  });
});

describe("Circle", () => {
  it("should generate circle SVG", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual(
      `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue" />`
    );
  });
});

describe("Square", () => {
  it("should generate square SVG", () => {
    const square = new Square();
    square.setColor("yellow");
    expect(square.render()).toEqual(
      `<rect x="50" height="200" width="200" fill="yellow" />`
    );
  });
});