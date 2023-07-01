function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}


function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Usage](#usage)
* [Installation](#installation)
* [License](#license)
* [Testing](#testing)
* [Questions](#questions)
## Usage:
${data.usage}
## Installation
${data.installation}
## License
${data.license}
## Contributors
${data.contribution}
## Testing
${data.test}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;