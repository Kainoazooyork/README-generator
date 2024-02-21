const inquirer = require('inquirer');
const fs = require('fs');
inquirer.prompt([
    {
        message: "What is the title of the project?", 
        name: "title",


    },
    {
        message: "What is the description of the project?",
        name: "description",
    }, {
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "installation",
    },
    {
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        
    },

    {
        name: "credits",
        message: "List your collaborators",
    },

    {
        name: "license",
        message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
        

    },
    {
        name: 'features',
        message: "If your project has a lot of features, list them here.",
    }

]).then(answers => {
    fs.writeFileSync('newREADME.md', `
# ${answers.title}

## Description
    
${answers.description}  


   
    
## Table of Contents (Optional)
    
    If your README is long, add a table of contents to make it easy for users to find what they need.
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
## Installation
    
${answers.installation}
## Usage
${answers.usage}    
    
    
    
## Credits
    
${answers.credits}    

## License

${answers.license}
    
    
    
    
    🏆 
    
## Badges
    

    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    
## Features
    
${answers.features}    

    `)
})
