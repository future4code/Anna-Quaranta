import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno";
import styled from 'styled-components';

const AppEstilizado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`

const SectionContainerEstilizada = styled.div`
  width: 40vw;
  margin: 10px 0;
`

const TituloSectionContainer = styled.h3`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
function App() {
  return (
    <AppEstilizado>
      <SectionContainerEstilizada>
        <TituloSectionContainer>Dados pessoais</TituloSectionContainer>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
          nome="Isabella"
          descricao="Oi, eu sou a Isabella. Sou uma aluna da Labenu. Adoro aprender mas esse React está dando trabalho."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </SectionContainerEstilizada>
      <SectionContainerEstilizada>
        <CardPequeno texto="Email:" conteudo="bellaquaranta@gmail.com" />
        <CardPequeno texto="Endereço:" conteudo="Rua dos Alfeneiros Nº 4" />
      </SectionContainerEstilizada>

      <SectionContainerEstilizada>
        <TituloSectionContainer>Experiências profissionais</TituloSectionContainer>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Estudante"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Sendo o alienigena."
        />
      </SectionContainerEstilizada>

      <SectionContainerEstilizada>
        <TituloSectionContainer>Minhas redes sociais</TituloSectionContainer>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </SectionContainerEstilizada>
    </AppEstilizado>
  );
}

export default App;
