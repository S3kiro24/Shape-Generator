const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./Lib/shapes');
const path = require('path');

async function generateLogo() {
  try {
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

    // Specify the absolute path for the output file
    const outputPath = path.join(__dirname, 'logo.svg');

    // Save the SVG content to the file
    fs.writeFileSync(outputPath, svgContent);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error generating logo:', error);
  }
}

// Call the generateLogo function to start the application
generateLogo();
