import {Container} from "./StyledCadastre"
import cadastre from "../../assets/images/cadastre.svg"
import { Central } from "../LoginPage/StyledLogin"
import CadastreForm from "../../components/CadastreForm/CadastreForm"

const CadastrePage = () => {

    return (
        <Container>
            <Central>
                <img src={cadastre} alt="imagem de uma garota de pernas cruzadas em cima de um chat bagunçado"/>
                <h2>CadastrePage</h2>
               <CadastreForm/>
            </Central>
        </Container>
    )
}

export default CadastrePage