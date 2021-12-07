import { useHistory } from 'react-router-dom'
import { Container, Button } from '../styles/HeaderStyled'

const Header = (props) => {
    const history = useHistory()

    // const goTo = (path) => {
    //     history.push(path)
    // }

    return (
        <Container>
            <h1>Bella Viagem</h1>
            <Button>
                <button onClick={() => props.goTo("/", history)}>Home</button>
                <button onClick={() => props.goTo("/loginPage", history)}>Área do Funcionário</button>
            </Button>
        </Container>
    )
}

export default Header