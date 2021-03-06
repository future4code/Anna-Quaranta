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
    return array.sort((a, b) => a - b )
}


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

// console.log(retornaNPrimeirosPares(3))

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let tipoDoTriangulo
    if (ladoA === ladoB && ladoB === ladoC){
        tipoDoTriangulo = "Equilátero"
    }else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
        tipoDoTriangulo = "Escaleno"
    }else{
        tipoDoTriangulo = "Isósceles"
    }
    return tipoDoTriangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort()
    console.log(array)
    if (array[0] > array[array.length-2]){
        array.splice(array.length,0,array[0])
        array.shift()
    }

    return [array[array.length-2], array[1]]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}



// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {...pessoa, nome: "ANÔNIMO"}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasPermitidas = pessoas.filter((pessoas) =>{
        return pessoas.altura>=1.5 && pessoas.idade>14 && pessoas.idade<60
    })
    return pessoasPermitidas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNãoPermitidas = pessoas.filter((pessoas) =>{
        return pessoas.altura<1.5 || pessoas.idade<=14 || pessoas.idade>60
    })

    return pessoasNãoPermitidas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
    contas = contas.map((cliente) =>{
        let totalDeCompras = 0
        for (valor of cliente.compras){
            totalDeCompras += valor
        }
        return {...cliente, saldoTotal: (cliente.saldoTotal - totalDeCompras), compras: []}
    })
    
    return contas
    

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}