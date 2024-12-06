// Homework 1

let phoneQuantity = 30
let phonePrice = 119.95
let taxRate = 0.05

let totalPriceBeforeTax = phoneQuantity * phonePrice

let totalPriceAfterTax = totalPriceBeforeTax * taxRate

let totalAmount = totalPriceBeforeTax + totalPriceAfterTax

console.log('Total Price: $' + totalAmount)

// Homework 2

let userInput = parseInt(prompt("Enter Year"))

let zodiacCalculation = (userInput - 4) % 12


console.log(`Your Year: ${userInput}`)

switch (zodiacCalculation) {
    case 0:
        console.log('Rat')
        break
    case 3:
        console.log('Rabbit')
        break
    case 6:
        console.log('Horse')
        break
    case 9:
        console.log('Rooster')
        break
    case 1:
        console.log('Ox')
        break
    case 4:
        console.log('Dragon')
        break
    case 7:
        console.log('Goat')
        break
    case 10:
        console.log('Dog')
        break
    case 2:
        console.log('Tiger')
        break
    case 5:
        console.log('Snake')
        break
    case 8:
        console.log('Monkey')
        break
    case 11:
        console.log('Pig')
    default:
        console.log('Invalid Input!')
}