import React from "react";
import styled from "styled-components";

class Etapa1 extends React.Component {
    render(){
        return(
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <p>1. Qual o seu nome?</p>
                <input type="text" required/> 
                <p>2. Qual sua idade?</p>
                <input type="number" required/>
                <p>3. Qual seu email?</p>
                <input type="email" required/>
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option selected></option>
                    <option>Ensino Fundamental Incompleto</option>
                    <option>Ensino Fundamental Completo</option>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                </select>
            </div>
        )
    }
}

export default Etapa1