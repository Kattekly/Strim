1
function repeatString (str, repeat, border) {
    return (str + border).repeat(repeat)
}

console.log(repeatString("yo", 3, " "))
console.log(repeatString("yo", 3, ","))

2
function checkStart (str, startStr) {
const string = str.toLowerCase().indexOf(startStr.toLowerCase())
    if (string >= 0) {
        return true
    }
    else return false
}

console.log(checkStart("Incubator", "inc"))
console.log(checkStart("Incubator", "yo"))

3
function truncateString (str, num) {
return str.slice(0, num) + "..."
}

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

4
function getMinLengthWord (str) {
    if (str === '') {
        return null
    }
    else
        return (str.split(' ').sort((a,b) => a.length - b.length))[0]
}

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
console.log(getMinLengthWord(""))

5
function setUpperCase (str) {
    let row = str.toLowerCase()
    return row.split(' ').map((el) => {
        return el[0].toUpperCase() + el.slice(1)
    }) .join(" ")
}

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

6
function isIncludes (str, minStr) {
    let a = str.toLowerCase()
    let b = minStr.toLowerCase()
    let i, j
    for(i = 0; i < str.length; ++i) {
        for(j = i + 1; j < minStr.length; ++j) {
            if(str[i] === minStr[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(isIncludes("Incubator", "Cut"))