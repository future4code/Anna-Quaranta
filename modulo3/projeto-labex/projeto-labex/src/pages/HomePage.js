import {Container} from '../styles/HomePageStyled'
import {useHistory} from 'react-router-dom'
import Header from '../components/Header'

const HomePage = () => {
    const history = useHistory()

    const goToTheListTripsPage = () => {
        history.push("/listTripsPage")
    }


    return (
        <Container>
            <h1>Bella Viagem</h1>
            <button onClick={goToTheListTripsPage}>Vamos viajar!</button>
        </Container>
    )
}

export default HomePage;