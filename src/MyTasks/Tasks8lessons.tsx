// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    let newSum = nums.reduce((acc, el) => {
        return acc + el
    }, 0)
    return newSum
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a > b + c) {
        return "00"
    } else if (a === b && b === c) {
        return "10"
    } else if (a === b || b === c) {
        return "01"
    } else if (a != b && b != c) {
        return "11"
    } else return "00"
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let statrtSum = 0
    let sum = String(number)
    for (let i = 0; i < sum.length; i++) statrtSum += Number(sum[i]);
    return statrtSum
}

// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let sum1 = 0
    let sum2 = 0
    let num = arr
    //четные
    for (let i = 1; i < num.length; i++) {
        if (i % 2 == 0) {
            sum1 += num[i]
        }
    }
    //нечетные
    for (let i = 1; i < num.length; i++) {
        if (i % 2 != 0) {
            sum2 += num[i]
        }
    }
    if (sum1 > sum2) {
        return true
    } else return false
}
console.log(isEvenIndexSumGreater([1, 2, 3, 7]))

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    let copy = [...array]
    let copy2 = []
    for (let i = 0; i < copy.length; i++) {
        if (i>= 0) {
            copy2.push(copy[i])
        }
    }
    return copy2
}

console.log(getSquarePositiveIntegers([1, 2, -3]))
/*copy.filter(el => el > 0 && el%1 == 0).map(el => el*2)*/


// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    let sum = 0
    for (let i = 0; i <= N; i++) {
        sum += i
    }
    return sum
}

console.log(sumFirstNumbers(4))
// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let money = []
    if (amountOfMoney > banknotes[0]) {
        amountOfMoney - banknotes[0]
        money.push(banknotes[0])
    }

    return money
}