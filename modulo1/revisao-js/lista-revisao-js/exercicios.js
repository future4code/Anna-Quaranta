// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let meuArray = []
    for(let i = array.length - 1; i > -1; i--){
      meuArray.push(array[i])
    }
    array = []
    array = meuArray
    return array
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    // let myArray = []
    
    // for(let i = 0; i < array.length; i++){
    //   for (let j = 0; i < array.length; j++){
    //     if(array[i] < array[j]){
    //       myArray.push(array[i])
    //     }
    //   }
    // }
    
    // console.log(myArray)

    return array.sort()
}
// let array = [3,2,1,4,7]
// console.log(retornaArrayOrdenado(array))

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let myArray = []
  for(let i = 0; i < array.length; i++){
      if (array[i] % 2 === 0){
          myArray.push(array[i])
      }
  }
  array = []
  array = myArray
  return array
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    array = array.filter((elemento) =>{
        return elemento % 2 === 0
    }).map((elemento) =>{
        return elemento **2
    })
    
    return array

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for(let i = 0; i < array.length; i++){
        if (array[i] > maiorNumero){
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = 0
    let menorNumero = 0

    if (num1 > num2){
        maiorNumero = num1
        menorNumero = num2
    }else{
        maiorNumero = num2
        menorNumero = num1
    }

    return {maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: (maiorNumero % menorNumero === 0) === true,
    diferenca: maiorNumero - menorNumero}

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const nPrimeirosNumeros = []
    for(let i = 0; i < n*2; i+=2){
        nPrimeirosNumeros.push(i)
    }
    return nPrimeirosNumeros
}

console.log(retornaNPrimeirosPares(3))

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}