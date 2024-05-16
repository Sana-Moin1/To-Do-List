#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string [] =[];
let conditions=true;

// Print welcome message
console.log(chalk.bold.rgb(204, 204, 204)(`\n \t\t <<<=========================================================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204 )(("\t\ Welcome to \'Code with Sana Moin\'- To Do Aplication\n")));
console.log(chalk.bold.rgb(204, 204, 204 )(`\t\t <<<==================================================================>>> \n`));

//while(conditions)
// let addTask = await inquirer.prompt([
// {
//      name: "task",
//     type: "input",
//     message: chalk.green ("Enter your New Task :")
// }
// ]);

// todoList.push(addTask.task);
// console.log(`${addTask.task} task added in Todo-list sucessfully`);

// let addmoretask = await inquirer.prompt([
// {
//     name: "addmore",
//     type: "confirm",
//     message: "Do you want to add more task?",
//     default: "false",
// }
// ]);

// conditions = addmoretask.addmore
// }
// console.log("You updated Todo-list:",todoList);
 
let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
{
     name:"choice",
 type:"list",
 message: "Select an option you want to do:",
 choices: ["Addtask","Deletetask","Updatetask","Viewtodolist", "Exit"], 

}
]);
if(option.choice ==="Addtask"){
await addtask()
}

else if(option.choice ==="Deletetask"){
    await deletetask()
}
else if(option.choice  ==="Updatetask"){
    await Updatetask()
}
else if (option.choice ==="Viewtodolist"){
    await viewtask()
}
    
else if (option.choice ==="Exit"){
    conditions= false;
    }
    
}
}
// Functions to add new task to the list
let addtask= async() => {
    let newtask= await inquirer.prompt ([
        {
            name: "task",
            type:"input",
            message:"Enter your new task:"
        }
    ]);

    todoList.push(newtask.task);
console.log(`\n {newtask.task} task added sucessfully in the todo list\n`);
}
// Function to view all to do list task
let viewtask =() =>{
    console.log("\n Your to do list: \n");
    todoList.forEach((task,index) => {
        console.log(`${index+1}: ${task}`)
   });
   console.log("\n");
}
// function to delate a task from the list
let deletetask = async() =>{
    await viewtask()
    let taskindex = await inquirer.prompt([
        {
            name: "index",
            type:" number",
            message: "Enter index number of your task you want to delete:",
        }
    ]);
    let deletetask= todoList.splice (taskindex.index -1,1);
    console.log(`\n ${deletetask} this task has been successfully deletd from your todolist`);

        }
// function to updatetask
let Updatetask = async()=> {
    await viewtask()
    let updatetaskindex = await inquirer.prompt ([
{
    name :"index",
    type:"number",
    messsage: "Enter the index no of the task you want to Update:",
},
{
    name:"newtask",
    type:"input",
message:"Now enter newtask name:",
}
]);
todoList[updatetaskindex.index -1]= updatetaskindex.newtask
console.log(`\n task at index no. ${updatetaskindex.index -1} updated successfully(for up dated list check option:" view to do-list"]')
)`)
}
main();