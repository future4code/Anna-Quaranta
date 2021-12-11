import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { baseUrl } from "../constants/url"
import { Container, Container2, Input, Icones} from "../styles/LoginPageStyled"
import loginIcon from "../uteis/login.svg"
import back from "../uteis/back.svg"

const LoginPage = (props) => {
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChange = (e) => {
        switch (e.target.name) {
            case "email":
                console.log(e.target.value)
                setEmail(e.target.value)
                break;
            case "password":
                console.log(e.target.value)
                setPassword(e.target.value)
                break
            default:
                alert("Campo não encontrado. Entre em contato conosco!")
                break;
        }
    }

    const login = async () => {
        const body = {
            email: email,
            password: password
        }

        try {
            const response = await axios.post(`${baseUrl}/login`, body)
            alert("Acesso permitido! Bem vinde!")
            localStorage.setItem("token", response.data.token)
            history.replace("/adminHomePage")

        } catch (error) {
            console.log(error.response)
            alert("O usuário não foi encontrado. Tente novamente")
            setEmail("")
            setPassword("")
        }
    }

    return (
        <Container>
            <Container2>
                <h2>Login</h2>
                <Input>
                    <label>
                        <legend>Digite seu email:</legend>
                        <input placeholder="Email" value={email} name="email" onChange={onChange} />
                    </label>
                    <label>
                        <legend>Digite sua senha:</legend>
                        <input type="password" placeholder="Senha" value={password} name="password" onChange={onChange} />
                    </label>
                </Input>
                <Icones>
                    <img src={back} onClick= {() => props.goToBack(history)} alt="Icone de voltar"/>
                    <img src={loginIcon} onClick={login} alt="Icone de Login"/>
                </Icones>
            </Container2>
        </Container>
    )
}

export default LoginPage;