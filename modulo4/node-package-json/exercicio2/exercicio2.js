//Exercício 2

var red, blue, reset;

red = '\u001b[31m';
blue = '\u001b[34m';
reset = '\u001b[0m';

const op = process.argv[2]
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])

if (!process.argv[3] || !process.argv[4]) {
    console.log(red + "Esperava receber mais de um parâmetro!")
} else {
    switch (op) {
        case 'add':
            console.log(blue + (number1 + number2))
            break
        case 'sub':
            console.log(blue + (number1 - number2))
            break
        case 'mult':
            console.log(blue + (number1 * number2))
            break
        case 'div':
            console.log(blue + (number1 / number2))
            break
    }
}
