import React, { useEffect, useState } from "react";

// Lista de números escolhidos na mega sena (números)
const mega = [6, 17, 23, 48, 54, 59];

// Temos aqui uma estrutura parecida com a que vimos no App.js
// Mas dessa vez, ao invés de strings, vamos manipular números
const ExercicioNumeros = () => {
  const [numerosMega, setNumerosMega] = useState(mega);

  // Esse useEffect vai te mostrar o estado atualizado no console :)
  useEffect(() => {
    console.log(numerosMega);
  }, [numerosMega]);

  // Agora é com você!
  // 1) Preencha as 2 funções abaixo
  // 2) Chame elas no onClick dos botões com os devidos parâmetros!
  // 3) Quando o estado for atualizado, o resultado vai aparecer no console!

  const adicionaNumero = (num) => {
    const copiaLista = [...numerosMega, num];
    setNumerosMega(copiaLista);
  };

  // Faça com filter OU splice, como preferir :D
  const removeNumero = (num) => {
    const copiaLista = numerosMega.filter((numero) => {
      return numero !== num;
    });

    setNumerosMega(copiaLista);
  };

  return (
    <div>
      <button onClick={() => adicionaNumero(20)}>
        EXERCÍCIO: Adiciona Número
      </button>
      <button onClick={() => removeNumero(20)}>EXERCÍCIO: Remove Número</button>
    </div>
  );
};

// Muito bem! Agora entre no arquivo ExercicioObjetos
export default ExercicioNumeros;
