/* EXECÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
1-a) Ele testa se um número é par, vendo se a divisão do numero escolhido pelo usuario (um number) por 2 resta 0.
b) Para número pares.
c) Para numero impares.

2-a) É uma simulação de consulta de preço em um hortifruti.
b) O preço da fruta  Maçã  é  R$  2.25
c) O preço da fruta  Pêra  é  R$  5

3 - a) Está solicitando ao usuario um numero e convertendo o tipo em number.
b) Se o número for 10 aparecerá a mensagem "Esse número passou no teste". Se o número for -10 não aparecerá nada.
c) Não aparecerá a mensagem "Essa mensagem é secreta!!!" pois a variavel foi declarada dentro do if, quando sair a variável não conseguirá ser acessada.
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERCÍCIO 1

const idade = Number(prompt("Digite sua idade:"))

console.log(`Você tem ${idade} anos.`)
if (idade >= 18){
    console.log("1 - Você pode dirigir")
}else{
    console.log("1 - Você não pode dirigir.")
}

console.log("--------------------------------------")
// EXERCICIO 2

const turno = prompt("Digite o turno em que você estuda: M (Matutino) | V (Vespertino) | N (Noturno) ")

if (turno === "M"){
    console.log("2- Bom Dia!")
}else if (turno === "V"){
    console.log("2- Boa Tarde!")
}else{
    console.log("2- Boa Noite!")
}

console.log("--------------------------------------")

// EXERCÍCIO 3

const turno2 = prompt("Digite o turno em que você estuda: M (Matutino) | V (Vespertino) | N (Noturno) ")

switch (turno2){
    case 'M':
        console.log("3 - Bom Dia!")
        break
    case 'V':
        console.log("3 - Boa Tarde!")
        break
    case 'N':
        console.log("3 - Boa Noite!")
        break
    default:
        break
}

console.log("--------------------------------------")

// EXERCÍCIO 4

const genero = prompt("Qual o gênero do filme?")
const ingresso = Number(prompt("Qual o valor do ingresso?"))

if (genero === "fantasia" && ingresso < 15){
    console.log("4 - Bom filme!")
} else {
    console.log("4 - Escolha outro filme :(")
}

console.log("--------------DESAFIO---------------")

// EXERCICIO 1
const genero1 = prompt("Qual o gênero do filme?")
const ingresso1 = Number(prompt("Qual o valor do ingresso?"))

if (genero1 === "fantasia" && ingresso1 < 15){
    const lanchinho = prompt("Qual lanchinho você vai comprar?")
    console.log(" 1- Bom filme!")
    console.log(`Aproveite o seu ${lanchinho}.`)
} else {
    console.log("Escolha outro filme :(")
}


// EXERCICIO 2
const nomeCompleto = prompt("Digite seu nome completo:")
let tipoDeJogo = prompt("Digite o tipo de jogo: (IN) Internacional | (DO) Doméstico")
let etapaDoJogo = prompt("Digite a etapa do jogo: (SF) Semi-final | (DT) Decisão de terceiro lugar | (FI) final")
const categoria = Number(prompt("Digite a categoria: (1) (2) (3) (4)"))
const qntIngressos = Number(prompt("Digite a quantidade de ingressos que deseja comprar:"))
let valorDoIngresso
let valorTotal

function calcularIngressos (){
    switch(etapaDoJogo){
        case 'SF':

            switch (categoria){
                case 1:
                    valorDoIngresso = 1320
                    valorTotal = valorDoIngresso * qntIngressos
                    if (tipoDeJogo === "DO"){
                        return [valorDoIngresso,valorTotal]
                    }else if(tipoDeJogo === "IN"){
                        return [valorDoIngresso * 4.10,valorTotal * 4.10]
                    }else{
                        console.log("Opção Inválida")
                    }
                    break
                
                case 2:
                    valorDoIngresso = 880
                    valorTotal = valorDoIngresso * qntIngressos
                    if (tipoDeJogo === "DO"){
                        return [valorDoIngresso,valorTotal]
                    }else if(tipoDeJogo === "IN"){
                        return [valorDoIngresso * 4.10,valorTotal * 4.10]
                    }else{
                        console.log("Opção Inválida")
                    }
                    break
                case 3:
                    valorDoIngresso = 550
                    valorTotal = valorDoIngresso * qntIngressos
                    if (tipoDeJogo === "DO"){
                        return [valorDoIngresso,valorTotal]
                    }else if(tipoDeJogo === "IN"){
                        return [valorDoIngresso * 4.10,valorTotal * 4.10]
                    }else{
                        console.log("Opção Inválida")
                    }
                    break
                case 4:
                    valorDoIngresso = 220
                    valorTotal = valorDoIngresso * qntIngressos
                    if (tipoDeJogo === "DO"){
                        return [valorDoIngresso,valorTotal]
                    }else if(tipoDeJogo === "IN"){
                        return [valorDoIngresso * 4.10,valorTotal * 4.10]
                    }else{
                        console.log("Opção Inválida")
                    }
                    break
            }
            break

        case 'DT':

            switch (categoria){
                case 1:
                    valorDoIngresso = 660
                    valorTotal = valorDoIngresso * qntIngressos
                    if (tipoDeJogo === "DO"){
                        return [valorDoIngresso,valorTotal]
                    }else if(tipoDeJogo === "IN"){
                        return [valorDoIngresso * 4.10,valorTotal * 4.10]
                    }else{
                        console.log("Opção Inválida")
                    }
                    break
                
                case 2:
                    valorDoIngresso = 440
                    valorTotal = valorDoIngresso * qntIngressos
                    if (tipoDeJogo === "DO"){
                        return [valorDoIngresso,valorTotal]
                    }else if(tipoDeJogo === "IN"){
                        return [valorDoIngresso * 4.10,valorTotal * 4.10]
                    }else{
                        console.log("Opção Inválida")
                    }
                    break
                case 3:
                    valorDoIngresso = 330
                    valorTotal = valorDoIngresso * qntIngressos
                    if (tipoDeJogo === "DO"){
                        return [valorDoIngresso,valorTotal]
                    }else if(tipoDeJogo === "IN"){
                        return [valorDoIngresso * 4.10,valorTotal * 4.10]
                    }else{
                        console.log("Opção Inválida")
                    }
                    break
                case 4:
                    valorDoIngresso = 170
                    valorTotal = valorDoIngresso * qntIngressos
                    if (tipoDeJogo === "DO"){
                        return [valorDoIngresso,valorTotal]
                    }else if(tipoDeJogo === "IN"){
                        return [valorDoIngresso * 4.10,valorTotal * 4.10]
                    }else{
                        console.log("Opção Inválida")
                    }
                    break
            }
            break

        case 'FI':

            switch (categoria){
                case 1:
                    valorDoIngresso = 1980
                    valorTotal = valorDoIngresso * qntIngressos
                    if (tipoDeJogo === "DO"){
                        return [valorDoIngresso,valorTotal]
                    }else if(tipoDeJogo === "IN"){
                        return [valorDoIngresso * 4.10,valorTotal * 4.10]
                    }else{
                        console.log("Opção Inválida")
                    }
                    break
                
                case 2:
                    valorDoIngresso = 1320
                    valorTotal = valorDoIngresso * qntIngressos
                    if (tipoDeJogo === "DO"){
                        return [valorDoIngresso,valorTotal]
                    }else if(tipoDeJogo === "IN"){
                        return [valorDoIngresso * 4.10,valorTotal * 4.10]
                    }else{
                        console.log("Opção Inválida")
                    }
                    break
                case 3:
                    valorDoIngresso = 880
                    valorTotal = valorDoIngresso * qntIngressos
                    if (tipoDeJogo === "DO"){
                        return [valorDoIngresso,valorTotal]
                    }else if(tipoDeJogo === "IN"){
                        return [valorDoIngresso * 4.10,valorTotal * 4.10]
                    }else{
                        console.log("Opção Inválida")
                    }
                    break
                case 4:
                    valorDoIngresso = 330
                    valorTotal = valorDoIngresso * qntIngressos
                    if (tipoDeJogo === "DO"){
                        return [valorDoIngresso,valorTotal]
                    }else if(tipoDeJogo === "IN"){
                        return [valorDoIngresso * 4.10,valorTotal * 4.10]
                    }else{
                        console.log("Opção Inválida")
                    }
                    break
            }
            break
    }
}

const resultado = calcularIngressos()

if (etapaDoJogo === "SF"){
    etapaDoJogo = "Semifinais"
}else if (etapaDoJogo === "DT"){
    etapaDoJogo = "Decisão do 3ºlugar"
}else{
    etapaDoJogo = "Final"
}

if (tipoDeJogo === "DO"){
    tipoDeJogo = "Nacional"
}else{
    tipoDeJogo = "Internacional"
}

console.log("2- ---DADOS DA COMPRA---")
console.log(`Nome do cliente:  ${nomeCompleto}`)
console.log(`Tipo do jogo:  ${tipoDeJogo}`)
console.log(`Etapa do jogo:  ${etapaDoJogo}`)
console.log(`Categoria:  ${categoria}`)
console.log(`Quantidade de ingressos:  ${qntIngressos} ingressos`)
console.log("---Valores---")
console.log(`Valor do ingresso:  R$ ${resultado[0]}`)
console.log(`Valor total: R$ ${resultado[1]}`)