const inquirer = require('inquirer')
const deptArray = []; // Empty array for list of Departments
const questions = () => {
    
    return inquirer.prompt([
        {
            type: 'list',
            name: 'start-list',
            message: 'Welcome to Efficient Branch Manager. Please make a selection.',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee','Update an Employee Role'],
            default: 'View All Departments'
        }
    ])
.then((answers) => {
    switch (answers) {
        case "Add a Department":
            newDept();
            break;
    }
})
};

const newDept = () => {
    return inquirer.prompt([
        {
                type: 'input',
                name: 'add-dept-name',
                message: 'What is the name of the Department?',
                default: 'Department Name TBD'
        }
    ])
};

questions()
.then(answers => {
console.log(answers)
});