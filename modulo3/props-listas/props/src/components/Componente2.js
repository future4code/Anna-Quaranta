import React from "react";
import Componente3 from "./Componente3";

// ATENÇÃO: abra o console aqui do code sandbox pra poder ver os valores das props!

// Como esse componente vai receber informações do Componente1, declaramos
// as props aqui       \/
const Componente2 = (props) => {
  console.log("Props componente 2: ", props);
  // No console.log, você verá que o objeto props possui uma propriedade
  // Essa propriedade se chama nomeQueEstavaNoUm (o nome que escolhemos!)
  // E o seu valor atual é "Letícia" (info que estava lá no estado do App)

  // Dessa vez, ao invés de guardar o dado em uma variável, vamos passá-lo
  // diretamente para o Componente3, que é filho do Componente2
  // Árvore: App => Componente1 => Componente2 => Componente3

  return (
    <div>
      {/* Novamente escolhemos um nome e disponibilizamos a informação */}
      {/* Assim o componente3 vai ter acesso à string do nome "Letícia", que veio do App até aqui! */}
      <Componente3 nomeQueEstavaNoDois={props.nomeQueEstavaNoUm} atualizaNome = {props.atualizaNome} />
      {/* Entre agora no arquivo do Componente3 para vermos o que acontece */}
    </div>
  );
};

export default Componente2;
