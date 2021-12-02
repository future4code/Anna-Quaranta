import { Main, CardUsuario, DivTexto, Footer, Buttons, Match, Passar } from "../components/Card/CardStyled"

const TelaPrincipal = (props) => {
    return (
        <>
            <Main>
                <CardUsuario imagem={props.perfilUsuario.photo}>
                    <DivTexto>
                        <h2>{props.perfilUsuario.name}, {props.perfilUsuario.age}</h2>
                        <p key={props.perfilUsuario.id}>{props.perfilUsuario.bio}</p>
                    </DivTexto>
                </CardUsuario>
            </Main>

            <Footer>
                <Buttons>
                    <Passar onClick={() => props.darMatch(props.perfilUsuario.id, false)}>X</Passar>
                    <Match onClick={() => props.darMatch(props.perfilUsuario.id, true)}>♥️</Match>
                </Buttons>
            </Footer>
        </>
    )
}

export default TelaPrincipal