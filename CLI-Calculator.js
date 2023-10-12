import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "Num1",
        message: "Enter First Number: "
    },
    {
        type: "number",
        name: "Num2",
        message: "Enter Second Number: "
    },
    {
        type: "list",
        name: "operator",
        message: "Select the operator you want to perform: ",
        choices: ['Add', 'Subtract', "Multiply", "Divide"]
    },
]);
let result;
switch (answer.operator) {
    case 'Add':
        result = answer.Num1 + answer.Num2;
        console.log("The answer for addition is: " + result);
        break;
    case 'Subtract':
        result = answer.Num1 - answer.Num2;
        console.log("The answer for Substractoin is: " + result);
        break;
    case 'Multiply':
        result = answer.Num1 * answer.Num2;
        console.log("The answer for Multiplication is: " + result);
        break;
    case 'Divide':
        result = answer.Num1 / answer.Num2;
        console.log("The answer for Division is: " + result);
        break;
}
