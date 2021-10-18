/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let usuario = []
let computador = [] 

console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")){
   for (let i=0; i<2; i++){
      usuario.push(comprarCarta());
      computador.push(comprarCarta())
   }

   const valorUsuario = usuario[0].valor + usuario[1].valor
   const valorComputador = computador[0].valor + computador[1].valor

   console.log(`Usuário - cartas: ${usuario[0].texto} ${usuario[1].texto} - ${valorUsuario}`)
   
   console.log(`Computador - cartas: ${computador[0].texto} ${computador[1].texto} - ${valorComputador}`)
 

   if(valorUsuario > valorComputador){
      console.log("O usuário ganhou!")
   }else if (valorUsuario < valorComputador){
      console.log("O computador ganhou!")
   }else{
      console.log("Empate!")
   }

}else{
   console.log("O jogo acabou")
}

//


