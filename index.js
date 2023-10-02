const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./Lib/shapes');

async function generateLogo() {
  // Prompt the user for input
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hex code):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hex code):',
    },
  ]);

  // Create the selected shape object and set its color
  let shape;
  switch (userInput.shape) {
    case 'Circle':
      shape = new Circle();
      break;
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Square':
      shape = new Square();
      break;
  }
  shape.setColor(userInput.shapeColor);

  // Create the SVG content
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shape.render()}
      <text x="20" y="160" fill="${userInput.textColor}">${userInput.text}</text>
    </svg>
  `;

  // Save the SVG content to a file named logo.svg
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

// Call the generateLogo function to start the application
generateLogo();
