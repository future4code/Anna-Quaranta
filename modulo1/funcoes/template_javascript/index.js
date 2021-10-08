/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
1-a) 10,50
b) Ele ia retornar o valor mas não ia ser impresso nada.

2- a) Ele recebe uma frase como argumento, modifica para letras minusculas e procura saber se existe a palavra "cenoura", retornando true ou false.

b) true , false, true
-------------------------------------------------------
EXERCÍCIOS DE ESCRITA DE CÓDIGO:
*/
//EXERCICIO 1
function imprimirFatosSobreMim(){
    console.log(`1-a) Eu sou Isabella, tenho 20 anos, moro no Rio de Janeiro e sou estudante.`)
}
imprimirFatosSobreMim()



function fatosSobreUsuario (nome,idade,endereco,profissao){
    const frase = `b) Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`
    return frase
}
const nome = prompt("Digite seu nome:")
const idade = Number(prompt("Digite sua idade:"))
const endereco = prompt("Digite a cidade em que mora:")
const profissao = prompt("Digite sua profissão:")

console.log(fatosSobreUsuario(nome,idade,endereco,profissao))

console.log("-------------------------")

// EXERCÍCIO 2

function soma(numero1,numero2){
    return numero1 + numero2
}
const numero1 = Number(prompt("Digite o primeiro número:"))
const numero2 = Number(prompt("Digite o segundo número:"))
console.log(`2-a) ${numero1} + ${numero2} =`,soma(numero1,numero2))



function maiorOuIgual (x,y){
    return x>=y
}

const x = Number(prompt("Digite o primeiro número:"))
const y = Number(prompt("Digite o segundo número:"))
console.log(`b) ${x} é maior que ${y}?`,maiorOuIgual(x,y))



function parOuNao (numero){
    const resultado = numero % 2 === 0
    return resultado
}

const numero = Number(prompt("Digite um número:"))
console.log(`c) O número ${numero} é par?`, parOuNao(numero))



function imprimirString(string){
    console.log("d) Sua frase é:", string)
    console.log("Tamanho:", string.length)
    console.log("Letras Maiusculas:", string.toUpperCase())
}

const string = "A turma Carver é a melhor!"
imprimirString(string)

console.log("-------------------------")
//EXERCICIO 3

function somarNumeros (valor1,valor2){
    return valor1 + valor2
}

function subtrairNumeros (valor1,valor2){
    return valor1 - valor2
}

function multiplicarNumeros (valor1,valor2){
    return valor1 * valor2
}

function dividirNumeros (valor1,valor2){
    return valor1 / valor2
}

const valor1 = Number(prompt("Digite um valor:"))
const valor2 = Number(prompt("Digite outro valor:"))
console.log(`3 - Números inseridos: ${valor1} e ${valor2}`)
console.log("Soma:", somarNumeros(valor1,valor2))
console.log("Diferença:", subtrairNumeros(valor1,valor2))
console.log("Multiplicação:", multiplicarNumeros(valor1,valor2))
console.log("Divisão:", dividirNumeros(valor1,valor2))

console.log("DESAFIO -------------------------------")
//EXERCÍCIO 1

const arrow = (a) => {
    console.log(a)
}
arrow("1-a) Primeiro teste com Arrow Function")

let somarValores = (a,b) => {
    console.log(`b) A soma de ${a} e ${b} é:`)
    arrow(a+b)
}
somarValores(5,5)


console.log("-------------------------")
//EXERCÍCIO 2

function executarTeoremaDePitagoras (cateto1,cateto2){
    const hipotenusa = Math.sqrt((cateto1**2) + (cateto2**2))
    return hipotenusa
}

console.log("2) A hipotenusa do triângulo com catetos 3 e 4, de acordo com o Teorema de Pitágoras é:", executarTeoremaDePitagoras(3,4))