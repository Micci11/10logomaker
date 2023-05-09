import inquirer from 'inquirer';
import fs from 'fs';

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo text:',
    validate: (value) => (value.length <= 3 ? true : 'Please enter up to three characters.'),
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (color keyword or hexadecimal number):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (color keyword or hexadecimal number):',
  },
];

function generateSvg(answers) {
  const { text, textColor, shape, shapeColor } = answers;
  const shapeSvg = {
    circle: `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`,
    triangle: `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`,
    square: `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`,
  };

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
  ${shapeSvg[shape]}
  <text x="150" y="100" text-anchor="middle" font-size="24" fill="${textColor}">${text}</text>
</svg>`;
}

function saveSvgFile(svgContent) {
  fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const svgContent = generateSvg(answers);
    saveSvgFile(svgContent);
  });
}

init();
