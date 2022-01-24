import { Typography } from "@material-ui/core"
import error from "../../assets/images/error.svg"
import { Container } from "./StyledError"


const ErrorPage = () => {
    return (
        <Container>
            <img src={error} alt="imagem de 505 - página não encontrada" />
            <Typography color="primary" variant="h4" align="center">Erro 404 - Página não encontrada</Typography>
        </Container>
    )
}

export default ErrorPage