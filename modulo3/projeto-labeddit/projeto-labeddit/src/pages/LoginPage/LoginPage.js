import {Central, Container} from "./StyledLogin"
import loginImage from "../../assets/images/loginImage.svg"
import LoginForm from "../../components/LoginForm/LoginForm"

const LoginPage = () => {
    
    return (
        <Container>
            <Central>
                <img src={loginImage} alt="imagem de uma pessoa em uma porta" />
                <h2>Login</h2>
                <LoginForm/>
            </Central>
        </Container>
    )
}

export default LoginPage