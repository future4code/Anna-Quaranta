import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  border: solid black 1px;
  width: 200px;
  margin: 10px;
  padding: 10px;

  img {
    width: 200px;
  }
`;
// No exercício anterior, vimos como manipular listas no estado
// Agora veremos como mostrar essas listas na tela!

// Trabalharemos com a lista de frutas e a lista de carros que já vimos
const frutas = ["banana", "caqui", "carambola", "mamão"];
const carros = [
  {
    id: 1,
    modelo: "Onix",
    ano: 2019,
    marca: "Chevrolet",
    imagem: "https://cdn.motor1.com/images/mgl/AbOg2/s1/chevrolet-onix-2019.jpg"
  },
  {
    id: 2,
    modelo: "Sandero",
    ano: 2018,
    marca: "Renault",
    imagem:
      "https://s2.glbimg.com/Ovu0nv1KGEOuIxgwraOeViklKj0=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/f/B/BUkdkQToelBImwr3o2Kg/2014-06-24-sandero-04.jpg"
  },
  {
    id: 3,
    modelo: "Crossfox",
    ano: 2016,
    marca: "Volkswagen",
    imagem:
      "https://s2.glbimg.com/ok73nfK1VJ25ZvqCcM4L6w5Ei4Q=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/T/G/PBO7mmTCqx3GCXjW2bOQ/2014-11-05-crossfox-11.jpg"
  }
];

const App = () => {
  // Colocamos essas listas como valor inicial dos estados
  const [frutasFeira, setFrutasFeira] = useState(frutas);
  const [carrosLoja, setCarrosLoja] = useState(carros);

  // Agora vamos mostrar esses dados na tela para os usuários!
  // Vamos fazer o exemplo das frutas primeiro

  // Quero transformar um array de strings em um array de componentes
  // Para fazer isso, o jeito mais fácil é usando a função map!
  // Guardamos o array resultante em uma variável e chamamos ela na tela

  const componentesFrutas = frutasFeira.map((fruta) => {
    // Essa função está colocando cada fruta num componente li
    // e guardando esses componentes na variável componentesFrutas
    return <li key={fruta}>{fruta}</li>;
  });

  // Agora é só chamar a variável componentesFrutas na tela!

  // Você deve implementar a mesma funcionalidade para os carros agora
  // A diferença é que os objetos possuem diferentes propriedades
  // Então para mostrar o nome do carro, você deve acessá-lo através de carro.modelo
  // Isso funciona para todas as propriedades.

  // Retorne então uma lista de cards simples que mostre:
  // Modelo, ano, marca e imagem do seu carro
  // Não se esqueça de colocar uma propriedade key no seu componente (o valor pode ser o id do carro!)
  const componentesCarro = carrosLoja.map((carro) => {
    return (
      <Card>
        <li>{carro.modelo}</li>
        <li>{carro.ano}</li>
        <li>{carro.marca}</li>
        <img src={carro.imagem} />
      </Card>
    );
  });

  return (
    <div>
      {componentesFrutas}
      <hr />
      {componentesCarro}
    </div>
  );
};

export default App;
