import { useHistory } from 'react-router-dom'
import { Container, Button } from '../styles/HeaderStyled'
import home from '../uteis/home.svg'
import adm from '../uteis/adm.svg'

const Header = (props) => {
    const history = useHistory()
    const token = localStorage.getItem("token")

    const AreaFuncionarios = () => {
        if (token === null){
            props.goTo("/login", history)
        }else{
            props.goTo("/adminHomePage", history)
        }
    }

    return (
        <Container>
            <h1 onClick={() => props.goTo("/", history)}>Bella Viagem</h1>
            <Button>
                <img src={home} onClick={() => props.goTo("/", history)} alt="icone de home"/>
                <img src={adm} onClick={AreaFuncionarios} alt="icone da area restrita a funcionarios"/>
                
            </Button>
        </Container>
    )
}

export default Header