function renderLicenseBadge(license) {}

function renderLicenseLink(license) {}

function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)](https://opensource.org/licenses/${data.license})
${data.license === 'Other' ? data.otherLicense : ''}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

GitHub: ${data.github}
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
