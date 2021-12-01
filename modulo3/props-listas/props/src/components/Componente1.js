import React from "react";
import Componente2 from "./Componente2";

// ATENÇÃO: abra o console aqui do code sandbox pra poder ver os valores das props!

// Aqui dentro, precisamos sinalizar que esse nosso componente receberá informações
// Para isso, basta colocar o parâmetro props na declaração do Componente1
//             Assim   \/
const Componente1 = (props) => {
  // Para entender melhor o que está acontecendo, você sempre pode dar um console.log
  console.log("Props componente 1: ", props);

  // No console.log, você verá que o objeto props possui uma propriedade
  // Essa propriedade se chama nomeQueEstavaNoApp (o nome que escolhemos!)
  // E o seu valor atual é "Letícia" (info que estava lá no estado)

  // Podemos acessar essa informação e fazer o que quisermos com ela
  // No caso, vou guardar em uma variável:
  const nome = props.nomeQueEstavaNoApp;

  // Agora podemos observar que, dentro do Componente1, temos o Componente2
  // Isso faz com que o Componente1 seja pai do Componente2
  // Árvore: App => Componente1 => Componente2

  // Vamos passar a informação do nome para dentro do Componente2
  return (
    <div>
      {/* Podemos escolher qualquer nome para a propriedade novamente! */}
      {/* Nesse caso, escolhi nomeQueEstavaNoUm e enviei a informação que guardamos na variável nome, ali na linha 18 */}
      <Componente2 nomeQueEstavaNoUm={nome} atualizaNome = {props.atualizaNome}/>
      {/* Entre agora no arquivo do Componente2 para vermos o que acontece */}
    </div>
  );
};

export default Componente1;
