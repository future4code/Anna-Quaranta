import React, { useEffect, useState } from "react";
import ExercicioNumeros from "./ExercicioNumeros";
import ExercicioObjetos from "./ExercicioObjetos";
import "./styles.css";

// Uma lista é só um monte de itens parecidos agrupados!
// Esses itens podem ser de vários tipos diferentes.
// Abaixo encontramos vamos ver um exemplo de lista de strings:

// Lista de frutas que quero comprar na feira
const frutas = ["banana", "caqui", "carambola", "mamão"];

const App = () => {
  // Quando estamos no React, é comum colocar essas informações de lista do ESTADO
  // Isso porque quando o estado muda, a tela é atualizada automaticamente
  // E se adicionarmos/editarmos/removermos um item da lista, a informação atualizada aparecerá na tela
  const [frutasFeira, setFrutasFeira] = useState(frutas);

  // Para entendermos direitinho o que está guardado no estado, sempre podemos dar um console.log!
  // Podemos colocar esses console.logs dentro de um useEffect com as dependências corretas
  // Assim, sempre que o estado terminar de ser atualizado, veremos no console o valor correto
  useEffect(() => {
    console.log("Frutas da Feira", frutasFeira);
  }, [frutasFeira]);

  // Agora vamos treinar fazer a manipulação desses arrays!
  // Vamos adicionar e remover itens de cada um deles

  const adicionarFruta = (novaFruta) => {
    // Primeiro, criamos uma cópia do estado atual
    const copiaFrutas = [...frutasFeira];

    // Depois, adicionamos a nossa nova fruta
    copiaFrutas.push(novaFruta);

    // Poderíamos ter feito esses dois passos de uma vez! Ficaria assim:
    // const copiaFrutas = [...frutasFeira, novaFruta]

    // Agora podemos atualizar o estado com essa nossa cópia atualizada!
    setFrutasFeira(copiaFrutas);

    // Para testar essa função, clique no botão "Adicionar Fruta"
    // Você verá pelo console que a fruta "abacate" foi adicionada na lista
  };

  // Agora vamos para a função de deletar
  // Temos duas maneiras de fazer isso: com a função filter (mais direto) e com a splice
  // Veremmos os dois exemplos, começando pelo splice

  const deletarFrutaSplice = (frutaParaDeletar) => {
    // Para deletar um item da lista, primeiro eu preciso saber qual item é o que eu quero deletar!
    // Receberemos isso através do parâmetro frutaParaDeletar e então precisamos encontrar essa fruta na nossa lista

    // Começamos criando uma cópia do estado
    const copiaFrutas = [...frutasFeira];

    // Agora vamos encontrar o índice do item que a gente quer deletar
    const index = copiaFrutas.findIndex((fruta) => {
      return fruta === frutaParaDeletar;
    });

    // Se a fruta não existia na lista, não temos como deletá-la!
    // Quando isso acontece, a função findIndex retorna -1
    if (index !== -1) {
      // Então caso a fruta tenha sido encontrada, vamos deletá-la com splice
      copiaFrutas.splice(index, 1);
      setFrutasFeira(copiaFrutas);
    }

    // Para testar essa função, clique no botão "Remover Fruta SPLICE"
    // Você verá pelo console que a fruta "carambola" foi removida da lista
  };

  // Agora vamos ver o segundo método de deletar usando filter
  const deletarFrutaFilter = (frutaParaDeletar) => {
    // Da mesma forma que no anterior, eu preciso saber qual fruta eu devo deletar (frutaParaDeletar)
    // Como a função filter retorna um NOVO ARRAY, não há necessidade de criar uma cópia!
    // Ela já faz isso para a gente e só precisamos guardar o novo array numa variável

    const copiaFrutas = frutasFeira.filter((fruta) => {
      // A linha de baixo vai colocando no novo array todas as frutas
      // Menos a fruta que deve ser deletada!
      return fruta !== frutaParaDeletar;
    });

    // E prontinho! Temos nosso array com todas as frutas MENOS aquela que não queremos mais
    // Agora é só guardar isso no estado
    setFrutasFeira(copiaFrutas);

    // Para testar essa função, clique no botão "Remover Fruta FILTER"
    // Você verá pelo console que a fruta "caqui" foi removida da lista
  };

  return (
    <div>
      <button onClick={() => adicionarFruta("abacate")}>Adicionar Fruta</button>
      <button onClick={() => deletarFrutaSplice("carambola")}>
        Remover Fruta SPLICE
      </button>
      <button onClick={() => deletarFrutaFilter("caqui")}>
        Remover Fruta FILTER
      </button>

      <hr />
      {/* Muito bem! Agora entre no arquivo ExercicioNumeros */}
      <ExercicioNumeros />

      <hr />
      <ExercicioObjetos />
    </div>
  );
};

export default App;
