/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
    1 - vai ser impresso o objeto, o indice do array respectivo, e o array com todos os objetos. Isso vai se repetir três vezes, uma vez para cada objeto

    2 - ["Amanda Rangel","Laís Petra","Letícia Chijo"]
    3 - [{ nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" }]

*/

//EXERCÍCIO DE ESCRITA DE CÓDIGO

//EXERCICIO 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomeDosBichinhos = pets.map((pet) => {
     return pet.nome
 })
 console.log(nomeDosBichinhos)

 const apenasCachorrosSalsichas = pets.filter((pet) =>{
     return pet.raca === "Salsicha"
 })

 console.log(apenasCachorrosSalsichas)

 const cupomParaOsPoodles = pets.filter((pet) =>{
     return pet.raca === "Poodle"
 }).map((pet) => {
     return (`Você ganhou um cupom de desconto de 10% para rosar o/a ${pet.nome}!`)
 })

 console.log(cupomParaOsPoodles)

 console.log("--------------------------------------------")

 // EXERCÍCIO 2

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 const nomeDeCadaItem = produtos.map((produto) =>{
     return produto.nome
 })

 console.log(nomeDeCadaItem)


const arrayDeObjetoComDesconto =  produtos.map((produto) =>{
    return {nome: produto.nome, preco: (produto.preco - (produto.preco*5/100)).toFixed(2)}
})

console.log(arrayDeObjetoComDesconto)

const arrayDeBebidas = produtos.filter((produto) =>{
    return produto.categoria === "Bebidas"
})

console.log(arrayDeBebidas)

const arrayDeObjetosComYpe = produtos.filter((produto) =>{
    return produto.nome.includes("Ypê")
})

console.log(arrayDeObjetosComYpe)

const fraseComObjetosComYpe = produtos.filter((produto) =>{
    return produto.nome.includes("Ypê")
}).map((produto) =>{
    return (`Compre ${produto.nome} por R$${produto.preco}`)
})

console.log(fraseComObjetosComYpe)

// -----------------------------------------------------------------------------

//DESAFIO
console.log("--------------------------------------------")
console.log("------- DESAFIO -------")
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 const nomesPokemonOrdemAlfabetica = pokemons.map((pokemon) =>{
    return pokemon.nome
 })

 nomesPokemonOrdemAlfabetica.sort()
 console.log(nomesPokemonOrdemAlfabetica)

 let tiposDePokemons = pokemons.map((pokemon) =>{
     return pokemon.tipo
 })

 tiposDePokemons = [...new Set(tiposDePokemons)]

 console.log(tiposDePokemons)