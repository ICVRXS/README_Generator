function generateMarkdown(data) {
  return `
  # ${data.projectName} [![GitHub Badge](https://img.shields.io/badge/Made_By-${data.githubName}-<COLOR>.svg)](https://github.com/${data.githubName}/)

  ---
  ${data.projectDesc}

  # Table of Contents
  ---
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Licensing](#Licensing)
  * [Contributors](#Contributors)
  * [Testing](#Testing)
  * [FAQ](#FAQ)

  # Installation
  ---
  ${data.projectInstall}

  # Usage
  ---
  ${data.projectUsage}

  # Licensing
  ---
  ${data.projectLicense}

  # Contributors
  ---
  ${data.projectContribute}

  # Testing
  ---
  ${data.projectTest}

  # FAQ
  ---
  ${data.projectFaq}
  `;
}


module.exports = generateMarkdown;
