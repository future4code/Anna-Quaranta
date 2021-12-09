import { Container, Card } from '../styles/HomePageStyled'
import { useHistory } from 'react-router-dom'

const HomePage = (props) => {
    const history = useHistory()

    return (
        <Container>
            <Card>
                <h1>Bella Viagem</h1>
                <button onClick={() => props.goTo("/listTrips", history)}>Vamos viajar!</button>
            </Card>
        </Container>
    )
}

export default HomePage;