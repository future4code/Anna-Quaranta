import React from "react"
import styled from "styled-components"


const DivEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


class Final extends React.Component {
    render() {
        return (
            <DivEstilizada>
                <h1>O FORMULÁRIO ACABOU</h1>
                <h2>Muito obrigado por participar! Entraremos em contato!</h2>
            </DivEstilizada>
        )
    }
}

export default Final