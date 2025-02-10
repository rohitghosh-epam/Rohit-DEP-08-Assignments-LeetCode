/*

    Description:
    You have an array of task objects. Each task has a taskName, a completed status (boolean), and a priority (numerical value where lower numbers indicate higher priority). Your tasks are:

    1. find: Identify the first task with a high priority (for example, priority less than 3).
    2. findIndex: Find the index of the first task that is not completed.
    3. reduce: Count how many tasks have been completed.
    4. (forEach): Print all task names.

    const tasks = [   { taskName: "Write report", completed: true, priority: 2 },   { taskName: "Attend meeting", completed: false, priority: 3 },   { taskName: "Fix bug", completed: false, priority: 1 },   { taskName: "Update website", completed: true, priority: 4 } ];

*/

const tasks = [   
    { taskName: "Write report", completed: true, priority: 2 },   
    { taskName: "Attend meeting", completed: false, priority: 3 },   
    { taskName: "Fix bug", completed: false, priority: 1 },   
    { taskName: "Update website", completed: true, priority: 4 } 
];

const highPriorityTask = tasks.find(task => task.priority < 3);
console.log("\nHigh Priority Task:", highPriorityTask);

const firstIncompleteTaskIndex = tasks.findIndex(task => !task.completed);
console.log("\nIndex of First Incomplete Task:", firstIncompleteTaskIndex);

const completedTaskCount = tasks.reduce((count, task) => {
    return task.completed ? count + 1 : count;
}, 0);
console.log("\nNumber of Completed Tasks:", completedTaskCount);

console.log("\nTask Names:");
tasks.forEach(task => console.log(task.taskName));