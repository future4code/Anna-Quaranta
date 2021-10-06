// // /* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// // 1.  a. indefined
// //     b. null
// //     c. 11
// //     d. 3
// //     e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// //     f. 9

// //     2. SUBI NUM ÔNIBUS EM MIRROCOS,27
// // */

// // EXERCÍCIOS DE ESCRITA DE CÓDIGO
// // EXECÍCIO 1
const nomeDoUsuario = prompt("1- Digite seu nome:")
const emailDoUsuario = prompt("Digite seu email:")
console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)
console.log("---------------------------------------")
// //EXERCÍCIO 2
const comidasFavoritas = ["Camarão","Churrasco","Frutas","Kibe","Pizza de Chocolate"]

console.log("2-a)", comidasFavoritas)
console.log(`b) Essas são as minhas comidas preferidas: ${comidasFavoritas[0]},${comidasFavoritas[1]},${comidasFavoritas[2]},${comidasFavoritas[3]},${comidasFavoritas[4]},`)
const comidaFavoritaUsuario = prompt("Qual a sua comida favorita:")
comidasFavoritas[1] = comidaFavoritaUsuario
console.log("c)",comidasFavoritas)
console.log("---------------------------------------")
// //EXERCÍCIO 3
let listaDeTarefas = []
console.log("3-a)", listaDeTarefas)
const tarefa1 = prompt("Digite uma tarefa para guardar na lista:")
listaDeTarefas.push(tarefa1)
const tarefa2 = prompt("Digite uma segunda tarefa para guardar na lista:")
listaDeTarefas.push(tarefa2)
const tarefa3 = prompt("Digite uma terceira tarefa para guardar na lista:")
listaDeTarefas.push(tarefa3)
console.log("c)",listaDeTarefas)
const tarefaRealizada = Number(prompt("Digite o índice de uma tarefa que já realizou (0,1,2):"))
listaDeTarefas.splice(tarefaRealizada,1)
console.log("f)",listaDeTarefas)
console.log("---------------------------------------")
console.log("-----------------DESAFIO---------------")

// Exercicio 1
const frase = prompt("Escreva uma frase:")
const arrayDaFrase = frase.split(" ")
console.log("1-",frase)
console.log(arrayDaFrase)

// Exercicio 2
const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log("2-",array.indexOf("Abacaxi"),",", array.length)