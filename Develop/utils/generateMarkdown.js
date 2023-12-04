// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ""
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-orange.svg)`
  }

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// Create a function that returns the license link/license section of README
// Clicking on the license badge will take the user to the license link
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "MIT") {
    return `MIT [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if(license === "Mozilla") {
    return `Mozilla [![License](https://img.shields.io/badge/License-Mozilla-black.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if(license === "IBM") {
    return `IBM [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/license/ibmpl-php/)`
  } else if (license === "Apache") {
    return `Apache [![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if(license === "BSD") {
    return `BSD [![License](https://img.shields.io/badge/License-BSD_3--Clause-pink.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === "None") {
    return ""
  }
};

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license)
  const licenseSection = renderLicenseSection(data.license)

  return `
# ${data.title}
${licenseBadge}

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Installations](#installations)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Usage
${data.usage}

## Installations
${data.installation}

## Credits
${data.credits}

## License
${licenseSection}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
- Link to my GitHub: ${data.github_profile}
- You can reach me at ${data.email}
`
};

module.exports = generateMarkdown;