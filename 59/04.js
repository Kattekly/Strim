

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
    [todoListId2]: [{id: "15", title: "bluat", isDone: false},
        {id: "243", title: "aass", isDone: false},
        {id: "1509", title: "llll", isDone: false}],
        ["user name"]: "Bob"
}
console.log([...tasks[todoListId1], {id: "14", title: "REDAX", isDone: false}])
console.log(tasks[todoListId1].find(t => t.id === "21"))
console.log(tasks[todoListId1][2].title)
console.log(tasks[todoListId1][2]["title"])
console.log(tasks[todoList[1]["id"]][0].title)

const number = [1, 2, 3, 4 ,5]
console.log(number.reduce((acc, el)=> {
    return acc + el
}, 0)) // сумма всех элементов массива

console.log(number.reduce((acc, el) => acc > el ? acc: el)) // max

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 25,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc: el)) // вывести ученика с самым большим баллом

console.log(students.reduce((acc, el) => {
    const updateStydent = {...el, scores: el.scores + 10}
    acc.push(updateStydent)
    return acc
},[])) // вместо мапа, + 10 каждому ученику

console.log(students.reduce((acc, el) => {
    if(el.scores >= 100) {
        acc.push(el)
    }
    return acc
}, [])) //вместо фильтра. ученики у кого больше 100 баллов

const sts = {
    "Bob": {
        age: 22,
        isMarried: true,
        scores: 85
    },
    "Alex": {
        age: 21,
        isMarried: true,
        scores: 89
    }
}
console.log(students.reduce((acc, el) => {
    acc[el.name] = {...el}
    delete acc[el.name].name
    return acc
}, {}))