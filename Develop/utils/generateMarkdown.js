function generateMarkdown(data) {
  return ` # ${data.projectName}
  
  ${data.projectDesc}

`;
}

module.exports = generateMarkdown;
