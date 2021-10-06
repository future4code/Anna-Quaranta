/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1- a. false
b. false
c. true
d. boolean

2. Como o resultado do prompt vai ser sempre uma string, ele, ao invés de somar, concatenou as duas strings, que será impresso no console.

3. Para consertar o problema da questão interior teria que colocar o Number() na frente do prompt, convertendo string para number.
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
console.log("Exercício 1")
let idadeDoUsuario = Number(prompt("Digite sua idade:"))
let idadeDoMelhorAmigo = Number(prompt("Digite a idade de seu melhor amigo:"))
const comparacao = idadeDoUsuario>idadeDoMelhorAmigo

console.log("Sua idade:", idadeDoUsuario)
console.log("Idade do seu melhor amigo:", idadeDoMelhorAmigo)

console.log("Sua idade é maior do que a do seu melhor amigo?", comparacao)
console.log("A diferença de idade de vocês é de:",idadeDoUsuario-idadeDoMelhorAmigo,"ano(s).")

console.log("-----------------------------------")
console.log("Exercício 2")
let par = Number(prompt("Insira um numero par:"))

console.log("O resto da divisão de",par,"por 2 é:", par%2,".")
// sempre que um número é par o resto da divisão é 0, e quando é impar o resto da divisão é 1.

console.log("-----------------------------------")
console.log("Exercício 3")

let anos = Number(prompt("Quantos anos você tem?"))
const meses = anos * 12
const dias = meses * 30
const horas = dias * 24

console.log("Sua idade em anos é:", anos)
console.log("Sua idade em meses é:", meses)
console.log("Sua idade em dias é:", dias)
console.log("Sua idade em horas é:", horas)

console.log("-----------------------------------")
console.log("Exercício 4")

let numero1 = Number(prompt("Digite um número:"))
let numero2 = Number(prompt("Digite outro número:"))
console.log("Primeiro número:", numero1)
console.log("Segundo número:", numero2)
console.log("O primeiro numero é maior que segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo numero é divisível pelo primeiro?", numero2 % numero1 === 0)

console.log("-----------------------------------")
//Sessão de DESAFIOS
console.log("DESAFIO")
//Exercicio 1
let resultado = (77-32)*(5/9) + 273.15
console.log("1) a) 77ºF em Kelvin:", resultado)

resultado = 80*(9/5) + 32
console.log("b) 88ºC em Fahrenheit:", resultado)

resultado = 30*(9/5) + 32
console.log("c) 30ºC em Fahrenheit:", resultado)

resultado = (resultado-32)*(5/9) + 273.15
console.log("30ºC em Kelvin:", resultado)

const valorUsuario = Number(prompt("Digite um valor em Celsius:"))
resultado = valorUsuario*(9/5) + 32
console.log("d)",valorUsuario,"ºC em Fahrenheit:", resultado)
resultado = (resultado-32)*(5/9) + 273.15
console.log(valorUsuario,"ºC em Kelvin:", resultado)

console.log("-----------------------------------")
// Exercicio 2
let quantidadeDeQW = Number(prompt("Qual a quantidade de quilowatts consumida:"))
console.log("2)a) O valor a ser pago por",quantidadeDeQW,"quilowatt-hora é de:", quantidadeDeQW*0.05)

quantidadeDeQW = Number(prompt("Qual a quantidade de quilowatts consumida:"))
const desconto = Number(prompt("Qual é a porcentagem de desconto:"))
const total = quantidadeDeQW*0.05
console.log("b) O valor a ser pago por",quantidadeDeQW,"quilowatt-hora com desconto de",desconto,"% é de:",total-((total*15)/100))

console.log("-----------------------------------")
// Exercicio 3

console.log("3)a) 20lb equivalem a",20/2.205,"kg.")
console.log("b) 10.5oz equivalem a",10.5/35.274,"kg.")
console.log("c) 100mi equivalem a",100*1609
,"m.")
console.log("d) 50ft equivalem a",50/3.281
,"m.")
console.log("e) 103.56gal equivalem a",103.56*3.785,"l.")
console.log("f) 100mi equivalem a",100*1609
,"m.")
console.log("d) 50ft equivalem a",50/3.281
,"m.")
let respostaUsuario = Number(prompt("Digite o número que você quer fazer a conversão de pés para metros:"))
console.log("e)",respostaUsuario,"ft equivalem a",respostaUsuario/3.281
,"m.")