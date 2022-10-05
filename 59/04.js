const todoListId1 = "1"
const todoListId2 = "2"

const todoList = [
    {
        id: todoListId1,
        title: "What to learn",
        filter: "all",
        tasks: []
    },
    {
        id: todoListId2,
        title: "What to buy",
        filter: "all",
        tasks: []
    }
]

const tasks = {
    [todoListId1]:
        [{id: "21", title: "Rer", isDone: false},
        {id: "23", title: "oooo", isDone: false},
        {id: "109", title: "ddd", isDone: false}
    ],
    [todoListId2]: [{id: "15", title: "ffff", isDone: false},
        {id: "243", title: "aass", isDone: false},
        {id: "1509", title: "llll", isDone: false}],
        ["user name"]: "Bob"
}
console.log([...tasks[todoListId1], {id: "14", title: "REDAX", isDone: false}])
console.log(tasks[todoListId1].find(t => t.id === "21"))