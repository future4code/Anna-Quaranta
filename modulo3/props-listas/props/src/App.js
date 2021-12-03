import React, { useState } from "react";
import Componente1 from "./components/Componente1";

// ATENÇÃO: abra o console aqui do code sandbox pra poder ver os valores das props!

// Nosso primeiro componente da aplicação é o App
// Ele sempre vai ser o pai de todo mundo
const App = () => {
  // Nele temos a informação do nome, guardada nesse estado
  const [nome, setNome] = useState("Letícia");

  // E temos uma função que atualiza esse nome também
  // Por hora ela não está sendo chamada em lugar nenhum
  const atualizaNome = () => {
    setNome("Letícia Chijo");
  };

  // No retorno deste componente, temos o Componente1
  // Isso faz com que o App seja pai do Componente1
  // Árvore: App => Componente1
  return (
    <div>
      {/* Aqui passamos a informação do nome ("Letícia") para dentro do Componente1 */}
      {/* O nome escolhido para esse dado foi: nomeQueEstavaNoApp */}
      <Componente1 nomeQueEstavaNoApp={nome} atualizaNome = {atualizaNome}/>
      {/* Entre agora no arquivo do Componente1 para vermos o que acontece */}
    </div>
  );
};

export default App;
