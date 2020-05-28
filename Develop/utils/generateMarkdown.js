function generateMarkdown(data) {
  return `# ${data.projectName}
  ${data.projectDesc}

# Table of Contents
  * Installation
  * Usage
  * Licenses
  * Contributing
  * Testing
  * FAQ

# Installation
  ${data.projectInstall}

# Usage
  ${data.projectUsage}

# Licensing
  ${data.projectLicense}

# Contributors
  ${data.projectContribute}

# Testing
  ${data.projectTest}

# FAQ
  ${data.projectFaq}

`;
}

module.exports = generateMarkdown;
