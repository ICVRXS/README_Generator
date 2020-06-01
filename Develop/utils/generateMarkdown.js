function generateMarkdown(data) {
//Generate Title
  let fileContent = "";
  if (!data.projectName){
    fileContent += "# My Project";
    return fileContent;
  }else{
    fileContent += generateTitle(data.projectName);
  }

  function generateTitle(data){
    return `# ${data}`
  }

//Generate Description
  if (!data.projectDesc){
    fileContent += `
    My Project`;
    return fileContent;
  }else{
    fileContent += generateDesc(data.projectDesc);
  }

  function generateDesc(data){
    return `
    ${data}`
  }

//Generate Installation
  if (!data.projectInstall){
    fileContent += `
    `;
    return fileContent;
  }else{
    fileContent += generateInstall(data.projectInstall);
  }

  function generateInstall(data){
    return `

# Installation
    ${data}`
  }

//Generate Usage
  if (!data.projectUsage){
    fileContent += `
    `;
    return fileContent;
  }else{
    fileContent += generateUsage(data.projectUsage);
  }

  function generateUsage(data){
    return `

# Usage
    ${data}`
  }

//Generate License
  if (!data.projectLicense){
    fileContent += `
    `;
    return fileContent;
  }else{
    fileContent += generateLicense(data.projectLicense);
  }

  function generateLicense(data){
    return `

# License
    ${data}`
  }

//Generate Contributors
  if (!data.projectContribute){
    fileContent += `
    `;
    return fileContent;
  }else{
    fileContent += generateContributors(data.projectContribute);
  }

  function generateContributors(data){
    return `

# Contribute
    ${data}`
  }

//Generate Tests
  if (!data.projectTest){
    fileContent += `
    `;
    return fileContent;
  }else{
    fileContent += generateTest(data.projectTest);
  }

  function generateTest(data){
    return `

# Tests
    ${data}`
  }

//Generate FAQ
  if (!data.projectFaq){
    fileContent += `
    `;
    return fileContent;
  }else{
    fileContent += generateFaq(data.projectFaq);
  }

  function generateFaq(data){
    return `

# FAQs
    ${data}`
  }

  return fileContent;

}

module.exports = generateMarkdown;
