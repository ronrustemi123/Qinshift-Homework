// 1

let str = 'Hi'
let num = 1
let bool = true
let arr = ['123', 1, true]
let und = undefined
let nll = null
let nan = NaN
let obj = {
    name: 'arst',
    age: 123
}

// console.log(str)
// console.log(num)
// console.log(bool)
// console.log(arr)
// console.log(und)
// console.log(nll)
// console.log(obj)
// console.log(nan)

// 2

function findTheLongestStr(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > result.length) {
            result = arr[i]
        }
    }
    console.log(result)
}

findTheLongestStr(['apple', 'pear', 'banana', 'pineapple', 'cherry'])


// 3

function getDifference(num) {
    let diff = num - 13
    if (num > 13) {
        return diff * 2
    } else {
        return diff
    }
}

console.log(getDifference(100))

// 4

function closerTo100(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        alert("Can't have negative numbers")
        return
    }
    let diff1 = (100 - num1)
    let diff2 = (100 - num2)
    if (diff1 < 0) {
        diff1 * -1
    }
    if (diff2 < 0) {
        diff2 * -1
    }

    if (diff1 > diff2) {
        return num2
    } else {
        return num1
    }
}

console.log(`${closerTo100(30, 101)} is closer to 100`)

// 5 


function totalExpenses(name, salary, rent, bills) {
    let expenses = rent + bills
    let amountLeft = salary - (rent + bills)
    console.log(name + ' Expenses ' + expenses)
    console.log(name + ' Amount Left ' + amountLeft)
}

totalExpenses('Boris', 10000000, 300, 300)

// 6 

function avgNums(arr) {
    let sum = 0
    let avg;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    avg = sum / arr.length
    return avg
}

function avgStudentGrade(student, arr) {
    console.log(`${student} Average: ${avgNums(arr)}`)
    if (avgNums(arr) > 8) {
        console.log(`${student} has passed the semester`)
    } else {
        console.log(`${student} has failed the semester`)
    }
}

avgStudentGrade('Arthur', [10, 6, 8, 9, 6])


// 7 

function removeFalsy(arr) {
    let tempArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            tempArr.push(arr[i])
        }

    }
    console.log(tempArr)
}

removeFalsy([1, 2, 5, 'nice', NaN, null, '', false])

// 8 

function findTheSmallestNum(arr) {
    let result = arr[0];
    for (num of arr) {
        if (num < result) {
            result = num
        }
    }
    return result
}

console.log(findTheSmallestNum([3, 5, 2, 10, 4, 3, 10, 1, 19, 23, 3]))

// 9

function generateArr(len, divisor) {
    let arr = []
    for (let i = 0; i <= len; i++) {
        if (i % divisor !== 0) {
            arr.push(i)

        } else {
            arr.push(i * 10)

        }
    }
    return arr
}

console.log(generateArr(3000, 7))

// 10

function finalBoss(arr) {
    let numObj = {
        sumEven: 0,
        countEven: 0,
        sumOdd: 0,
        countOdd: 0
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            numObj.sumEven += arr[i]
            numObj.countEven += 1
        } else {
            numObj.sumOdd += arr[i]
            numObj.countOdd += 1
        }
    }
    return numObj
}

console.log(finalBoss([1, 32, 5, 323, 12, 13, 23, 24]))