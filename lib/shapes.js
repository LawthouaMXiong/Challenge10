class Shape {
  constructor(shapeColor, characters, characterColor) {
    this.shapeColor = shapeColor;
    this.characters = characters;
    this.characterColor = characterColor;
  }
  setColor(color) {
    this.shapeColor = color;
  }

  renderLogo() {
    return `<svg height="250" width="450" xmlns="http://www.w3.org/2000/svg">${this.render()}<text x="150" y="125" font-size="50" text-anchor="middle" fill="${
      this.characterColor
    }">${this.characters}</text></svg>`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor, characters, characterColor) {
    super(shapeColor, characters, characterColor);
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

class Circle extends Shape {
  constructor(shapeColor, characters, characterColor) {
    super(shapeColor, characters, characterColor);
  }

  render() {
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  constructor(shapeColor, characters, characterColor) {
    super(shapeColor, characters, characterColor);
  }

  render() {
    return `<rect x="50" height="200" width="200" fill="${this.shapeColor}" />`;
  }
}

module.exports = { Triangle, Circle, Square };
