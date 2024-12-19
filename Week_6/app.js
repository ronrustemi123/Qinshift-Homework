function findNum(type, array) {
    let tempArr = []
    if (type === 'odd') {
        for (let i = 0; i <= array.length - 1; i++) {
            if (array[i] % 2 !== 0) {
                tempArr.push(array[i])
            }
        }
    } else {
        for (let i = 0; i <= array.length - 1; i++) {
            if (array[i] % 2 === 0) {
                tempArr.push(array[i])
            }
        }
    }

    console.log(tempArr)
}

findNum('even', [1, 3, 6, 8, 54, 3])