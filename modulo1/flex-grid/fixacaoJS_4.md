# EXERCÍCIO DE FIXAÇÃO DE JAVASCRIPT 4

```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  if(numeroEscolhido !== 3){
    if (arrayDeNumeros.indexOf(numeroEscolhido) !== -1){
      const contaOcorrencias = arrayDeNumeros.filter((numero) =>{
      	return numero === numeroEscolhido
      })
      return `O número ${numeroEscolhido} aparece ${contaOcorrencias.length}x`
    }else{
      return "Número não encontrado"
    }
   
  }else{
    return "Número não encontrado"
  }
}
```