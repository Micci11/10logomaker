# 10logomaker

The 10logomaker is a command-line application that generates a basic logo SVG file based on user input. The application allows users to specify text (up to three characters), text color (either a keyword or a hexadecimal number), a shape (circle, triangle, or square), and the shape's color (either a keyword or a hexadecimal number).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description 

This project is built for freelance web developers who want to generate simple logos for their projects, thereby avoiding the cost of hiring a graphic designer. The generated logo is a 300x200 pixel SVG file that can be opened in any web browser.

## Installation

To install this application, make sure you have Node.js and npm installed on your system. Then follow these steps:

1. Clone the repository to your local system.
2. Navigate to the directory where you cloned the repository in your command line.
3. Run the command `npm install` to install all necessary dependencies.

## Usage

After installation, you can run the application from the command line with the command `node index.js`. 

You will be prompted to enter:
- Text (up to three characters)
- Text color (either a color keyword or a hexadecimal number)
- A shape (choose from circle, triangle, or square)
- Shape color (either a color keyword or a hexadecimal number)

Upon completion, a file called `logo.svg` will be created in the current directory. You will also see the output text "Generated logo.svg" in the command line.

Open `logo.svg` file in a web browser to view your logo.

## Contributing 

Contributions to the Simple Logo Generator are always welcome. If you have any ideas or suggestions, feel free to open an issue or make a pull request.

## Questions

For any questions or feedback, please open an issue on the GitHub repository.

## Credits

This project uses the following packages:

- Inquirer: For capturing user input.
- fs: For writing the SVG file.
- Colors: For handling color inputs.

