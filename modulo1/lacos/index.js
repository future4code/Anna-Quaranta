/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1- ele está somando os valores de 0 a 4 e imprimindo o resultado da soma

2- a) 19 21 23 25 27 30
b) Não, pois ele está acessando implicitamente os indices. Pra acessar explicitamente é necessario a formação padrão do for (let i = 0; i < lista.length; i++)

3 - *
    **
    ***
    ****
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//EXERCICIO 1

console.log("ATIVIDADE DE ESTRUTURAS DE REPETIÇÃO:")

let bichinhosdeEstimacao = Number(prompt("Quando bichinhos de estimação você tem?"))
console.log("1 - Número de bichinhos:", bichinhosdeEstimacao)

if (bichinhosdeEstimacao === 0){
    console.log("Que pena! Você pode adotar um pet!")

}else if (bichinhosdeEstimacao > 0){
    const arrayDeBichinhos = []
    for (let i = 0; i < bichinhosdeEstimacao; i++){ //pergunta nome por nome dos bichinhos
        let nomeDoBichinho = prompt(`Digite o nome do seu ${i+1} º bichinho:`)
        arrayDeBichinhos.push(nomeDoBichinho) // guarda num array
    }

    console.log(arrayDeBichinhos)

}else{
    console.log("Número inválido!")
}


//EXERCÍCIO 2

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//LETRA A
const imprimirCadaValor = (arrayOriginal) => {
    console.log("--------O EXERCÍCIO 2 - LETRA A--------")
    for (let numero of arrayOriginal){
        console.log(numero)
    }
}


// LETRA B
const imprimirCadaValorDividoPor10 = (arrayOriginal) => {
    console.log("--------O EXERCÍCIO 2 - LETRA B--------")
    for (let numero of arrayOriginal){
        console.log(numero/10)
    }
}


// LETRA C
const criarArrayPar = (arrayOriginal) => {
    console.log("--------O EXERCÍCIO 2 - LETRA C--------")
    const novoArray = []

    for (let numero of arrayOriginal){
        if (numero % 2 === 0){
            novoArray.push(numero)
        }
    }
    console.log(novoArray)
}


//LETRA D
const arrayDeStrings = (novoArray) => {
    const arrayDeStrings = []
    console.log("--------O EXERCÍCIO 2 - LETRA D--------")
    for (let i = 0; i < novoArray.length ; i++){
        arrayDeStrings.push(`O elemento do índex ${i} é: ${novoArray[i]}`)
    }
    console.log(arrayDeStrings)
}


//LETRA E
const imprimirMaiorEMenor = (novoArray) => {
    let maiorNumero = [0]
    let menorNumero = novoArray[0]

    for(numero of novoArray) {

        if (numero>maiorNumero){
            maiorNumero = numero
        }else if (numero < menorNumero){
            menorNumero = numero
        }
    }

    console.log(`--------O EXERCÍCIO 2 - LETRA E--------`)
    console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}.`)
}

//--------------------------------------------------------- chamada das funções
imprimirCadaValor(arrayOriginal)
imprimirCadaValorDividoPor10(arrayOriginal)
criarArrayPar(arrayOriginal)
arrayDeStrings(arrayOriginal)
imprimirMaiorEMenor(arrayOriginal)


// -----------------------------------------------------------DESAFIO
//EXERCICIO 1

console.log("------JOGUINHO DA ADIVINHAÇÃO------")
console.log("VAMOS JOGAR")

const numeroSorteado = Math.floor((Math.random()*100))
console.log("O número sorteado foi:",numeroSorteado)
let chuteJogador2
let tentativas = 0

while (chuteJogador2 !== numeroSorteado){
    chuteJogador2 = Number(prompt(`JOGADOR Nº2, CHUTE UM NÚMERO:
Boa sorte, Jogador 2!`))
    console.log("O número chutado foi:",chuteJogador2)
    if (chuteJogador2 > numeroSorteado){
        console.log("Agora foi demais! O número escolhido é menor...Pode menos!")
    }else if (chuteJogador2 < numeroSorteado) {
        console.log("ERRRRROU!! O número escolhido é maior..Pode pá!")
    }
    tentativas+=1
}

console.log(`ACERTOOOU...ATÉ QUE ENFIM MEU CABRA!
O número de tentativas foi: ${tentativas}.`) 

// Exercício 2 - Foi um tanto difícil de entender a lingugagem técnica. Poderia ter estudado mais antes.


