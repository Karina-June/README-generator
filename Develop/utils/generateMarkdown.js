// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  } else if (license === "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
  } else if (license === "Mozilla Public") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]"
  } else if (license === "None") {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)"
  } else if (license === "GNU") {
    return "(https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === "Mozilla Public") {
    return "(https://opensource.org/licenses/MPL-2.0)"
  } else if (license === "None") {
    return ""
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license) + renderLicenseLink(license)

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const sections = answers.sections.map(section => `## ${section} \n`);
  //console.log(sections);
  let dataString = `# ${answers.name} 
${renderLicenseSection(answers.license)}
### ${answers.github}
### ${answers.email}
`
  sections.forEach(element => {
    dataString = dataString + element;
  });

  console.log(dataString);
  return dataString
}

module.exports = generateMarkdown;
