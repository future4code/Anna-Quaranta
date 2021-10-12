// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura do retângulo:"))
  const largura = Number(prompt("Digite a largura do retângulo:"))
  console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoDeNascimento = Number(prompt("Digite o seu ano de Nascimento:"))
  console.log(anoAtual-anoDeNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return (peso/(altura**2))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite seu nome:")
  const idade = prompt("Digite sua idade:")
  const email = prompt("Digite seu email:")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const array = []
  const salvarCoresFavoritas = () =>{
    const cor = prompt("Digite uma cor favorita:")
    array.push(cor)
  } 
  salvarCoresFavoritas()
  salvarCoresFavoritas()
  salvarCoresFavoritas()
  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso  

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length-1]
  array[0] = ultimoElemento
  array[array.length-1] = primeiroElemento
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Ano atual:"))
  const anoNasc = Number(prompt("Ano de Nascimento:"))
  const emissaoCarteira = Number(prompt("Ano que o seu RG foi emitido:"))
  const idade = anoAtual-anoNasc
  const condicao1 = idade <=20 && anoAtual - emissaoCarteira >= 5 //prestar atenção nessa ultima condição
  console.log(condicao1)
  const condicao2 = idade>20 && idade <=50 && anoAtual - emissaoCarteira >= 10
  console.log(condicao2)
  const condicao3 = idade>50 && anoAtual - emissaoCarteira >= 15
  console.log(condicao3)

    console.log(condicao1 || condicao2 || condicao3) 
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const divisivelPor4 = ano%4===0
  const naoDivisivelPor100 = ano%100 !== 0
  const divisivelPor400 = ano%400===0
  return divisivelPor400 || divisivelPor4 && naoDivisivelPor100 && !divisivelPor400

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você tem disponibilidade exclusiva durante os horários do curso?")
  
  const condicao1 = idade === "sim"
  const condicao2 = ensinoMedio === "sim"
  const condicao3 = disponibilidade === "sim"
  const resultado = condicao1 && condicao2 && condicao3
  console.log(resultado)
}