import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First number", types: "number", name: "firstNumber" },
    { message: "Enter Second number", types: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Power"],
    },
]);
// condition 
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtracton") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Power") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else {
    console.log("Please select a valid Number");
}
