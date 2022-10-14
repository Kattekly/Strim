const num = [1, 56, 89, 234, 0, 911, -45, -690]
const compare = (a, b) => b-a
console.log(num.sort(compare))

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

const ages = students.sort((a, b) => a.age - b.age)
console.log(ages)
const names = students.sort((a,b) => a.name.localeCompare(b.name))
console.log(names)

// сортировка пузырьком

const numbers = [0, 4 , 46, 89, 23, 5, 27]
for (let j = 0; j < numbers.length-1; j++) {
    let isSorted = true;
    for (let i = 0; i < numbers.length-1-j; i++) {
        if (numbers[i] > numbers[i+1]) {
            isSorted = false;
            [numbers[i], numbers[i+1]] = [numbers[i+1], numbers[i]]
        }
    }
    if(isSorted)break
}
console.log(numbers)
