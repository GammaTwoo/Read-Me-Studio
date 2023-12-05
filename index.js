const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

//put it inside its own function for code thats a bit nicer
function promptUser() { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the project title:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the project description:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your application:',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'Other'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contribution guidelines:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
    ]);
}


// creates a file, writes the answers into it, and then puts it in a dist folder
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
    console.log('README.md had been successfully generated!')
}

//begins the process of generating the readme
async function init() {
    try {
        const userResponses = await promptUser()
        const markdown = generateMarkdown(userResponses)
        writeToFile('dist/README.md', markdown)
    // just in case something goes wrong
    } catch (error) {
        console.error('Error generating README', error)
    }
}

init();
