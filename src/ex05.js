/* Ecrivez un script calculator.js qui effectue en ligne de commane des opérations arithmétiques simples: 
% node calculator.js + 10 21
31
% node calculator.js - 10 1
9
% node calculator.js * 5 4
20
% node calculator.js / 10 2
5
*/

const add = (n1, n2) => n1 + n2
const sub = (n1, n2) => n1 - n2
const mul = (n1, n2) => n1 * n2
const div = (n1, n2) => n1 / n2

const calculator = (sign, n1, n2) => {
    switch (sign) {
        case '+':
            return console.log(add(n1, n2))
        case '-':
            return console.log(sub(n1, n2))
        case '*':
            return console.log(mul(n1, n2))
        case '/':
            return console.log(div(n1, n2))
        default:
            console.log('Error : unknown operator')
    }
}

if (process.argv.length != 5) {
    // s'il n'y a pas 3 éléments dans la ligne de commande,
    console.log(`usage: node calculator.js sign nb1 nb2`) // explique le fonctionnement puis
    process.exit(1) // exit the program with code status 1
}

if (isNaN(process.argv[3])) {
    console.log(`Error: ${process.argv[3]} is not a number.`)
    process.exit(1)
}

if (isNaN(process.argv[4])) {
    console.log(`Error: ${process.argv[4]} is not a number.`)
    process.exit(1)
}

const sign = process.argv[2]
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])

calculator(sign, n1, n2)
