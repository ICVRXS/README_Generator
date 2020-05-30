function generateMarkdown(data) {
  let fileContent = "";
  if (!data.projectName){
    fileContent += "# My Project";
    return fileContent;
    // return "You must enter a name for your project.";
  }else{
    fileContent += generateTitle(data.projectName);
    return fileContent;
  }

  function generateTitle(data){
    return `# ${data}`
  }
}

//   ${data.projectDesc}

// # Table of Contents
//   * Installation
//   * Usage
//   * Licenses
//   * Contributing
//   * Testing
//   * FAQ

// # Installation
//   ${data.projectInstall}

// # Usage
//   ${data.projectUsage}

// # Licensing
//   ${data.projectLicense}

// # Contributors
//   ${data.projectContribute}

// # Testing
//   ${data.projectTest}

// # FAQ
//   ${data.projectFaq}

// `;
// }

module.exports = generateMarkdown;
