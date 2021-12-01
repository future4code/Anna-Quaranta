import React, { useEffect, useState } from "react";

// Lista de carros que tenho em uma loja (objetos)
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

const ExercicioObjetos = () => {
  const [carrosLoja, setCarrosLoja] = useState(carros);

  useEffect(() => {
    console.log(carrosLoja);
  }, [carrosLoja]);

  // Agora é com você!
  // 1) Preencha as 2 funções abaixo
  // 2) Chame elas no onClick dos botões com os devidos parâmetros!
  // 3) Quando o estado for atualizado, o resultado vai aparecer no console!

  // Um carro deve ter: id, modelo, ano, marca e imagem
  const adicionaCarro = (carro) => {
    const copiaCarros = [...carrosLoja, carro];
    setCarrosLoja(copiaCarros);
  };

  // Nas funções de deletar objetos, é comum que a gente receba o id do objeto que queremos deletar
  const removeCarro = (id) => {
    const copiaCarros = carrosLoja.filter((carro) => {
      return carro.id !== id;
    });

    setCarrosLoja(copiaCarros);
  };

  const carro = {
    id: 4,
    modelo: "Ford Mustang",
    ano: 1964,
    marca: "Ford",
    imagem:
      "https://motorshow.com.br/wp-content/uploads/sites/2/2017/03/ford-mustang-00002-731x420.jpg"
  };

  return (
    <div>
      <button
        onClick={() => {
          adicionaCarro(carro);
        }}
      >
        EXERCÍCIO: Adiciona Carro
      </button>
      <button
        onClick={() => {
          removeCarro(4);
        }}
      >
        EXERCÍCIO: Remove Carro
      </button>
    </div>
  );
};

export default ExercicioObjetos;
