import { useHistory } from 'react-router-dom'
import { Container, Button } from '../styles/HeaderStyled'

const Header = (props) => {
    const history = useHistory()
    const token = localStorage.getItem("token")

    const AreaFuncionarios = () => {
        if (token === null){
            props.goTo("/loginPage", history)
        }else{
            props.goTo("/adminHomePage", history)
        }
    }

    return (
        <Container>
            <h1>Bella Viagem</h1>
            <Button>
                <button onClick={() => props.goTo("/", history)}>Home</button>
                <button onClick={AreaFuncionarios}>Área do Funcionário</button>
            </Button>
        </Container>
    )
}

export default Header