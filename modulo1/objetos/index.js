/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
1-a) Matheus Nachtergaele
b) Virginia Cavendish
c) canal: "Canal Brasil", horario: "19h"

2- a) nome: "Juca", 
	idade: 3, 
	raca: "SRD"

    nome: "Juba", 
	idade: 3, 
	raca: "SRD"

    nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
     
    b) Copia aquele objeto para que seja moldado sem modificar o original

3- a) false e undefined
b) O valor undefined foi exposto pq não há nenhuma propriedade com o nome altura, logo retornando o valor undefined (indefinido).

EXERCÍCIOS DE ESCRITA DE CÓDIGO
*/
// EXERCICIO 1

const pessoa = {
    nome: "Isabella",
    apelidos:["Bella","Bellinha","Bel"]
}

function imprimirMensagemObjeto (objeto){
    console.log(`1- Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]}, ${objeto.apelidos[2]}.`)
}

imprimirMensagemObjeto(pessoa)

const nova_pessoa = {
    ...pessoa,
    apelidos: ["Isa","Bibela","Bebella"]
}

imprimirMensagemObjeto(nova_pessoa)
console.log("------------------------------------------")

//EXERCICIO 2

const pessoa1 = {
    nome: "Isabella",
    idade: 20,
    profissao: "Desenvolvedora"
}
const pessoa2 = {
    nome: "Yago",
    idade: 26,
    profissao: "Desenvolvedor"
}

function receberObjeto (pessoa){
    const resultado = [pessoa.nome,pessoa.nome.length,pessoa.idade,pessoa.profissao,pessoa.profissao.length] 
    return resultado
}

console.log("2-",receberObjeto(pessoa1))
console.log(receberObjeto(pessoa2))

console.log("------------------------------------------")

//EXERCICIO 3

let carrinho = []
const fruta1 = {
    nome: "Maçã",
    disponiblidade:true
}
const fruta2 = {
    ...fruta1,
    nome: "Banana"
}
const fruta3 = {
    ...fruta1,
    nome: "Laranja"
}

function adicionarAoCarrinho (fruta){
    carrinho.push(fruta)
}

adicionarAoCarrinho(fruta1)
adicionarAoCarrinho(fruta2)
adicionarAoCarrinho(fruta3)
console.log(carrinho)

console.log("------------------------------------------")

console.log("--------------DESAFIO----------------")
//EXERCICIO 1
function criandoUmObjeto (){
    const objeto = {
        nome: prompt("Digite seu nome:"),
        profissao: prompt("DIgite sua profissão:"),
        idade: prompt("Digite sua idade:")
    }
    console.log("1-", objeto)
    console.log(typeof objeto)
}
criandoUmObjeto()
console.log("------------------------------------------")
//EXERCICIO  2
const filme1 = {
    nome: "Cinderela",
    anoDeLancamento: 1950  
}
const filme2 = {
    nome: "Branca de Neve e os sete anões",
    anoDeLancamento: 1937
}
function filmesComparacao (filme1,filme2){
    console.log("2 - Primeiro filme:",filme1)
    console.log("Segundo filme:",filme2)
    console.log("O primeiro filme foi lançado antes do segundo:", filme1.anoDeLancamento < filme2.anoDeLancamento)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo:", filme1.anoDeLancamento === filme2.anoDeLancamento)
}
filmesComparacao(filme1,filme2)

console.log("------------------------------------------")

// EXERCICIO 3
function inverterDisponibilidade (fruta){
    fruta.disponiblidade = false
    return fruta
}

console.log("3-",inverterDisponibilidade(fruta1))