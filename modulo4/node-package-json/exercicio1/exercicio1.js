// Exercício 1 -
// a) Usa o process.argv

// b)

var red, blue, reset;

red = '\u001b[31m';
blue = '\u001b[34m';
reset = '\u001b[0m';

if (!process.argv[3]) {
    console.log(red + "Esperava 2 parâmetros só recebi um.")
} else {
    const name = process.argv[2]
    const age = Number(process.argv[3])

    console.log(blue + `Olá, ${name}! Você tem ${age} anos.`)

    // c)
    console.log(blue + `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}`)
}

