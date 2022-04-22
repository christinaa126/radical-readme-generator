// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
const generateMarkdown = ({ title, description, installation, usage, credits, license, badges, features, contribution, test, github, email }) =>
`#${title}

## Description

${description}

## Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges] (#badges)
- [Features] (#features)
- [Contribution] (#contribution)
- [Test] (#test)
- [Questions] (#questions)

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${license}

## Badges

${badges}

## Features

${features}

##Contribution

${contribution}

##Test

${test}

##Questions
<a href= "https://github.com/${github}">Link to my Github profile.</a>
If you have any questions, I can be reached by email at: ${email}


`;

module.exports = generateMarkdown;
