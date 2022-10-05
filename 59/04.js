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
    [todoListId1]: [],
    [todoListId2]: [],
        ["user name"]: "Bob"
}
console.log(tasks["user name"])