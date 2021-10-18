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
   for (let i = 0; i < 2 ; i++){
   usuario.push(comprarCarta())
   computador.push(comprarCarta())
   }
   while (usuario[0].valor + usuario[1].valor === 22 || computador[0].valor + computador[1].valor === 22){
      usuario = []
      computador = []
      for (let i = 0; i < 2 ; i++){
         usuario.push(comprarCarta())
         computador.push(comprarCarta())
      }
      }

   let somaCartasUsuario = usuario[0].valor + usuario[1].valor
   let somaCartasComputador = computador[0].valor + computador[1].valor

      
   let cartasDoUsuario = usuario.map((carta) =>{
      return carta.texto
   })
      
   while (somaCartasUsuario < 21 || confirm === true){
      if(confirm(`Suas cartas são ${cartasDoUsuario.join(" ")}. A carta revelada do computador é ${computador[0].texto}.
Deseja comprar mais uma carta?`) || somaCartasUsuario < 21) {
         usuario.push(comprarCarta())
         computador.push(comprarCarta())
      }else{
         
      }
     

   }

        

      
}else{
   console.log("O jogo acabou")}