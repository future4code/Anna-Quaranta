/*
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:
1 -10 5
2 - 10 10 10
3 - Ele pergunta quantas horas trabalha e quanto você recebe por dia e mostra em  uma janelimha quanto você trabalha por hora fazendo uma divisão de salario diario por quantidade de horas trabalhadas. O melhor nome para p seria horasTrabalhadasPorDia e para t seria salarioDiario.
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO:

//1
let nome;
let idade;
console.log(typeof nome, typeof idade) // foi impresso undefined pois não houve valor definido.

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")
console.log(typeof nome, typeof idade) // agora o valor das duas variáveis são strings
console.log("Olá",nome,", você tem",idade,"anos.")

//2 
const pergunta1 = "Você está bem?"
const pergunta2 = "Você gosta de dias frios?"
const pergunta3 = "Você gosta de ler livros de aventura?"
const resposta1 = "SIM"
const resposta2 = "SIM"
const resposta3 = "SIM"

console.log(pergunta1,resposta1)
console.log(pergunta2,resposta2)
console.log(pergunta3,resposta3)

//3
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
let c = a
a = b
b = c
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//DESAFIO
const numero1 = Number(prompt("Digite o primeiro número:"))
const numero2 = Number(prompt("Digite o segundo número:"))
console.log("1. O primeiro número somado ao segundo número resulta em:",numero1+numero2,".")
console.log("2. O primeiro número multiplicado pelo segundo número resulta em:",numero1*numero2,".")
