import Loading from "../../components/Card/Loading"
import { Main, CardUsuario, DivTexto, Footer, Buttons, Match, Passar } from "./Styled"



const TelaPrincipal = (props) => {
    return (
        <>
            {props.perfilUsuario.photo ? <> <Main>
                <CardUsuario imagem={props.perfilUsuario.photo}>
                    <DivTexto>
                        <h2>{props.perfilUsuario.name}, {props.perfilUsuario.age}</h2>
                        <h3 key={props.perfilUsuario.id}>{props.perfilUsuario.bio}</h3>
                    </DivTexto>
                </CardUsuario>
            </Main>

                <Footer>
                    <Buttons>
                        <Passar onClick={() => props.darMatch(props.perfilUsuario.id, false)}>X</Passar>
                        <Match onClick={() => props.darMatch(props.perfilUsuario.id, true)}>♥️</Match>
                    </Buttons>
                </Footer> </> : <Loading/>}
            {/* <Main>
                <CardUsuario imagem={props.perfilUsuario.photo}>
                    <DivTexto>
                        <h2>{props.perfilUsuario.name}, {props.perfilUsuario.age}</h2>
                        <h3 key={props.perfilUsuario.id}>{props.perfilUsuario.bio}</h3>
                    </DivTexto>
                </CardUsuario>
            </Main>

            <Footer>
                <Buttons>
                    <Passar onClick={() => props.darMatch(props.perfilUsuario.id, false)}>X</Passar>
                    <Match onClick={() => props.darMatch(props.perfilUsuario.id, true)}>♥️</Match>
                </Buttons>
            </Footer> */}
        </>
    )
}

export default TelaPrincipal