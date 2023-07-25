const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./shapes");

const logoQuestions = [
  {
    type: "input",
    name: "characters",
    message: "Enter up to 3 characters for your logo:",
  },
  {
    type: "input",
    name: "characterColor",
    message: "Enter your color for your characters (OR a hexadecimal number)",
  },
  {
    type: "list",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
    message: "What shape do you want your logo to be:",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter your color for your shape (OR a hexadecimal number)",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log("Error generating file:", err)
      : console.log("Successfully created logo!")
  );
}

class CLI {
  constructor() {
    this.title = "";
  }
  start() {
    return inquirer
      .prompt(logoQuestions)
      .then(({ characters, characterColor, shape, shapeColor }) => {
        let logo;
        if (shape === "Triangle") {
          logo = new Triangle(shapeColor, characters, characterColor);
        } else if (shape === "Circle") {
          logo = new Circle(shapeColor, characters, characterColor);
        } else if (shape === "Square") {
          logo = new Square(shapeColor, characters, characterColor);
        }
        writeToFile("logo.svg", logo.renderLogo());
        this.title = 'LOGO!'
      });
  }
}

module.exports = CLI